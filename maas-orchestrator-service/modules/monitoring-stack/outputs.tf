output "grafana_url" {
  description = "Grafana dashboard URL"
  value       = "http://localhost:${var.grafana_port}"
}

output "prometheus_url" {
  description = "Prometheus web UI URL"
  value       = "http://localhost:${var.prom_port}"
}

output "admin_username" {
  description = "Grafana admin username"
  value       = "admin"
}

output "admin_password" {
  description = "Generated Grafana admin password"
  value       = random_password.grafana_admin.result
  sensitive   = true
}

output "network_name" {
  description = "Isolated Docker network name"
  value       = docker_network.tenant_net.name
}

output "prometheus_volume" {
  description = "Prometheus persistent volume name"
  value       = docker_volume.prometheus_data.name
}

output "grafana_volume" {
  description = "Grafana persistent volume name"
  value       = docker_volume.grafana_data.name
}
