This is a GitHub issue template for users and teams who need support services from the [Identity team](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity). Please provide the information needed for the issue type you are requesting support for. For “other” please provide additional details. You may view Identity teams documentation for all of our products and services [here](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity/Products).

### **To properly assist with your issue, please complete the following:**

- [ ] **Complete this issue template**
- [ ] **Provide your name and email address**
- [ ] **Provide your team’s name**
- [ ] **Select issue type (for “other” stop here and provide details)**
  - **Authentication Help**
  - **Sign-In-Service Integration**
  - **Pull Request Review**
  - **Data Request**
  - **Other**
- [ ] **Complete tasks for your issue type**
- [ ] **Add additional details (optional)**
- [ ] **Complete the [post Identity team support survey](https://dj540s05.optimalworkshop.com/questions/52low0ey) before closing this ticket**
    

**Name:**

**Email address:**

**Team Name:**

**Issue Type:**

**Additional Details:**

## **Authentication Help Request**

- **Review [troubleshooting documentation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Troubleshooting_logging/troubleshooting_signin.md)**
    
    **Provide Additional Details below**
    
- Which Environment did you use to sign in?
    - Local Host
    - Development
    - Review
    - Staging
    - Production
- Which user email did you use to sign in?
- Which Credential Service Provider (CSP) did you use?
    - Login.gov
    - ID.me
    - DSLogon
    - My HealthVet
- Can you provide a screenshot of the error page? Include the screenshot of the DevTools console. (optional)
- Include and error codes you see. (optional)
- Include any relevant timestamps you see. (optional)
- Include the failed request ID if you have access to it. (optional)
- Have you tried clearing your browser cache?
- Have you tried clearing your browser cookies?
- Have you tried signing in incognito?
- Which browser(s) did you try to sign in with?
    - Chrome
    - Safari
    - Firefox
    - MS Edge
    - VA Mobile iOS
    - VA Mobile Android
    - Other

## **Data Request**

- **Provide additional details below**
- What data do you need pulled? Please don’t include any Personal Identifying Information (PII)
- Is this sensitive data that requires special permissions?

## **Pull review request**

- **Provide additional informational Information below**
- Please provide a URL to link to your PR:
- Have you tested your changes?

## **Sign-in Service**

We maintain a [Sign-in Service overview](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity/Products/Sign-In%20Service) as well as [engineering documentation](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity/Products/Sign-In%20Service/Engineering%20Docs) in the va-gov-team GitHub repository. To begin onboarding or register a Client or Service Configuration, continue reading.

### **Begin Onboarding**

- **Provide the first and last name of the primary point of contact**
    
    **Provide an email address for the primary point of contact**
    

### **Onboarding Questionnaire**

1. **Does your application interact with end users, API’s or both?**
- If end users interact with your application, you will most likely need to [configure your integration as a client application](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Products/Sign-In%20Service/Engineering%20Docs/configuration/client_config.md).
- If end users don’t interact with your application, your integration will likely need to be [configured as a service account]() [configured as a service account](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Products/Sign-In%20Service/Engineering%20Docs/configuration/service_account.md).
1. **Do you need to use our [Unified Sign-in Page](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Products/Unified%20Sign%20In%20Pages/README.md) (USiP)?**
2. **If your application is used by end users, is it used in a web browser?**
- If so, your application will need [cookie-based authentication](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Products/Sign-In%20Service/Engineering%20Docs/auth_flows/cookie_oauth.md).
- If not, your application will need to [authenticate via API](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Products/Sign-In%20Service/Engineering%20Docs/auth_flows/api_oauth.md).
1. **Is your authentication facilitated by a frontend or a secure backend?**
- If frontend reference the appropriate authentication guide in Step #3 and complete the step for PKCE authentication.
- If backend, reference the authentication guide, but register a public certificate for [private key JWT authentication](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Products/Sign-In%20Service/Engineering%20Docs/auth_flows/private_key_jwt.md).

### **Client Configuration**

- **Is the application used in a web browser**
    
    **Will your application be using our [Unified Sign-in Page](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Products/Unified%20Sign%20In%20Pages/README.md)?**
    
    **Briefly describe your application**
    

### **Service Configuration**

- **Briefly describe your application**
    
    **Provide additional details to describe your request (optional)**
    

## **Additional information**

- The identity team maintains [office hours](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity/Products/Sign-In%20Service/Support) for both frontend and backend engineers.
- You may reach out to an identity team member on the ```#vsp-identity``` [slack channel](https://dsva.slack.com/archives/CSFV4QTKN) on the Office of the CTO @ va slack workspace.
- Please review the ```#vsp-identity``` slack channel [canvas] to reference information about the identity team.
