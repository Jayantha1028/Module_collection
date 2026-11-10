"""
common_integrations
===================
Exhaustive, reusable Python library containing all 44 core domain modules,
algorithms, and integration utilities extracted across the workspace.
Directly importable into any other project without containers.
"""

# 1. Security & DevSecOps
from .security import (
    scan_k8s_manifest,
    lookup_cve,
    evaluate_pr_security_gate,
    TAXONOMY_SIGNATURES
)

# 2. Automated K8s Hardening & Remediation
from .k8s_auto_remediate import (
    remediate_workload_dict,
    remediate_yaml_string
)

# 3. Attack Graph & Kill-Chain Engine
from .attack_graph_engine import (
    AttackNode,
    AttackEdge,
    AttackGraph
)

# 4. Explainable AI (XAI) Threat Attribution
from .xai_threat_attribution import (
    attribute_risk_score,
    prioritize_remediations,
    STANDARD_FEATURE_IMPACTS
)

# 5. Bayesian & AHP Scoring
from .bayesian_ahp_scorer import (
    compute_ahp_weights,
    compute_bayesian_credible_interval
)

# 6. Security Chaos Engineering
from .chaos_engineering import (
    run_chaos_experiment,
    CHAOS_SCENARIOS
)

# 7. Authentication & JWT
from .auth_jwt import (
    hash_password,
    verify_password,
    generate_jwt,
    verify_jwt,
    generate_otp_code,
    parse_bearer_token
)

# 8. Observability & Telemetry
from .observability import (
    StructuredLogger,
    TelemetryTracker,
    AnomalyDetector
)

# 9. Language, NLP & Transliteration
from .language_nlp import (
    transliterate,
    inspect_unicode_points,
    analyze_morphology,
    lookup_lexicon
)

# 10. NLP Corpus Cleansing & Deduplication
from .nlp_text_cleaner import (
    clean_text_corpus,
    calculate_script_density,
    compute_canonical_fingerprint
)

# 11. Small Language Models (SLM) & Transformers
from .slm_transformer import (
    tokenize_text,
    decode_tokens,
    generate_text,
    compute_cross_entropy_loss,
    compute_cosine_warmup_lr
)

# 12. Streaming Dataset Chunker
from .dataset_streaming_chunker import (
    chunk_text_into_context_blocks,
    stream_batch_generator
)

# 13. Data & Financial Analytics
from .data_analytics import (
    get_nifty50_stocks,
    get_top_gainers,
    convert_currency,
    lookup_country_currency,
    get_warehouse_inventory,
    query_academic_records
)

# 14. E-Commerce Core Logic
from .ecommerce_core import (
    calculate_cart_totals,
    transition_order_state,
    verify_razorpay_signature
)

# 15. Hosted Payment Checkout Widget
from .payment_checkout_widget import (
    render_checkout_page
)

# 16. Database Operations & Backups
from .database_ops import (
    export_records_to_csv,
    import_records_from_csv,
    create_database_snapshot
)

# 17. Cloud IaC & Crossplane
from .cloud_iac_crossplane import (
    generate_crossplane_s3_bucket,
    generate_provider_config,
    reconcile_drift_diff
)

# 18. Monitoring Orchestrator (MaaS)
from .monitoring_orchestrator import (
    generate_prometheus_config,
    generate_grafana_datasource,
    generate_alert_rule
)

# 19. dbt SQL Model Compiler & Lineage
from .dbt_orchestrator import (
    compile_dbt_sql,
    extract_model_dependencies,
    build_lineage_graph
)

# 20. Computer Vision & OCR
from .vision_ocr import (
    extract_text_from_image,
    extract_entities_from_text,
    recognize_handwritten_strokes
)

# 21. Procedural Mathematics & Geometry
from .math_procedural import (
    generate_random_sequence,
    generate_spiral_coordinates,
    safe_arithmetic
)

# 22. Sound Synthesis
from .sound_synthesis import (
    generate_tone_wav,
    generate_chime_wav
)

