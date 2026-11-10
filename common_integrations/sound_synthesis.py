"""
common_integrations.sound_synthesis
===================================
Pure Python procedural sound synthesis generating standard uncompressed .WAV audio.
Zero external audio dependencies: uses Python standard library wave, struct, and math.
"""
import io
import math
import struct
import wave
from typing import List


def generate_tone_wav(
    frequency_hz: float = 440.0,
    duration_seconds: float = 0.5,
    sample_rate: int = 44100,
    volume: float = 0.5
) -> bytes:
    """Synthesize a pure sine wave tone with gentle attack/decay envelope into WAV bytes."""
    total_samples = int(sample_rate * duration_seconds)
    audio_buffer = io.BytesIO()

    with wave.open(audio_buffer, 'wb') as wav_file:
        wav_file.setnchannels(1)  # Mono
        wav_file.setsampwidth(2)  # 16-bit
        wav_file.setframerate(sample_rate)

        frames = bytearray()
        for i in range(total_samples):
            t = float(i) / sample_rate
            # Attack and Decay Envelope (prevents audible clicking)
            envelope = min(1.0, float(i) / 800.0) * min(1.0, float(total_samples - i) / 2000.0)
            sample_val = math.sin(2.0 * math.pi * frequency_hz * t) * volume * envelope
            int_sample = int(sample_val * 32767.0)
            int_sample = max(-32768, min(32767, int_sample))
            frames.extend(struct.pack('<h', int_sample))

        wav_file.writeframes(frames)

    return audio_buffer.getvalue()


def generate_chime_wav(
    notes_hz: List[float] = [523.25, 659.25, 783.99, 1046.50],  # C5, E5, G5, C6 major chord
    duration_per_note: float = 0.15,
    sample_rate: int = 44100
) -> bytes:
    """Synthesize a harmonious arpeggiated chime notification sound into WAV bytes."""
    audio_buffer = io.BytesIO()
    with wave.open(audio_buffer, 'wb') as wav_file:
        wav_file.setnchannels(1)
        wav_file.setsampwidth(2)
        wav_file.setframerate(sample_rate)

        all_frames = bytearray()
        for idx, freq in enumerate(notes_hz):
            note_samples = int(sample_rate * duration_per_note)
            for i in range(note_samples):
                t = float(i) / sample_rate
                envelope = math.exp(-3.0 * (float(i) / note_samples))
                val = math.sin(2.0 * math.pi * freq * t) * 0.4 * envelope
                int_sample = int(val * 32767.0)
                all_frames.extend(struct.pack('<h', int_sample))

        wav_file.writeframes(all_frames)

    return audio_buffer.getvalue()
