terraform {
  required_providers {
    docker = {
      source  = "kreuzwerker/docker"
      version = "~> 3.0"
    }
    random = {
      source  = "hashicorp/random"
      version = "~> 3.5"
    }
  }
}

locals {
  clean_name = lower(var.tenant_name)
}

resource "docker_network" "tenant_net" {
  name = "${local.clean_name}-net"
}

resource "docker_volume" "prometheus_data" {
  name = "${local.clean_name}-prom-data"
}

resource "docker_volume" "grafana_data" {
  name = "${local.clean_name}-grafana-data"
}

resource "random_password" "grafana_admin" {
  length  = 16
  special = false
}

resource "docker_container" "node_exporter" {
  name    = "${local.clean_name}-node-exporter"
  image   = var.node_exporter_image
  restart = "unless-stopped"

  networks_advanced {
    name = docker_network.tenant_net.name
  }
}

resource "docker_container" "prometheus" {
  name    = "${local.clean_name}-prometheus"
  image   = var.prometheus_image
  restart = "unless-stopped"

  networks_advanced {
    name = docker_network.tenant_net.name
  }

  ports {
    internal = 9090
    external = var.prom_port
  }

  command = [
    "--config.file=/etc/prometheus/prometheus.yml",
    "--storage.tsdb.path=/prometheus",
    "--storage.tsdb.retention.time=${var.retention_days}d",
    "--web.enable-lifecycle"
  ]

  volumes {
    volume_name    = docker_volume.prometheus_data.name
    container_path = "/prometheus"
  }

  upload {
    content = templatefile("${path.module}/templates/prometheus.yml.tftpl", {
      node_exporter_target = "${local.clean_name}-node-exporter:9100"
      scrape_targets       = var.scrape_targets
    })
    file = "/etc/prometheus/prometheus.yml"
  }

  depends_on = [
    docker_container.node_exporter
  ]
}

resource "docker_container" "grafana" {
  name    = "${local.clean_name}-grafana"
  image   = var.grafana_image
  restart = "unless-stopped"

  networks_advanced {
    name = docker_network.tenant_net.name
  }

  ports {
    internal = 3000
    external = var.grafana_port
  }

  env = [
    "GF_SECURITY_ADMIN_USER=admin",
    "GF_SECURITY_ADMIN_PASSWORD=${random_password.grafana_admin.result}",
    "GF_USERS_ALLOW_SIGN_UP=false"
  ]

  volumes {
    volume_name    = docker_volume.grafana_data.name
    container_path = "/var/lib/grafana"
  }

  upload {
    content = templatefile("${path.module}/templates/datasource.yml.tftpl", {
      prom_host = "${local.clean_name}-prometheus"
    })
    file = "/etc/grafana/provisioning/datasources/datasource.yaml"
  }

  upload {
    content = templatefile("${path.module}/templates/dashboards.yml.tftpl", {})
    file    = "/etc/grafana/provisioning/dashboards/dashboards.yaml"
  }

  upload {
    content = file("${path.module}/templates/node-dashboard.json")
    file    = "/etc/grafana/dashboards/node-overview.json"
  }

  depends_on = [
    docker_container.prometheus
  ]
}
