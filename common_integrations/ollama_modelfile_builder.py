"""
common_integrations.ollama_modelfile_builder
============================================
Programmatic Ollama Modelfile generator for lightweight custom local LLMs.
Embeds system instructions, temperature/sampling parameters, and stop tokens.
"""
from typing import Dict, List, Optional


def generate_ollama_modelfile(
    base_model: str = "qwen2.5:0.5b",
    system_prompt: str = "You are a helpful domain-expert AI assistant.",
    temperature: float = 0.3,
    top_p: float = 0.85,
    repeat_penalty: float = 1.15,
    context_length: int = 4096,
    stop_tokens: Optional[List[str]] = None
) -> str:
    """Generate a valid Ollama Modelfile text string ready for `ollama create`."""
    stops = stop_tokens or ["<|im_end|>", "<|endoftext|>"]
    stop_lines = "\n".join([f'PARAMETER stop "{s}"' for s in stops])

    escaped_prompt = system_prompt.replace('"""', '\\"\\"\\"')

    return f"""# Automated Ollama Modelfile
FROM {base_model}

PARAMETER temperature {temperature}
PARAMETER top_p {top_p}
PARAMETER repeat_penalty {repeat_penalty}
PARAMETER num_ctx {context_length}
{stop_lines}

SYSTEM \"\"\"{escaped_prompt}\"\"\"
"""
