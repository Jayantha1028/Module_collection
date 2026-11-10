"""
common_integrations.version_comparator
======================================
Pure-Python Enterprise Linux Package Version Comparator matching dpkg, rpmvercmp, and apk rules.
Eliminates false positives on backported security patches with zero external dependencies.
"""
import re
from typing import Tuple


def _debian_split_version(version_str: str) -> Tuple[int, str, str]:
    version_str = version_str.strip()
    epoch = 0
    if ":" in version_str:
        ep_part, remainder = version_str.split(":", 1)
        try:
            epoch = int(ep_part)
        except ValueError:
            epoch = 0
        version_str = remainder

    if "-" in version_str:
        upstream, revision = version_str.rsplit("-", 1)
    else:
        upstream, revision = version_str, "0"
    return epoch, upstream, revision


def _dpkg_order_char(c: str) -> int:
    if c == "~":
        return -1
    if c == "":
        return 0
    if c.isalpha():
        return ord(c)
    return ord(c) + 256


def _dpkg_compare_strings(s1: str, s2: str) -> int:
    i, j = 0, 0
    len1, len2 = len(s1), len(s2)

    while i < len1 or j < len2:
        while (i < len1 and not s1[i].isdigit()) or (j < len2 and not s2[j].isdigit()):
            c1 = s1[i] if i < len1 and not s1[i].isdigit() else ""
            c2 = s2[j] if j < len2 and not s2[j].isdigit() else ""
            o1, o2 = _dpkg_order_char(c1), _dpkg_order_char(c2)
            if o1 != o2:
                return -1 if o1 < o2 else 1
            if i < len1 and not s1[i].isdigit():
                i += 1
            if j < len2 and not s2[j].isdigit():
                j += 1

        num1_str = ""
        while i < len1 and s1[i].isdigit():
            num1_str += s1[i]
            i += 1
        num2_str = ""
        while j < len2 and s2[j].isdigit():
            num2_str += s2[j]
            j += 1

        if num1_str or num2_str:
            n1 = int(num1_str) if num1_str else 0
            n2 = int(num2_str) if num2_str else 0
            if n1 != n2:
                return -1 if n1 < n2 else 1
    return 0


def compare_debian_versions(v1: str, v2: str) -> int:
    """Compare two Debian/Ubuntu dpkg versions. Returns -1 if v1 < v2, 0 if equal, 1 if v1 > v2."""
    e1, u1, r1 = _debian_split_version(v1)
    e2, u2, r2 = _debian_split_version(v2)
    if e1 != e2:
        return -1 if e1 < e2 else 1
    cmp_u = _dpkg_compare_strings(u1, u2)
    return cmp_u if cmp_u != 0 else _dpkg_compare_strings(r1, r2)


def _rpmvercmp(a: str, b: str) -> int:
    if a == b:
        return 0
    seg_regex = re.compile(r"([0-9]+|[a-zA-Z]+|~)")
    segs1, segs2 = seg_regex.findall(a), seg_regex.findall(b)
    for s1, s2 in zip(segs1, segs2):
        if s1 == "~" or s2 == "~":
            if s1 == "~" and s2 != "~":
                return -1
            if s1 != "~" and s2 == "~":
                return 1
            continue
        if s1.isdigit() and s2.isdigit():
            n1, n2 = int(s1), int(s2)
            if n1 != n2:
                return -1 if n1 < n2 else 1
        elif not s1.isdigit() and not s2.isdigit():
            if s1 != s2:
                return -1 if s1 < s2 else 1
        else:
            return 1 if s1.isdigit() else -1
    if len(segs1) != len(segs2):
        if len(segs1) > len(segs2):
            return -1 if segs1[len(segs2)] == "~" else 1
        return 1 if segs2[len(segs1)] == "~" else -1
    return 0


def compare_rpm_versions(v1: str, v2: str) -> int:
    """Compare two RHEL/CentOS/Fedora RPM versions. Returns -1 if v1 < v2, 0 if equal, 1 if v1 > v2."""
    def parse_rpm(v: str) -> Tuple[int, str, str]:
        epoch = 0
        if ":" in v:
            ep_str, rest = v.split(":", 1)
            try:
                epoch = int(ep_str)
            except ValueError:
                epoch = 0
            v = rest
        ver, rel = v.split("-", 1) if "-" in v else (v, "0")
        return epoch, ver, rel

    e1, ver1, rel1 = parse_rpm(v1)
    e2, ver2, rel2 = parse_rpm(v2)
    if e1 != e2:
        return -1 if e1 < e2 else 1
    cmp_v = _rpmvercmp(ver1, ver2)
    return cmp_v if cmp_v != 0 else _rpmvercmp(rel1, rel2)


_APK_SUFFIX_ORDER = {
    "alpha": 1, "beta": 2, "pre": 3, "rc": 4, "": 5,
    "cvs": 6, "svn": 7, "git": 8, "hg": 9, "p": 10, "patch": 11,
}


def compare_apk_versions(v1: str, v2: str) -> int:
    """Compare two Alpine Linux APK versions (e.g., 1.2.3_rc1-r2 vs 1.2.3-r0)."""
    def tokenize(v: str):
        v = v.split("-r")[0]
        parts = re.split(r"[._]", v)
        tokens = []
        for p in parts:
            if p.isdigit():
                tokens.append((0, int(p)))
            else:
                m = re.match(r"^([a-zA-Z]+)(\d*)$", p)
                if m:
                    rank = _APK_SUFFIX_ORDER.get(m.group(1).lower(), 0)
                    num = int(m.group(2)) if m.group(2) else 0
                    tokens.append((rank, num))
                else:
                    tokens.append((0, p))
        return tokens

    t1, t2 = tokenize(v1), tokenize(v2)
    for p1, p2 in zip(t1, t2):
        if p1 != p2:
            return -1 if p1 < p2 else 1
    if len(t1) != len(t2):
        if len(t1) > len(t2):
            return -1 if isinstance(t1[len(t2)], tuple) and t1[len(t2)][0] < 5 else 1
        return 1 if isinstance(t2[len(t1)], tuple) and t2[len(t1)][0] < 5 else -1

    r1 = int(v1.split("-r")[-1]) if "-r" in v1 and v1.split("-r")[-1].isdigit() else 0
    r2 = int(v2.split("-r")[-1]) if "-r" in v2 and v2.split("-r")[-1].isdigit() else 0
    return -1 if r1 < r2 else (1 if r1 > r2 else 0)


def is_package_vulnerable(installed_version: str, fixed_version: str, distro: str = "debian") -> bool:
    """Determine if installed_version is strictly older than fixed_version across Linux distros."""
    if not installed_version or not fixed_version:
        return False
    d = distro.lower()
    if "rhel" in d or "centos" in d or "rpm" in d or "fedora" in d:
        return compare_rpm_versions(installed_version, fixed_version) < 0
    elif "alpine" in d or "apk" in d:
        return compare_apk_versions(installed_version, fixed_version) < 0
    return compare_debian_versions(installed_version, fixed_version) < 0
