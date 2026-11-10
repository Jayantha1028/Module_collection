terraform {
  required_version = ">= 1.3.0"
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

provider "docker" {}

provider "random" {}

module "monitoring_stack" {
  source   = "./modules/monitoring-stack"
  for_each = var.tenants

  tenant_name    = each.key
  grafana_port   = each.value.grafana_port
  prom_port      = each.value.prom_port
  retention_days = try(coalesce(each.value.retention_days, 15), 15)
  scrape_targets = concat(
    try(each.value.extra_targets, []),
    try(each.value.scrape_targets, [])
  )
}
