## 10-10CG field character limits

- Here is the list of fields on the 10-10CG form with their character limits in SalesForce

|Attribute|SalesForce Field|Character Limit|
|----------|----------------|--------------|
|fullname.first	|Contact.FirstName , CARMA_Contact_Relationship__c.First_Name__c	|40|
|fullname.last	|Contact.LastName, CARMA_Contact_Relationship__c.Last_Name__c	|80|
|fullname.middle	|Contact.MiddleName	|40|
|Person.ssnOrTin	|Contact.SSN__c	|9|
|person.primaryPhoneNumber	|Contact.Phone	|40|
|person.alternativePhoneNumber	|Contact.Secondary_Phone__c	|40|
|Person.email	|Contact.Email, CARMA_Contact_Relationship__c.Email_Address__c	|80|
|icn	|Contact.MVI_External_Id__c	|29|
|Address.city	|Contact.MailingCity,  CARMA_Contact_Relationship__c.Address_City__c	|40|
|Address.street	|Contact.MailingStreet, CARMA_Contact_Relationship__c.Address_Street__c, Contact.OtherStreet, CARMA_Contact__c.Mailing_Address_Street__c	|255|
|Address.street2	|Contact.kw__Mailing_Address_2__c, 	|255|
|	 |CARMA_Contact_Relationship__c.Address_Street_2__c	|255|
|Address.postalcode	|Contact.MailingPostalCode	|20|