# 23. PDF Document Intelligence
from .pdf_doc_intelligence import (
    extract_raw_pdf_text_streams,
    parse_roster_table_from_text
)

# 24. Enterprise Sales Analytics
from .sales_analytics import (
    compute_sales_metrics
)

# 25. Snowflake Cost-Optimized Sync
from .snowflake_sync import (
    generate_snowflake_sync_plan
)

# 26. Prometheus Metrics Exporter
from .prometheus_exporter_core import (
    format_prometheus_metric,
    format_metrics_bundle
)

# 27. Web Dashboard HTML Generator
from .web_dashboard_generator import (
    generate_html_dashboard
)

# 28. GitHub Developer Stats & Streak Adapter
from .github_stats_adapter import (
    calculate_language_percentages,
    calculate_contribution_streak,
    generate_stats_badge_html
)

# 29. Secure Iframe Sandboxing
from .iframe_sandbox_engine import (
    generate_sandboxed_iframe_html,
    sanitize_untrusted_html
)

# 30. IPC & Shared Memory Manager
from .ipc_shared_memory import (
    find_stale_posix_shm_segments,
    cleanup_stale_shared_memory
)

# 31. Speech & ASR Audio Preprocessing
from .tulu_asr_audio import (
    normalize_audio_samples,
    trim_audio_silence,
    compute_audio_rms_db
)

# 32. Cloud & VCS Tools
from .cloud_vcs import (
    rearrange_author_name,
    validate_commit_payload,
    detect_cloud_drift
)

# 33. API Rate Limiter
from .rate_limiter import (
    RateLimiter,
    DEFAULT_POLICIES
)

# 34. SARIF v2.1.0 Exporter
from .sarif_exporter import (
    export_findings_to_sarif
)

# 35. Linux Package Version Comparator (dpkg / rpm / apk)
from .version_comparator import (
    compare_debian_versions,
    compare_rpm_versions,
    compare_apk_versions,
    is_package_vulnerable
)

# 36. IaC Static Security Scanner (Dockerfile & Terraform)
from .iac_scanner import (
    scan_dockerfile,
    scan_terraform_hcl
)

# 37. Regulatory Compliance Mapper (PCI-DSS, SOC2, HIPAA, ISO27001, NIST)
from .compliance_mapper import (
    map_findings_to_compliance,
    FRAMEWORK_CONTROLS
)

# 38. Cloud IAM & Workload Identity Verifier
from .cloud_iam_verifier import (
    verify_cloud_iam_annotations
)

# 39. News Intelligence, Extractive Summarizer & RSS Parser
from .news_intelligence import (
    extractive_summarize,
    calculate_news_relevance,
    parse_rss_xml
)

# 40. Opportunity Eligibility, ICS Generator & Application Drafter
from .opportunity_matcher import (
    evaluate_opportunity_eligibility,
    generate_deadline_ics,
    draft_application_kit
)

# 41. Streaming Linguistic Corpus Quality Segregator
from .dataset_quality_segregator import (
    evaluate_sentence_quality,
    segregate_corpus_batch
)

# 42. Ollama Modelfile Builder
from .ollama_modelfile_builder import (
    generate_ollama_modelfile
)

# 43. Branching Multiverse Chat Tree & Merge Synthesizer
from .multiverse_chat_tree import (
    ChatTimeline,
    MultiverseTree,
    synthesize_branch_merge
)

# 44. Real-Time Server-Sent Events (SSE) Broker
from .realtime_sse_broker import (
    format_sse_event,
    SSEBroker
)

# 45. Text Similarity & Jaccard Story Clustering
from .text_similarity_dedup import (
    tokenize_for_similarity,
    calculate_jaccard_similarity,
    find_matching_cluster
)

# 46. Kubernetes Admission Controller & RFC 6902 JSONPatch
from .k8s_admission_patch import (
    evaluate_admission_review,
    mutate_admission_review
)

# 47. eBPF Syscall Telemetry Parser
from .ebpf_telemetry_parser import (
    EBPFTraceEvent,
    evaluate_syscall_event
)

