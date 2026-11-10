variable "tenants" {
  type = map(object({
    grafana_port   = number
    prom_port      = number
    retention_days = optional(number, 15)
    extra_targets  = optional(list(string), [])
    scrape_targets = optional(list(string), [])
  }))
  description = "Map of tenant monitoring configurations"
}
