"""
common_integrations.dataset_streaming_chunker
============================================
Streaming dataset chunker and batching iterator for language model pre-training.
Splits continuous raw text into fixed-length context windows with optional sliding overlap.
"""
from typing import Any, Generator, List, Optional, Tuple


def chunk_text_into_context_blocks(
    tokens: List[int],
    context_length: int = 512,
    overlap: int = 64
) -> List[List[int]]:
    """Slice long token sequences into fixed-size context windows with sliding overlap."""
    if not tokens:
        return []

    stride = max(1, context_length - overlap)
    chunks = []
    start = 0

    while start < len(tokens):
        end = start + context_length
        chunk = tokens[start:end]
        if len(chunk) < context_length:
            # Pad with zeros or EOS token if incomplete
            chunk = chunk + [0] * (context_length - len(chunk))
        chunks.append(chunk)
        start += stride

    return chunks


def stream_batch_generator(
    dataset: List[Any],
    batch_size: int = 16,
    shuffle: bool = False
) -> Generator[List[Any], None, None]:
    """Memory-efficient streaming generator yielding batches without loading full duplicates in RAM."""
    indices = list(range(len(dataset)))
    if shuffle:
        import random
        random.shuffle(indices)

    for i in range(0, len(indices), batch_size):
        batch_idx = indices[i:i + batch_size]
        yield [dataset[idx] for idx in batch_idx]
