# Rasa Pro Service

## **Cost Structure**

Rasa offers three primary pricing tiers:

**Developer Edition:** Free for individual developers with limitations of up to 1,000 conversations/month for external use or 100 conversations/month for internal use. Limited to one use case per organization. License valid for 12 months with renewal available.

**Growth Tier:** This wasn't explicitly mentioned on their website, but they have an announcement buried in their forum talking about how this is a "lower price point" for their enterprise offering, and also had an entry on [g2.com stating the details about the Growth level plan](https://www.g2.com/products/rasa/pricing). Starting at $35,000 annually, designed for teams handling up to 500,000 conversations per year. Includes full platform access, basic support, and Rasa Studio (no-code UI).

**Enterprise Tier:** Custom pricing based on scale, deployment requirements, and support levels. Includes premium support, advanced security features, and dedicated resources. No actual mention of pricing for this tier on their website.

**Infrastructure Costs:** For self-hosted deployments, we are responsible for infrastructure costs including servers, storage, databases, and any required cloud services. LLM integration costs are separate and paid through the LLM provider. Also no specific mention of costs for licensing Rasa Pro for self-hosted deployments, so this would need to be clarified with Rasa sales.

## **FedRAMP Compliance**

**Not FedRAMP Authorized:** Rasa as a software platform does not have FedRAMP authorization.

**Self-Hosted:** Because Rasa can be fully self-hosted on your own infrastructure, we could potentially deploy it on infrastructure like Azure Government or AWS GovCloud and rely on similar services that we use with the Bot Service for maintaining compliance.


**Restricted Industries:** TRasa's Developer Terms explicitly require prior authorization for use in several restricted industries, and the VA could technically fall under the military/law enforcement category. Some of the restricted industries include:
- Military, industrial, or law enforcement purposes
- Nuclear technology and weaponry
- Surveillance technologies
- Biotechnology and genetic engineering


**Government Use:** The requirement for "Rasa's prior authorization" at their "sole discretion" for military and law enforcement purposes could be of concern. This authorization could be revoked at any time, so we would need to look into this further with Rasa legal to understand if VA.gov use would be permissible, and if we would need to get explicit permission from Rasa.

**Data Ownership:** Rasa's terms grant them broad rights to use feedback and may require data sharing for telemetry. They have telemetry that can't be opted out when using the Developer Edition. This could conflict with federal data handling requirements, so we would need to clarify data ownership and usage terms with Rasa legal.

## **Dev Experience**

**CALM Architecture:** Rasa Pro's core innovation is CALM (Conversational AI with Language Models), which separates dialogue understanding from business logic. LLMs handle natural language interpretation while deterministic flows control what actions are executed. This is actually pretty similar to the LLM router approach we prototyped with MS Bot Service, but Rasa has fully embraced this architecture and built their platform around it.

**Flows-Based Design:** Instead of mapping every conversation path with intents and stories, developers define business logic as structured flows.

**Multiple Development Interfaces:**
- Rasa Pro: Code-first framework for developers (Python, YAML-based configuration)
- Rasa Studio: No-code UI
- Rasa Open Source: Fully open-source framework (Apache 2.0 license) for complete customization, but doesn't include CALM features. The OSS version requires more manual setup and lacks a lot of the key features.

**LLM Flexibility:** Supports multiple LLM providers (OpenAI, Anthropic, etc.) and can work with smaller fine-tuned models like Llama 8B for cost efficiency. Can also use traditional NLU alongside LLMs in hybrid mode. The OSS version doesn't include any LLM integrations out of the box.

**Learning Curve:** Requires solid Python skills and understanding of conversational AI concepts. The CALM paradigm is pretty different from our traditional chatbot approach.

**Self-Hosting Complexity:** Have to manage deployment, scaling, monitoring, and maintenance of the entire Rasa stack when self hosting.

**Documentation:** Extensive documentation available at rasa.com/docs with learning center, community forum support, and example projects. However, enterprise features and CALM are only available with paid licenses.

## **Scaling & Performance**

**Self-Hosted Scaling:** Scaling is entirely the organization's responsibility. Can be deployed on Kubernetes for horizontal scaling, but requires proper infrastructure configuration and monitoring.

