----

# We're moving our docs! 
### Find [the latest version of this page](https://depo-platform-documentation.scrollhelp.site/developer-docs/Setup-your-AWS-Account.1886781475.html) on the Platform website.

### Still can't find what you're looking for? Reach out to [#vfs-platform-support](https://dsva.slack.com/archives/CBU0KDSB1) on Slack.

----
# Setup your AWS account

## Setup security credentials

### MFA virtual device
1. Sign-in to AWS web console
2. Navigate to IAM dashboard `Users` [here](https://console.amazonaws-us-gov.com/iam/home?region=us-gov-west-1#/home)
3. Locate your user and select the `Security credentials` tab. 
4. Beside `Assigned MFA device`, click `Manage`
5. On your mobile phone install a virtual MFA app
* Google authenticator
* Microsoft authenticator
* Other options for TOTP codes 
6. Follow the workflow for pairing a virtual MFA device with your phone app.

<hr>

### Setup programmatic access
#### 1. Sign-in to AWS web console
#### 2. Navigate to IAM dashboard `Users` [here](https://console.amazonaws-us-gov.com/iam/home?region=us-gov-west-1#/home)
#### 3. Locate your user and select the `Security credentials` tab. 
#### 4. Under `Access Keys` click `Create access key`. AWS will automatically create the keypair for you.
* Download the CSV file, copy key and secret.
#### 5. Note the access key ID and secret access key. 
* In a terminal window create a new file `~/.aws/credentials`. Into this file add the following:
  ```bash
  [default]
  region = us-gov-west-1
  aws_access_key_id = <ACCESS_KEY>
  aws_secret_access_key = <SECRET_KEY>
  ```
  Pasting the access and secret key from step 4.



