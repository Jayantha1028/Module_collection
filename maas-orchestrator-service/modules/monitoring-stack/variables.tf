variable "tenant_name" {
  type        = string
  description = "Name of the tenant (used for container naming, networking, and volumes)"

  validation {
    condition     = can(regex("^[a-zA-Z0-9-]+$", var.tenant_name))
    error_message = "tenant_name must consist only of alphanumeric characters and hyphens."
  }
}

variable "grafana_port" {
  type        = number
  description = "Host port exposed for Grafana"

  validation {
    condition     = var.grafana_port >= 1024 && var.grafana_port <= 65535
    error_message = "grafana_port must be in the unprivileged port range (1024-65535)."
  }
}

variable "prom_port" {
  type        = number
  description = "Host port exposed for Prometheus"

  validation {
    condition     = var.prom_port >= 1024 && var.prom_port <= 65535
    error_message = "prom_port must be in the unprivileged port range (1024-65535)."
  }
}

variable "retention_days" {
  type        = number
  description = "Prometheus metrics retention period in days"
  default     = 15

  validation {
    condition     = var.retention_days >= 1 && var.retention_days <= 30
    error_message = "retention_days must be between 1 and 30 days."
  }
}

variable "scrape_targets" {
  type        = list(string)
  description = "Optional additional scrape targets for Prometheus"
  default     = []
}

variable "prometheus_image" {
  type        = string
  description = "Docker image for Prometheus"
  default     = "prom/prometheus:v2.54.1"
}

variable "grafana_image" {
  type        = string
  description = "Docker image for Grafana"
  default     = "grafana/grafana:11.1.0"
}

variable "node_exporter_image" {
  type        = string
  description = "Docker image for Node Exporter"
  default     = "prom/node-exporter:v1.8.2"
}
