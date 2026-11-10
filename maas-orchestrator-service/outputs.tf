output "tenants" {
  description = "Detailed stack configuration and credentials per tenant"
  sensitive   = true
  value = {
    for name, stack in module.monitoring_stack : name => {
      tenant_name    = name
      grafana_url    = stack.grafana_url
      prometheus_url = stack.prometheus_url
      admin_username = stack.admin_username
      admin_password = stack.admin_password
      docker_network = stack.network_name
      prom_volume    = stack.prometheus_volume
      grafana_volume = stack.grafana_volume
    }
  }
}

output "urls" {
  description = "Dashboard and Prometheus URLs for each tenant"
  value = {
    for name, stack in module.monitoring_stack : name => {
      grafana_url    = stack.grafana_url
      prometheus_url = stack.prometheus_url
    }
  }
}
