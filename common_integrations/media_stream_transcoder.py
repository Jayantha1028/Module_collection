"""
common_integrations.media_stream_transcoder
===========================================
Video transcoding and adaptive bitrate ladder configuration module for HLS and DASH.
"""
from typing import List, Dict, Any

STANDARD_LADDER = [
    {"name": "1080p", "width": 1920, "height": 1080, "bitrate_kbps": 5000, "audio_kbps": 192},
    {"name": "720p", "width": 1280, "height": 720, "bitrate_kbps": 2800, "audio_kbps": 128},
    {"name": "480p", "width": 854, "height": 480, "bitrate_kbps": 1400, "audio_kbps": 96},
    {"name": "360p", "width": 640, "height": 360, "bitrate_kbps": 800, "audio_kbps": 64}
]

def generate_hls_transcode_commands(input_path: str, output_dir: str) -> List[Dict[str, Any]]:
    """Builds multi-bitrate FFmpeg command specifications for HLS packaging."""
    profiles = []
    for profile in STANDARD_LADDER:
        p_name = profile["name"]
        cmd = (
            f"ffmpeg -i {input_path} -vf scale={profile['width']}:{profile['height']} "
            f"-b:v {profile['bitrate_kbps']}k -b:a {profile['audio_kbps']}k "
            f"-hls_time 6 -hls_playlist_type vod {output_dir}/{p_name}.m3u8"
        )
        profiles.append({
            "profile": p_name,
            "dimensions": f"{profile['width']}x{profile['height']}",
            "bitrate_kbps": profile["bitrate_kbps"],
            "command": cmd
        })
    return profiles
