We received additional documentation from the MVI team on August 23, 2019 about the Proxy Add service. 

Here's additional information that accompanies the documents:
Please see attached (except as noted):
 
Integration checklist
Checklist of items to be accomplished for this effort.  Will be delineated by who’s responsible: MVI, integration consumer, or jointly.
 
MVI Web Service WSDL and XSD, with definitions for all operations including the 1301
The WSDL. 
These XSDs have MVI optimizations for some mixed type elements; converted to simple types ‘st’.
Core schemas
 
IdmWebService_wsdl_all_operations.xml
IdMHL7v3.xsd.txt
MVI_HL7v3_20140417.zip
 
Approved Integration iRSD. (Not attached. Note:  Document will be available upon approval.)
 
Draft integration iSDD.docx.  (Not attached. Note: Draft iSDD will be forwarded upon completion / approval of iRSD and will be worked by the teams.)
This is the starting template previously discussed; will require input from your staff as indicated.
 
Sample query/responses
Sample HL7V3 queries to MVI, with responses, appropriate for the MVI Web Services used by your application. 
 
MVI Service Description (MSD) document. 
 
The sender ID for this integration will be updated shortly to include additional functionality. This is required in HL7V3 messages to MVI and is referenced in the documentation above; it identifies the sending entity/consumer to MVI.
 
Once you produce your first XML requests, please email a copy of the raw XMLs.  If all looks good, we’ll assist in connection to the MVI development server. This code will be valid initially for the MVI development only.
 
Please let us know if you have a list of identifiers or specific patients you’ll need for testing in Development.
 
Implementation Process Details:
 
MVI team has a phased implementation process that we adhere to make the technical integration as smooth as possible for all consumers.
 
1)            DESIGN
 
During this phase, we request that the consumer provide us with HL7V3 samples of all transactions to be implemented.  Our developers will validate the transactions and point out any issues and oversights.
 
2)            DEVELOPMENT
 
Once analysis is complete, [sender code] is configured / updated in our unsecure development environment.  At this point real-time application to application testing can be performed where developers from both sides monitor the back and forth transactions in an effort detect any issues. We will also perform some downtime testing with consumers.
 
NOTE: This environment contains only dummy data to aid in transaction development.  When ready to test our developers will be able to identify some test records to exercise.  MVI DEV and SQA systems do not contain any “real” PII, and no PII should be sent in consumer requests to these systems.
 
 
3)            STAGING (SQA)
 
Once development has been cleared, our developers will configure you in our staging environment.  At this point you can coordinate with our SQA staff to identify actual patient test records for testing.
 
Note: SQA also does not include live PII data.
 
 
4)            UAT/PreProd.
 
Once ok is given by SQA our developers will configure you in pre-prod environment.
            
 
5)            PRODUCTION
 
If everything goes according to plan our developers will configure you in production in anticipation of the go live.
 
 
 
[VAAFI]
 
All MVI service calls must go through the VAAFI security layer; although we may make exceptions in the early development phase to allow temporary direct access to the MVI dev server.  VAAFI checks SSL certificate credentials then routes verified requests to the back end MVI service endpoint.
 
Existing implementation, so VAAFI certificates have been exchanged. However, if certificates have been or need to be updated, you will need to coordinate with VAAFI contacts to walk you through their certificate exchange process. NOTE: This effort should be done in parallel to transaction development to avoid any potential schedule delays.
