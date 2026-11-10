"""
common_integrations.sbom_layer_inspector
=======================================
Pure-Python Container Package Metadata Parser & SBOM Generator.
Extracts structured Software Bill of Materials from dpkg, apk, and requirements.txt strings.
"""
import re
from typing import Dict, List


def parse_dpkg_status(dpkg_content: str) -> List[Dict[str, str]]:
    """Parse Debian/Ubuntu /var/lib/dpkg/status text into normalized package inventory."""
    packages: List[Dict[str, str]] = []
    blocks = dpkg_content.strip().split("\n\n")
    for block in blocks:
        pkg_name = ""
        version = ""
        status = ""
        for line in block.splitlines():
            if line.startswith("Package: "):
                pkg_name = line[9:].strip()
            elif line.startswith("Version: "):
                version = line[9:].strip()
            elif line.startswith("Status: "):
                status = line[8:].strip()
        if pkg_name and version and ("installed" in status.lower() or not status):
            packages.append({
                "ecosystem": "dpkg",
                "name": pkg_name,
                "version": version
            })
    return packages


def parse_apk_installed(apk_content: str) -> List[Dict[str, str]]:
    """Parse Alpine Linux /lib/apk/db/installed text into normalized package inventory."""
    packages: List[Dict[str, str]] = []
    blocks = apk_content.strip().split("\n\n")
    for block in blocks:
        pkg_name = ""
        version = ""
        for line in block.splitlines():
            if line.startswith("P:"):
                pkg_name = line[2:].strip()
            elif line.startswith("V:"):
                version = line[2:].strip()
        if pkg_name and version:
            packages.append({
                "ecosystem": "apk",
                "name": pkg_name,
                "version": version
            })
    return packages


def parse_requirements_txt(req_content: str) -> List[Dict[str, str]]:
    """Parse Python requirements.txt text into normalized dependency items."""
    deps: List[Dict[str, str]] = []
    for line in req_content.splitlines():
        clean = line.split("#")[0].strip()
        if not clean:
            continue
        m = re.match(r"^([a-zA-Z0-9_.\-]+)\s*(?:==|>=|<=|~=|>|<)?\s*([^\s;]+)?", clean)
        if m:
            deps.append({
                "ecosystem": "pypi",
                "name": m.group(1),
                "version": m.group(2) or "any"
            })
    return deps
