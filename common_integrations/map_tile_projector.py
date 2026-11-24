"""
common_integrations.map_tile_projector
======================================
Geospatial coordinate conversions (WGS84 lat/lon to Web Mercator meters / tile XYZ)
for 3D GIS visualization, terrain raycasting, and map serving.
"""
import math
from typing import Tuple

def deg_to_num(lat_deg: float, lon_deg: float, zoom: int) -> Tuple[int, int]:
    """Converts latitude and longitude into slippy map tile X, Y coordinates."""
    lat_rad = math.radians(lat_deg)
    n = 2.0 ** zoom
    xtile = int((lon_deg + 180.0) / 360.0 * n)
    ytile = int((1.0 - math.asinh(math.tan(lat_rad)) / math.pi) / 2.0 * n)
    return (xtile, ytile)

def num_to_deg(xtile: int, ytile: int, zoom: int) -> Tuple[float, float]:
    """Converts tile coordinates into NW latitude and longitude."""
    n = 2.0 ** zoom
    lon_deg = xtile / n * 360.0 - 180.0
    lat_rad = math.atan(math.sinh(math.pi * (1 - 2 * ytile / n)))
    lat_deg = math.degrees(lat_rad)
    return (lat_deg, lon_deg)
