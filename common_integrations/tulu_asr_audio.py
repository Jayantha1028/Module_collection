"""
common_integrations.tulu_asr_audio
==================================
Reusable speech audio preprocessor and multi-script transcription mapping pipeline.
"""
from typing import Any, Dict, List, Optional
import math


def normalize_audio_samples(samples: List[float], target_peak: float = 0.95) -> List[float]:
    """Normalize raw floating-point audio samples to target peak amplitude."""
    if not samples:
        return []
    max_amp = max(abs(s) for s in samples)
    if max_amp == 0:
        return samples
    gain = target_peak / max_amp
    return [s * gain for s in samples]


def trim_audio_silence(samples: List[float], threshold: float = 0.01) -> List[float]:
    """Trim leading and trailing silence below energy threshold."""
    if not samples:
        return []
    start = 0
    while start < len(samples) and abs(samples[start]) < threshold:
        start += 1
    end = len(samples) - 1
    while end > start and abs(samples[end]) < threshold:
        end -= 1
    return samples[start:end + 1]


def compute_audio_rms_db(samples: List[float]) -> float:
    """Compute Root Mean Square (RMS) energy in decibels (dBFS)."""
    if not samples:
        return -100.0
    mean_sq = sum(s * s for s in samples) / len(samples)
    rms = math.sqrt(mean_sq)
    if rms == 0:
        return -100.0
    return round(20.0 * math.log10(rms), 2)
