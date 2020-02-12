Given:
appToken: sjvlB75caM-O37hRpkDxV
mhvCorrelationId: 10616687
API base URL: https://smclinician-syst.myhealth.va.gov/mhv-sm-api/patient/v1/

curl -H "appToken:sjvlB75caM-O37hRpkDxV" -H "mhvCorrelationId:10616687" -v https://smclinician-syst.myhealth.va.gov/mhv-sm-api/patient/v1/session
returns header:
< HTTP/1.1 200 OK
< Date: Fri, 03 Jun 2016 17:06:20 GMT
* Server Apache/2.2.15 (Red Hat) is not blacklisted
< Server: Apache/2.2.15 (Red Hat)
< Content-Length: 0
< Expires: Fri, 03 Jun 2016 18:06:20 GMT
< Token: LXSpt9Lz0zo=BoqEPcDe2HJ8hf83F6EcOAfYvvMaGQrxuNCxIF4eB2w=
< X-Powered-By: Servlet/2.5 JSP/2.1
< Connection: close
< Content-Type: text/html; charset=UTF-8

key data we need: Token: LXSpt9Lz0zo=BoqEPcDe2HJ8hf83F6EcOAfYvvMaGQrxuNCxIF4eB2w=


curl -H "Token:LXSpt9Lz0zo=BoqEPcDe2HJ8hf83F6EcOAfYvvMaGQrxuNCxIF4eB2w=" -H "Accept: application/json" -v https://smclinician-syst.myhealth.va.gov/mhv-sm-api/patient/v1/triageteam
returns body:
{
  "triageTeam": [
    {
      "name": "Triage group 311070 test 1",
      "relationType": "PATIENT",
      "triageTeamId": 585968
    },
    {
      "name": "Triage group 311070 test 2",
      "relationType": "PATIENT",
      "triageTeamId": 585986
    },
    {
      "name": "WLC ENHANCEMENT _MRI",
      "relationType": "PATIENT",
      "triageTeamId": 280407
    },
    {
      "name": "WORKLOAD CAPTURE_Mohammad",
      "relationType": "PATIENT",
      "triageTeamId": 345468
    }
  ]
}



curl -H "Token:LXSpt9Lz0zo=BoqEPcDe2HJ8hf83F6EcOAfYvvMaGQrxuNCxIF4eB2w=" -H "Accept: application/json" -v https://smclinician-syst.myhealth.va.gov/mhv-sm-api/patient/v1/folder
returns body:
{
  "folder": [
    {
      "id": 0,
      "name": "Inbox",
      "count": 4,
      "unreadCount": 3,
      "systemFolder": true
    },
    {
      "id": -2,
      "name": "Drafts",
      "count": 1,
      "unreadCount": 0,
      "systemFolder": true
    },
    {
      "id": -1,
      "name": "Sent",
      "count": 2,
      "unreadCount": 0,
      "systemFolder": true
    },
    {
      "id": -3,
      "name": "Deleted",
      "count": 0,
      "unreadCount": 0,
      "systemFolder": true
    },
    {
      "id": 573077,
      "name": "MY PRESCRIPTION",
      "count": 0,
      "unreadCount": 0,
      "systemFolder": false
    }
  ]
}



curl -H "Token:LXSpt9Lz0zo=BoqEPcDe2HJ8hf83F6EcOAfYvvMaGQrxuNCxIF4eB2w=" -H "Accept: application/json" -v https://smclinician-syst.myhealth.va.gov/mhv-sm-api/patient/v1/folder/-1
returns body:
{
  "id": -1,
  "name": "Sent",
  "count": 2,
  "unreadCount": 0,
  "systemFolder": true
}


curl -H "Token:LXSpt9Lz0zo=BoqEPcDe2HJ8hf83F6EcOAfYvvMaGQrxuNCxIF4eB2w=" -H "Accept: application/json" -v https://smclinician-syst.myhealth.va.gov/mhv-sm-api/patient/v1/folder/-1/message/page/1/pageSize/1
returns body:
{
  "message": [
    {
      "id": 573059,
      "category": "OTHER",
      "subject": "Release 16.2- SM last login ",
      "body": null,
      "attachment": false,
      "attachments": null,
      "sentDate": "Mon, 11 Apr 2016 15:49:39 GMT",
      "senderId": 345468,
      "senderName": "WORKLOAD CAPTURE_Mohammad",
      "recipientId": 384939,
      "recipientName": "MVIONE, TEST",
      "readReceipt": "READ"
    }
  ]
}


curl -H "Token:mbf8zzIQqyU=UNGp+J2O4CGsYC5Kka+2GOSM/rv92ljv2kwn+DfxSVA=" -H "Accept: application/json" -v https://smclinician-syst.myhealth.va.gov/mhv-sm-api/patient/v1/message/573059/read
returns body:
{
  "id": 573059,
  "category": "OTHER",
  "subject": "Release 16.2- SM last login ",
  "body": "Patient reply again",
  "attachment": false,
  "attachments": {
    "attachment": [
      
    ]
  },
  "sentDate": "Mon, 11 Apr 2016 15:49:39 GMT",
  "senderId": 384939,
  "senderName": "MVIONE, TEST",
  "recipientId": 345468,
  "recipientName": "WORKLOAD CAPTURE_Mohammad",
  "readReceipt": "READ"
}



