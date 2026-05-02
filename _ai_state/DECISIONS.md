# Decisions

## 2026-05-02
- Chose qwen2.5-coder:7b as local router because 16GB MacBook Air should not run 30B/32B models.
- Deferred Hermes and LangGraph until manual local-router workflow is proven.
- Using markdown files as shared state/memory layer.
- Codex will be used as controlled worker, not autonomous free-running agent.
- Claude Code will be reserved for complex multi-file coding/reasoning.
- Gemini CLI will be used for large-context, document, screenshot, and external critique tasks.
