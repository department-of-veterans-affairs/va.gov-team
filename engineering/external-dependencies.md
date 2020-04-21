# External dependencies

## Bot service

The [vets-api endpoint](endpoints.md) depends on a single call to the Microsoft [Healthcare Bot service](https://www.microsoft.com/en-us/research/project/health-bot/) (herein, bot service) that returns a JWT containing, among other attributes, a bearer token that is used by the client to establish a chatbot conversation with the bot service. Calls from the [controller](https://github.com/department-of-veterans-affairs/vets-api/blob/3c3f85a9dbfef6d733e7aaedefcf4bb8ac074537/app/controllers/v0/coronavirus_chatbot/tokens_controller.rb) are POST'ed to the `/v3/directline/tokens/generate` endpoint over HTTPS to `//northamerica.directline.botframework.com` or `//directline.botframework.com` and is authenticated using a bearer token stored in Credstash and available to `vets-api`.

![Authentication Flow](https://docs.microsoft.com/en-us/healthbot/media/admin_portal/keys/flow.png)
Reference: <https://docs.microsoft.com/en-us/healthbot/integrations/embed#steps-to-securing-communications>

The service instance is currently running in Microsoft Azure's commercial cloud (region TBD) as it is not yet available in Azure's government cloud offering. The Azure account is owned by the VA Enterprise Cloud (VAEC) team. Access to the bot service configuration is controlled by Microsoft Azure's Identity and Access Management (IAM) service.


## Application Insights

Telemetry from the bot service is fed to Microsoft Azure [Application Insights](https://docs.microsoft.com/en-us/azure/azure-monitor/app/app-insights-overview), including the pathway users take through the chatbot. Under the current product implementation, there is no ability for users to include free text or other information that potentially could contain private data. The service instance shares the same cloud service provider attributes as the bot service, above. Access to Application Insights is controlled by Microsoft Azure's Identity and Access Management (IAM) service.
