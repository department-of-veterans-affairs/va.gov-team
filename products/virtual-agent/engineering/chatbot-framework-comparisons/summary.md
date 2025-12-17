# Summary

(WIP)

## Conversational AI Platform Feature Matrix

### Platform Overview

| Feature Category | MS Bot Framework / Azure Bot Service | Amazon Lex | Rasa Pro | Rasa OSS | Langchain | CrewAI | Pydantic AI |
|-----------------|-------------------------------------|------------|----------|----------|-----------|--------|-------------|
| **Primary Use Case** | Enterprise chatbots, multi-channel | AWS-native conversational interfaces | Enterprise conversational AI with CALM | Open-source chatbot framework | TBD | TBD | TBD |
| **Architecture** | SDK-based, traditional bot framework | Serverless, intent-based | CALM (Conversational AI with Language Models) | Traditional NLU with intents/stories | TBD | TBD | TBD |
| **Hosting Model** | Managed service (Azure App Service) | Fully serverless (AWS) | Self-hosted | Self-hosted | TBD | TBD | TBD |
| **License** | Proprietary | Proprietary | Proprietary (Paid) | Apache 2.0 | TBD | TBD | TBD |

### Cost Structure

| Cost Factor | MS Bot Framework | Amazon Lex | Rasa Pro | Rasa OSS | Langchain | CrewAI | Pydantic AI |
|------------|------------------|------------|----------|----------|-----------|--------|-------------|
| **Base Platform Cost** | Premium (Web Chat): $0.50/1K msgs | Text: $0.004/request<br>Voice: $0.0075/request | Developer: Free (1K conversations/mo)<br>Growth: $35K/year<br>Enterprise: Custom | Free | TBD | TBD | TBD |
| **Infrastructure Costs** | Fixed base cost + usage (LLMs, AI Search, Cosmos DB, Blob Storage) | Pay-per-use (Lambda) + usage (LLM, RDS, S3, CloudWatch) | Self-hosted: All infrastructure costs | Self-hosted: All infrastructure costs | TBD | TBD | TBD |

### Compliance & Security

| Factor | MS Bot Framework | Amazon Lex | Rasa Pro | Rasa OSS | Langchain | CrewAI | Pydantic AI |
|--------|------------------|------------|----------|----------|-----------|--------|-------------|
| **FedRAMP Status** | High (approved, in production) | High (GovCloud only) | Not FedRAMP authorized | Not FedRAMP authorized | TBD | TBD | TBD |
| **Government Use** | Approved for VA.gov | Available in GovCloud | Requires prior authorization for military/law enforcement | No restrictions, but no certifications | TBD | TBD | TBD |
| **Data Ownership** | Clear data ownership | Clear data ownership | Broad rights to feedback, required telemetry | Full control | TBD | TBD | TBD |
| **Compliance Path** | Already compliant | Can achieve via GovCloud | Self-host on compliant infrastructure | Self-host on compliant infrastructure | TBD | TBD | TBD |

### Development Experience

| Factor | MS Bot Framework | Amazon Lex | Rasa Pro | Rasa OSS | Langchain | CrewAI | Pydantic AI |
|--------|------------------|------------|----------|----------|-----------|--------|-------------|
| **Primary Language** | JavaScript, Python, .NET, Ruby | Any (via Lambda) | Python, YAML | Python, YAML | TBD | TBD | TBD |
| **Development Interface** | Bot Framework SDK | AWS Console GUI (low-code), AWS SDK (code) | Rasa Pro (code), Rasa Studio (no-code) | Code-first (Python/YAML) | TBD | TBD | TBD |
| **Learning Curve** | Moderate, SDK-based | Moderate (Serverless model) | Steep (CALM paradigm shift) | Moderate (traditional NLU) | TBD | TBD | TBD |
| **LLM Integration** | Azure OpenAI integration | Not native, requires custom Lambda | Native support (OpenAI, Anthropic, etc.) | Not included, rewquires custom python | TBD | TBD | TBD |
| **Custom Logic** | Direct code in bot app | Lambda functions | Python actions in separate action server | Python actions in separate action server | TBD | TBD | TBD |
| **Local Development** | Full local debugging | Challenging (serverless) | Full local development | Full local development | TBD | TBD | TBD |
| **Documentation** | Extensive, but SDK churn issues | Good AWS docs, limited customization examples | Extensive for Pro features | OSS docs, but not as extensive as Pro | TBD | TBD | TBD |

### Scaling & Performance

| Factor | MS Bot Framework | Amazon Lex | Rasa Pro | Rasa OSS | Langchain | CrewAI | Pydantic AI |
|--------|------------------|------------|----------|----------|-----------|--------|-------------|
| **Scaling Approach** | Manual App Service Plan configuration | Auto-scales (serverless) | Self-managed (Kubernetes recommended) | Self-managed (Kubernetes recommended) | TBD | TBD | TBD |
| **Infrastructure Management** | Managed service, manual scaling rules | Fully managed, zero infrastructure | Full responsibility | Full responsibility | TBD | TBD | TBD |
| **Over-provisioning Risk** | High (fixed costs in dev) | Low (pay-per-use) | Depends on self-hosting setup | Depends on self-hosting setup | TBD | TBD | TBD |
| **Performance Optimization** | Limited to App Service configuration | Limited to Lambda tuning | Full control | Full control | TBD | TBD | TBD |