**LLM Efficiency:** CALM architecture is designed to work with smaller, fine-tuned models, which can reduce latency and costs compared to using large models for every interaction. The deterministic flows prevent unnecessary LLM calls.

**Infrastructure Requirements:** Organizations need to provision and maintain adequate server resources, including compute for the Rasa server, action server, database storage, and potentially hosting their own LLM models.

**Performance Optimization:** Full control over infrastructure allows for optimization specific to use case, but requires DevOps expertise. Can be optimized for voice applications with fast response times.

## **Integration Capabilities**

**Custom Actions:** Python-based custom actions provide unlimited integration possibilities with any API, database, or internal system. However, all integrations must be developed and maintained by the organization.

**Channel Support:** Built-in connectors for common messaging platforms (Slack, Facebook Messenger, Telegram, etc.) and web chat. Custom channel connectors can be developed for specific needs.

**Open Architecture:** Because it's self-hosted with open APIs, Rasa can integrate with any system an organization can access. No vendor lock-in for integrations.

**LLM Provider Integration:** Seamless integration with major LLM providers through configurable endpoints. Organizations can also host their own LLM models for complete data sovereignty.

**Development Required:** Unlike managed services, most integrations require custom development work. Pre-built integrations are limited compared to cloud-native platforms.

## **Language & Multi-lingual Support**

**Extensive Language Support:** Rasa's NLU components support many languages, with performance varying based on available training data and the LLM used for dialogue understanding.

**LLM-Based Understanding:** When using CALM with LLMs, language support depends on the chosen LLM provider. Modern LLMs like GPT-4 support 100+ languages, providing strong multi-lingual capabilities.

**Training Data Requirements:** For non-English languages using traditional NLU, significant training data may be required for good performance. The CALM architecture reduces this burden by leveraging LLMs.

## **Migration**

**Complete Rebuild Required:** Migrating from MS Bot Service to Rasa requires complete re-architecture of the chatbot. There is no compatibility with Bot Framework SDK code, Direct Line protocol, or existing Azure integrations.

**Paradigm Shift:** Moving to CALM requires rethinking conversation design from intent-based to flow-based patterns. This is not just a code migration but a conceptual shift in how conversations are structured.

**Infrastructure Migration:** All infrastructure must be rebuilt for self-hosting, including deployment pipelines, monitoring, logging, and scaling configurations.

**Integration Rewrite:** Every custom action, API integration, and external service connection must be reimplemented in Python using Rasa's action server framework.

**Testing & Validation:** Extensive testing required to ensure feature parity and correct behavior in the new system. Training data collection and flow design are critical to success.

**Timeline:** Expect a migration timeline of several months to a year for complex systems, depending on the number of features, integrations, and conversation flows.

## **Support**

**Developer Edition:** Community forum support only. No technical support package included.

**Growth Tier:** Basic support with web-based portal access, break-fix assistance, and best-effort response times during business hours.

**Enterprise Tier:** Premium support with 24/7/365 enhanced response times, dedicated Customer Success Manager and Engineer, success planning, best practice guidance, and business reviews.

**Community Resources:** Active community forum, extensive documentation, learning center with tutorials, and open-source codebase on GitHub for transparency and community contributions.

**Professional Services:** Available for consultation, implementation assistance, and training. Additional cost beyond licensing.

## **Conclusion**

Rasa Pro represents a fundamentally different approach to conversational AI compared to MS Bot Service. Its CALM architecture is innovative, combining LLM flexibility with deterministic control. The self-hosted model provides complete data sovereignty and eliminates vendor lock-in, which can be advantageous for organizations with strict security requirements.

However, for VA.gov specifically, Rasa presents several critical challenges:

**Compliance Blockers:** Lack of FedRAMP authorization and restrictive terms requiring Rasa's prior authorization for government/military use create significant compliance uncertainty. The terms around restricted industries and data ownership conflict with federal requirements.

**Infrastructure Investment:** The self-hosted model requires substantial infrastructure, DevOps expertise, and ongoing maintenance. Organizations must build and maintain their own deployment pipelines, monitoring systems, and scaling solutions.

