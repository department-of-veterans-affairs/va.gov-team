# Introduction
Amazon S3 (Simple Storage Service) is a service provided by Amazon Web Services (AWS) that allows you to store and retrieve data, such as files, images, and videos. This guide will help you connect to an AWS S3 bucket using a simple and straightforward approach.

# Prerequisites
Before you start, ensure you have the following by contacting a member of the IVC CHAMPVA Engineering team:

1. Bucketname
2. Region
3. Access key
4. Secret Access key

(Optional) Access to the AWS Management Console.

# Steps to Connect to an AWS S3 Bucket

Since the IVC CHAMPVA team is outside of the DOCMP PEGA team, we have limited access to the S3 bucket. We do not have sign in ability to their AWS Management Console.  In addition, we do not have the ability to download a completed file because we have to protect our clients Personal Identifiable Information.

There are 2 ways our team connects to PEGA's S3 bucket:

1.  Programically via Vets-API
2.  POSTMAN

# Programically via Vets-API

This assumes that you already have installed vets-api and running locally. If you do not have vets-api installed locally, please refer to this documentation: 

https://depo-platform-documentation.scrollhelp.site/developer-docs/base-setup-vets-api


1. After you have vets-api set up locally, you need to modify the file ```config/settings.yml``` with the IDE of your choice. Since we are mostly Ruby software developers, we use Visual Studio Code.
2. In the file ```config/settings.yml```, navigate to
  ``` ivc_forms:
    s3:
    aws_access_key_id: ~
    aws_secret_access_key: ~
    bucket: "bucket"
    enabled: true
    region: "region"  ```





Sign in to the AWS Management Console
Open your web browser and go to the AWS Management Console.
Enter your AWS account credentials (email and password) to log in.
Step 2: Navigate to S3 Service
Once logged in, you will see the AWS Management Console homepage.
In the search bar at the top, type "S3" and select "S3" from the dropdown menu.
Step 3: Locate Your S3 Bucket
On the Amazon S3 page, you will see a list of all your S3 buckets.
Find and click on the name of the S3 bucket you want to connect to.
Step 4: Understanding the S3 Bucket Interface
Overview Tab: Shows general information about the bucket.
Properties Tab: Contains configuration settings.
Permissions Tab: Shows who has access to the bucket.
Management Tab: Used for setting up bucket policies and management tasks.
Step 5: Accessing Files in the S3 Bucket
Objects Section: This section lists all the files and folders in your bucket.
Click on a file name to open it, or right-click to download it.
Step 6: Uploading Files to the S3 Bucket
Click the "Upload" button.
Drag and drop files from your computer into the upload area or use the "Add files" button to select files.
Click "Upload" to add the files to the bucket.
Step 7: Sharing Files from the S3 Bucket
Find the file you want to share.
Click on the file name to open its details.
Click the "Copy URL" button to get a shareable link.
Step 8: Using S3 for Static Website Hosting (Optional)
Go to the Properties Tab of your bucket.
Scroll down to "Static website hosting" and click "Edit".
Enable static website hosting and set the index document (e.g., index.html).
Save changes. Your bucket can now serve static website content.
Conclusion
Connecting to an AWS S3 bucket is a simple process that allows you to store, retrieve, and share files easily. With these steps, you should be able to navigate the AWS Management Console and manage your S3 bucket efficiently.

If you have any questions or need further assistance, feel free to reach out to your AWS administrator or refer to the AWS S3 documentation.
