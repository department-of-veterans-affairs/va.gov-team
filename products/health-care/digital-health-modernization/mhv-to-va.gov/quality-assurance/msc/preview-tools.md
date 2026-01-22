# Additional Tools for Potential Previews
This section is **NOT** required for any existing QA process. It outlines additional
tools that the team could use for web previews. None of these tools have been approved
for use, this is simply a starting point that the team can use to research options in
the event that existing previews are insufficient. 

Regardless of tool, we would always need to set the API endpoint as an environment 
variable in the FE build and configure CORS on staging to allow requests from the preview
URLs. If a new tool is ever integrated into our workflow, we will need a very detailed
regression around auth workflows. Authentication issues are extremely common when first
rolling out this kind of tooling. 

## Managed Service Tools

- [Vercel](https://vercel.com/docs/deployments/environments): works great with specifically React
- [Netlify](https://docs.netlify.com/deploy/deploy-types/deploy-previews/): similar to Vercel, but works with a wider range of FE frameworks
- [AWS Amplify](https://docs.aws.amazon.com/amplify/latest/userguide/pr-previews.html): Native to the AWS ecosystem
- [Cloudflare Pages](https://developers.cloudflare.com/pages/configuration/preview-deployments/): Has a free tier to allow us to explore the option without cost

## Self-Hosted Tools

- Github Actions: build & deploy to a temporary S3 bucket/container on each PR
- ArgoCD: tailored for Kubernetes setups