# 48. Container SBOM Package Parser
from .sbom_layer_inspector import (
    parse_dpkg_status,
    parse_apk_installed,
    parse_requirements_txt
)

__version__ = "1.2.0"

__all__ = [
    # 1-32 existing exports
    "scan_k8s_manifest", "lookup_cve", "evaluate_pr_security_gate", "TAXONOMY_SIGNATURES",
    "remediate_workload_dict", "remediate_yaml_string",
    "AttackNode", "AttackEdge", "AttackGraph",
    "attribute_risk_score", "prioritize_remediations", "STANDARD_FEATURE_IMPACTS",
    "compute_ahp_weights", "compute_bayesian_credible_interval",
    "run_chaos_experiment", "CHAOS_SCENARIOS",
    "hash_password", "verify_password", "generate_jwt", "verify_jwt", "generate_otp_code", "parse_bearer_token",
    "StructuredLogger", "TelemetryTracker", "AnomalyDetector",
    "transliterate", "inspect_unicode_points", "analyze_morphology", "lookup_lexicon",
    "clean_text_corpus", "calculate_script_density", "compute_canonical_fingerprint",
    "tokenize_text", "decode_tokens", "generate_text", "compute_cross_entropy_loss", "compute_cosine_warmup_lr",
    "chunk_text_into_context_blocks", "stream_batch_generator",
    "get_nifty50_stocks", "get_top_gainers", "convert_currency", "lookup_country_currency", "get_warehouse_inventory", "query_academic_records",
    "calculate_cart_totals", "transition_order_state", "verify_razorpay_signature",
    "render_checkout_page",
    "export_records_to_csv", "import_records_from_csv", "create_database_snapshot",
    "generate_crossplane_s3_bucket", "generate_provider_config", "reconcile_drift_diff",
    "generate_prometheus_config", "generate_grafana_datasource", "generate_alert_rule",
    "compile_dbt_sql", "extract_model_dependencies", "build_lineage_graph",
    "extract_text_from_image", "extract_entities_from_text", "recognize_handwritten_strokes",
    "generate_random_sequence", "generate_spiral_coordinates", "safe_arithmetic",
    "generate_tone_wav", "generate_chime_wav",
    "extract_raw_pdf_text_streams", "parse_roster_table_from_text",
    "compute_sales_metrics",
    "generate_snowflake_sync_plan",
    "format_prometheus_metric", "format_metrics_bundle",
    "generate_html_dashboard",
    "calculate_language_percentages", "calculate_contribution_streak", "generate_stats_badge_html",
    "generate_sandboxed_iframe_html", "sanitize_untrusted_html",
    "find_stale_posix_shm_segments", "cleanup_stale_shared_memory",
    "normalize_audio_samples", "trim_audio_silence", "compute_audio_rms_db",
    "rearrange_author_name", "validate_commit_payload", "detect_cloud_drift",
    # 33-44 new exports
    "RateLimiter", "DEFAULT_POLICIES",
    "export_findings_to_sarif",
    "compare_debian_versions", "compare_rpm_versions", "compare_apk_versions", "is_package_vulnerable",
    "scan_dockerfile", "scan_terraform_hcl",
    "map_findings_to_compliance", "FRAMEWORK_CONTROLS",
    "verify_cloud_iam_annotations",
    "extractive_summarize", "calculate_news_relevance", "parse_rss_xml",
    "evaluate_opportunity_eligibility", "generate_deadline_ics", "draft_application_kit",
    "evaluate_sentence_quality", "segregate_corpus_batch",
    "generate_ollama_modelfile",
    "ChatTimeline", "MultiverseTree", "synthesize_branch_merge",
    "format_sse_event", "SSEBroker",
    # 45-48 new exports
    "tokenize_for_similarity", "calculate_jaccard_similarity", "find_matching_cluster",
    "evaluate_admission_review", "mutate_admission_review",
    "EBPFTraceEvent", "evaluate_syscall_event",
    "parse_dpkg_status", "parse_apk_installed", "parse_requirements_txt"
]