### Integration Capabilities

| Factor | MS Bot Framework | Amazon Lex | Rasa Pro | Rasa OSS | Langchain | CrewAI | Pydantic AI |
|--------|------------------|------------|----------|----------|-----------|--------|-------------|
| **Native Integrations** | Azure services, MS 365 ecosystem | AWS services (S3, DynamoDB, Lambda, Connect) | Custom Python actions required | Custom Python actions required | TBD | TBD | TBD |
| **Custom API Integration** | Direct code integration | Lambda functions | Python custom actions | Python custom actions | TBD | TBD | TBD |
| **NLU Service** | CQA in use | Built-in | CALM with LLM | Traditional ML-based NLU | TBD | TBD | TBD |
| **Analytics Integration** | Custom convo logging | CloudWatch | Self-managed | Self-managed | TBD | TBD | TBD |

### Migration Considerations

| Factor | MS Bot Framework | Amazon Lex | Rasa Pro | Rasa OSS | Langchain | CrewAI | Pydantic AI |
|--------|------------------|------------|----------|----------|-----------|--------|-------------|
| **Migration from Bot Framework** | N/A (current platform) | Complete re-architecture required | Complete rebuild (CALM paradigm shift) | Complete rebuild | TBD | TBD | TBD |
| **Code Reusability** | N/A | None (no SDK compatibility) | None (Python actions required) | None (Python actions required) | TBD | TBD | TBD |
| **Infrastructure Changes** | N/A | New AWS services required | Self-hosting infrastructure | Self-hosting infrastructure | TBD | TBD | TBD |
| **Estimated Timeline** | N/A | Several months (tbd) | 4-8 months (includes learning curve) | 3-6 months | TBD | TBD | TBD |
| **Risk Level** | N/A (baseline) | Medium (serverless debugging) | High (compliance, licensing, paradigm shift) | Medium-High (full rebuild) | TBD | TBD | TBD |

### Support & Community

| Factor | MS Bot Framework | Amazon Lex | Rasa Pro | Rasa OSS | Langchain | CrewAI | Pydantic AI |
|--------|------------------|------------|----------|----------|-----------|--------|-------------|
| **Official Support** | Current support plan (known) | AWS Support Plans (Basic to Enterprise) | Developer: Community only<br>Growth: Basic<br>Enterprise: 24/7 + CSM | Community forum only | TBD | TBD | TBD |
| **Community Resources** | Large, established | Large AWS community | Active forum, learning center | Large OSS community, GitHub | TBD | TBD | TBD |
| **Developer Pool** | Large, mainstream | Large (AWS developers) | Small (specialized) | Moderate (OSS) | TBD | TBD | TBD |
| **Documentation Quality** | Extensive (with SDK churn issues) | Good, AWS-focused | Excellent for Pro features | Extensive | TBD | TBD | TBD |

### Key Differentiators

| Platform | Strengths | Weaknesses | Best For |
|----------|-----------|------------|----------|
| **MS Bot Framework** | • Already FedRAMP High approved<br>• In production at VA.gov<br>• Strong multi-channel support<br>• Managed infrastructure | • SDK migration churn (Bot Framework → MS365 Agents)<br>• Fixed infrastructure costs<br>• Over-provisioning in dev | Orgs already invested, requiring FedRAMP compliance |
| **Amazon Lex** | • True serverless (pay-per-use)<br>• Simple architecture<br>• Auto-scaling<br>• Low operational overhead | • Limited customization (using GUI-based)<br>• Serverless debugging challenges | AWS-native apps, variable traffic patterns |
| **Rasa Pro** | • Innovative CALM architecture<br>• LLM flexibility<br>• No-code UI option<br>• Separates understanding from business logic | • Not FedRAMP authorized<br>• Restricted industry licensing (may require VA/Rasa approval)<br>• Data ownership/telemetry concerns<br>• $35K+ annual cost<br>• Steep learning curve | Orgs with Python expertise and willingness to learn CALM paradigm |
| **Rasa OSS** | • Free and open source<br>• Full control over data<br>• No licensing restrictions<br>• Active community | • No CALM features<br>• No LLM integrations<br>• Full infrastructure responsibility<br>• Traditional NLU limitations<br>• Steep DevOps requirements | Cost-sensitive projects, full control priority |
| **Langchain** | TBD | TBD | TBD |
| **CrewAI** | TBD | TBD | TBD |
| **Pydantic AI** | TBD | TBD | TBD |

### Critical Blockers for VA.gov

| Platform | Critical Issues | Severity |
|----------|-----------------|----------|
| **MS Bot Framework** | SDK migration to MS365 Agents required | Medium-High |
| **Amazon Lex** | Requires migration to AWS | Medium |
| **Rasa Pro** | • Not FedRAMP authorized<br>• Requires VA authorization for military/government use<br>• Unclear data ownership terms<br>• $35K+ cost with limited additional value | **HIGH** |
| **Rasa OSS** | • Not FedRAMP authorized<br>• Full infrastructure responsibility<br>• No dedicated support | Medium-High |
| **Langchain** | TBD | TBD |
| **CrewAI** | TBD | TBD |
| **Pydantic AI** | TBD | TBD |
