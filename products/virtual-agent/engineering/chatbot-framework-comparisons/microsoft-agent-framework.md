# Microsoft Agent Framework vs MS Bot Service

## **Cost Structure**

**Microsoft Agent Framework:**

- Open source (MIT license), no licensing fees for the framework itself
- Can deploy locally for free or to Azure AI Foundry (managed service with usage-based pricing)
- Azure AI Foundry costs: compute, LLM API usage, storage, and Foundry Agent Service fees
- LLM costs depend on provider (Azure OpenAI, etc.)
- Currently in public preview - pricing model may evolve

**Azure Bot Service:**

- Standard channels: Free unlimited messages
- "Premium" channels (DirectLine/Web Chat): $0.50 per 1,000 messages (first 10K free monthly)
- Additional costs: Azure App Service hosting, Application Insights telemetry, LUIS, QnA Maker, AI Search, Cosmos DB, Blob Storage
- More complex pricing with multiple services stacking up and fixed base costs

## **FedRAMP Compliance**

**Microsoft Agent Framework:**

- Azure AI Foundry is part of Azure Government with FedRAMP High authorization
- Framework itself is open source; compliance depends on deployment target
- Can be deployed on Azure GovCloud to inherit FedRAMP compliance
- Built-in responsible AI features (PII detection, prompt shields, task adherence) help with compliance
- Voice Live API is GA and available in Azure Government

**Azure Bot Service:**

- Already approved and in use with the current production environment
- FedRAMP High
- Part of broader Microsoft Azure Government compliance framework

## **Dev Experience**

**Microsoft Agent Framework:**

- Python and .NET support with consistent APIs
- Converges AutoGen (Microsoft Research) and Semantic Kernel into unified framework
- Graph-based workflows with streaming, checkpointing, human-in-the-loop, and time-travel capabilities
- DevUI for interactive agent development, testing, and debugging
- Built-in OpenTelemetry integration for distributed tracing and monitoring
- LLM-agnostic: supports multiple providers (Azure OpenAI, etc.)
- VS Code extension for visual workflow authoring and debugging
- Agent2Agent (A2A) protocol for cross-runtime collaboration
- Model Context Protocol (MCP) support for dynamic tool connections
- Multi-agent patterns like Magentic One built in
- **Key difference from Bot Framework:** Designed for agentic AI (autonomous, goal-oriented agents) rather than traditional dialog-based chatbots
- **Potential gap:** No native DirectLine or WebChat equivalent - unclear how to connect to existing frontend
- **Potential gap:** No native Adaptive Cards support documented
- Still in public preview (released May 2025) - may have breaking changes

**Azure Bot Service:**

- Bot Framework provides SDKs, tools, and frameworks (Composer, Emulator)
- Comprehensive dialog management with WaterfallDialog, ComponentDialog, SkillDialog
- DirectLine integration for WebChat and custom channels
- Adaptive Cards for rich UI elements
- State persistence with Azure Blob Storage
- Multi-skill orchestration pattern already implemented
- More mature but facing SDK churn (migration to MS 365 Agents SDK)

## **Scaling & Performance**

**Microsoft Agent Framework:**

- Local development with deployment to Azure AI Foundry
- Multi-agent workflows in Foundry Agent Service handle orchestration at scale
- Built-in error handling, retries, and recovery for reliability
- Persistent state and context sharing across long-running tasks
- Checkpointing for workflow resilience

**Azure Bot Service:**

- Scaling depends on App Service Plan configuration
- Requires manual configuration of scaling rules
- Can result in over-provisioning during development if using production-tier App Service plans

## **Integration Capabilities**

**Microsoft Agent Framework:**

- Native Azure AI Foundry integration for deployment, observability, and governance
- OpenAPI integration for any REST API
- Agent2Agent (A2A) protocol for connecting agents across different platforms
- Model Context Protocol (MCP) for dynamic tool connections
- Connects with Microsoft 365 Copilot and other agent platforms
- Voice Live API for speech-to-speech interactions (GA)
- OpenTelemetry for observability across frameworks (LangChain, LangGraph, OpenAI Agents SDK)
- **Unknown:** DirectLine/WebChat integration path unclear
- **Unknown:** Adaptive Card support unclear

**Azure Bot Service:**

- Seamless integration with Azure services and Microsoft 365 ecosystem
- DirectLine for WebChat (what we use today)
- Multi-channel support (Teams, custom channels)
- LUIS for natural language understanding (not currently used)
- Integrated with Databricks for analytics

## **Language & Multi-lingual Support**

**Microsoft Agent Framework:**

- Multi-lingual support depends on underlying LLM
- Voice Live API includes multilingual agent capabilities
- Same language coverage as your chosen LLM provider

**Azure Bot Service:**

- Support for "30+ languages"
- GPT-4o integrations for 100+ languages

## Migration

- Microsoft Agent Framework is a **different paradigm** from Bot Framework - it's designed for agentic AI (autonomous agents) rather than traditional dialog-based chatbots
- Migration path is **unclear** - there's no documented DirectLine equivalent or WebChat integration
- Would likely require:
  - Rebuilding dialog flows as agent workflows
  - Creating custom frontend integration (no WebChat equivalent documented)
  - Implementing Adaptive Card rendering separately (if needed)
  - Migrating state persistence to Foundry's workflow state management
- The framework is designed to **complement** MS 365 Agents SDK and Copilot, not necessarily replace traditional chatbots
- Being in public preview, the framework may change significantly before GA
- Estimated timeline: Unknown - depends on how frontend/channel integration evolves

## Support

**Microsoft Agent Framework:**

- Active Microsoft development with dedicated team
- Part of Azure AI Foundry ecosystem with enterprise support available
- Growing community (Tech Community, GitHub)
- Documentation improving rapidly
- VS Code extension support
- Still in preview - support model may evolve

**Azure Bot Service:**

- We have already seen the level of support through Microsoft and our support plan
- Enterprise-grade support with SLAs

## Conclusion

**Microsoft Agent Framework is a promising but immature option that targets a different use case than traditional chatbots.**

It's Microsoft's next-generation agentic AI platform, converging AutoGen research with Semantic Kernel into an enterprise-ready framework. It excels at multi-agent orchestration, graph-based workflows, and autonomous agent scenarios - and has strong responsible AI features built in.

**Key uncertainties for VA Virtual Agent:**
- No clear DirectLine/WebChat equivalent for connecting to our existing frontend
- Adaptive Cards support is undocumented
- Public preview status means potential breaking changes
- Designed for agentic workflows, not necessarily traditional Q&A chatbots

**Where Microsoft Agent Framework could fit:**
- Future evolution of our chatbot toward more agentic capabilities
- Backend orchestration layer (similar to how we'd use CrewAI or LangGraph)
- Voice-enabled agents via Voice Live API
- Complex multi-step workflows requiring human-in-the-loop

**Recommendation:** Monitor closely as it matures toward GA. Evaluate whether the frontend/channel story improves. Could potentially become the long-term Microsoft-native successor to Bot Framework for agentic scenarios, but is not ready to replace our current chatbot infrastructure today due to missing DirectLine/WebChat equivalents and public preview status.