curl -H "Token:mbf8zzIQqyU=UNGp+J2O4CGsYC5Kka+2GOSM/rv92ljv2kwn+DfxSVA=" -H "Accept: application/json" -v https://smclinician-syst.myhealth.va.gov/mhv-sm-api/patient/v1/message/573059/history
returns body:
{
  "message": [
    {
      "id": 573052,
      "category": "OTHER",
      "subject": "Release 16.2- SM last login ",
      "body": "Provider Reply",
      "attachment": false,
      "attachments": null,
      "sentDate": "Mon, 11 Apr 2016 15:49:03 GMT",
      "senderId": 257555,
      "senderName": "ISLAM, MOHAMMAD",
      "recipientId": 384939,
      "recipientName": "MVIONE, TEST",
      "readReceipt": "READ"
    },
    {
      "id": 573041,
      "category": "OTHER",
      "subject": "Release 16.2- SM last login ",
      "body": "Release 16.2- SM last login ",
      "attachment": false,
      "attachments": null,
      "sentDate": "Mon, 11 Apr 2016 15:48:25 GMT",
      "senderId": 384939,
      "senderName": "MVIONE, TEST",
      "recipientId": 345468,
      "recipientName": "WORKLOAD CAPTURE_Mohammad",
      "readReceipt": "READ"
    }
  ]
}


curl -H "Token:mbf8zzIQqyU=UNGp+J2O4CGsYC5Kka+2GOSM/rv92ljv2kwn+DfxSVA=" -H "Accept: application/json" -v https://smclinician-syst.myhealth.va.gov/mhv-sm-api/patient/v1/message/category
returns body:
{
  "messageCategoryType": [
    "OTHER",
    "APPOINTMENTS",
    "MEDICATIONS",
    "TEST_RESULTS",
    "EDUCATION"
  ]
}


curl -X POST -H "Token: wcWyxoPeY04=Za1t6R+yDGD6n43B6OVMwatx4V6BiP/J0k+5GfRQBfU=" -H "Accept: application/json" -d '{"name":"Test Folder XXX"}' -v https://smclinician-syst.myhealth.va.gov/mhv-sm-api/patient/v1/folder
Errors (and returns XML?):
<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Error><developerMessage></developerMessage><errorCode>99</errorCode><message>Unknown application error occurred</message></Error>


curl -X DELETE -H "Token: xdKditLc9EY=FWyPkIXc4y4plCjHi1DuiKvgaa00fKiUNtAzH6l6miQ=" -H "Accept: application/json" -d '{"name":"Test Folder XXX"}' -v https://smclinician-syst.myhealth.va.gov/mhv-sm-api/patient/v1/folder/573077
Errors:
<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Error><developerMessage></developerMessage><errorCode>99</errorCode><message>Unknown application error occurred</message></Error>


curl -X POST -H "Token: wcWyxoPeY04=Za1t6R+yDGD6n43B6OVMwatx4V6BiP/J0k+5GfRQBfU=" -H "Accept: application/json" -d '{"category": "OTHER", "subject": "Post via APIs", "body": "Testing Post T1386793800834","recipientId": "20364","recipientName":"MHVTestRecipient, Test"}' -v https://smclinician-syst.myhealth.va.gov/mhv-sm-api/patient/v1/message
Errors:
<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Error><developerMessage></developerMessage><errorCode>99</errorCode><message>Unknown application error occurred</message></Error>

POST https://smclinician.myhealth.va.gov/mhv-sm-api/patient/v1/message/attach
-not tested, would also error

curl -X POST -H "Token: wcWyxoPeY04=Za1t6R+yDGD6n43B6OVMwatx4V6BiP/J0k+5GfRQBfU=" -H "Accept: application/json" -d '{"category": "OTHER", "subject": "Post via APIs", "body": "Testing Post T1386793800834","recipientId": "20364","recipientName":"MHVTestRecipient, Test"}' -v https://smclinician-syst.myhealth.va.gov/mhv-sm-api/patient/v1/message/draft
Errors:
<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Error><developerMessage></developerMessage><errorCode>99</errorCode><message>Unknown application error occurred</message></Error>


GET https://smclinician.myhealth.va.gov/mhv-smapi/patient/v1/message/{messageid}/attachment/{attachmentid}
-not tested--no test messages with attachments

DELETE https://smclinician.myhealth.va.gov/mhv-sm-api/patient/v1/message/{messageid}
-not tested, will fail

POST https://smclinician.myhealth.va.gov/mhv-sm-api/patient/v1/message/{messageid}/reply
-not tested, will fail

POST https://smclinician.myhealth.va.gov/mhv-sm-api/patient/v1/message/{messageid}/reply/attach
-not tested, will fail

POST https://smclinician.myhealth.va.gov/mhv-sm-api/patient/v1/message/{messageid}/move/{folderid}
ALSO defined as: POST /message/{messageid}/move/tofolder/{folderid}
*need to clarify whether the "tofolder" is necessary
-not tested, will fail