**Development Expertise:** Requires deep Python expertise and understanding of the CALM paradigm. The learning curve is steep, and the pool of developers with Rasa experience is smaller than for mainstream platforms.

**Migration Complexity:** Moving from MS Bot Service would be a complete rebuild rather than a migration. This represents significant development time and risk with no incremental migration path.

While Rasa's technical capabilities are impressive and the CALM architecture solves real problems in conversational AI, the lack of government authorization, restrictive licensing terms, and self-hosting complexity make it a high-risk choice for VA.gov. The existing MS Bot Service infrastructure, despite its limitations, provides FedRAMP compliance and managed services that reduce operational burden - factors that are critical for government applications serving millions of veterans.


## Rasa OSS spike work - setup and POC exploration notes

Previous explorations in the spike work that we built out used 'rasa-pro' which requires an license key, does transmit some telemetry, and would be limited to 1000 conversations a month. Generally I think that if we were going to host Rasa on azure we would want to go with the OSS version, and to investigate further we should spool up a backend not using rasa-pro.

## Installation and initialization

Spooled up a brand new python project from UV and added `rasa[full]` via Python 3.13.3, but got some installation errors that mostly pointed to the Matplotlib library dependency. After downgrading to 3.10.17 I was able to install the newest version of Rasa OSS 3.6.21. Note: The latest version of Rasa for OSS is from 1/13/2025 and the previous version was published 4/18/2024. Dev dependencies like Ruff, Pytest, and MyPy were added for convenience.  [There were some noted issues with Rasa on Mac and requirements for Run](https://legacy-docs-oss.rasa.com/docs/rasa/installation/installing-rasa-open-source#python-310-requirements) so if their are errors refer to that doc.

When executing `uv rasa init` I received this warning.

```
MovedIn20Warning: Deprecated API features detected! These feature(s) are not compatible with SQLAlchemy 2.0. To prevent incompatible upgrades prior to updating applications, ensure requirements files are pinned to "sqlalchemy<2.0". Set environment variable SQLALCHEMY_WARN_20=1 to show all deprecation warnings.  Set environment variable SQLALCHEMY_SILENCE_UBER_WARNING=1 to silence this message. (Background on SQLAlchemy 2.0 at: https://sqlalche.me/e/b8d9)
```

I'm not entirely sure the usage of SQL Alchemy when it comes to Rasa, but it being a a database toolkit, I would imagine it uses a sqlite database or other database adapters to store conversation history, state or other important data using the library. Dipping into the dependency, it looks like 1.4.54 is installed (last updated 9/5/2024) and the current version of SQLAlchemy is 2.0.45 (last updated 12/9/2025). It looks like there is a [series of steps to migrate](https://docs.sqlalchemy.org/en/14/changelog/migration_20.html) to 2.0+ and hopefully that is something that is going to happen in the Rasa OSS lib at some point.

After installing, the next step of init of a project was run with `uv run rasa init` but ran into an error around training the 'initial model' regarding a numpy incompatibility. After pinning to a specific version of numpy 1.23 I was able to finish the init, train the default model and start the Rasa server.

## Training basic intent classification data

Spun up a set of training data from the root-bot-artifact-dev.json to reformat it into the nlu.yml file. Running `uv run rasa train` will train a model directly on your computer and then `uv run rasa shell` will allow you to 'chat' with the trained model directly in the terminal. This resulted in being able to get the answers to be returned when putting in the exact or almost exact question into the prompt, but was pretty limited on how well it performed, mostly being a self hosted model as I would expect.

## Using CQA for intent classification

Instead of using the locally trained model for intent classification, I figured it would be more realistic to hook directly up to the CQA endpoint and use it for intent classification and see how easily a custom action is configured for such a process. This process involved building out the CQA client in python module, integrating it into an action for Rasa, and then configuring `rules.yml` file to use the action. I encountered some trouble trying to set up a "global override" so that every intent/query would use the CQA action by default, so I had to configure every intent to use the action, which made the rules file over 1000 lines itself, which seems like a code smell. I was able to get the setup to work and use the external dev endpoint for CQA calls in the end and it performed similarly for single queries to how the chatbot behaves.