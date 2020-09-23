
The MAP sandbox will be able to hold PGD data and appointments if the later can get setup, otherwise it will just have PGD. 
The sandbox should be transparent so that when it's no longer there, nothing much changes except some 
configurations settings but even those would just be different urls or keys

Currently to connect to the sandbox using a fhir client or endpoint, the PGD Service object creates a JWT token from a user object. 
The layout of the JWT is exactly the same as how VAOS does this. There is a document in the coderepo for MAP that outlines how the JWT is set up

The modules involved in creating the JWT are the session service and the JWT wrapper. These are also the same as VAOS except that the
JWT is created with ISS = 'gov.va.clipboard'. 

When the JWT token is created, the key_path from the hqva_mobile setting in the settings.yaml configuration file is used. This was done with Stephen Barrs
where I put the path to my private key and on the MAP side he put the public key. When it is done for other environments such as stagging or production, that 
will be a detail to be addressed. In those other environments, changing this setting should be all that is needed to access any MAP data 
whether through a sandbox or not and whether accessing appointments or PGD

```
hqva_mobile:
  url: 'https://veteran.apps.va.gov'
  mock: false
  key_path: /Users/laurenceguild/my-play-certs/sandbox_rsa
  timeout: 15
```

The URL in the hqva_mobile configuration setting will be set to the appropriate URL for either the sandbox or MAP PGD/Appointment data service.

The key_path field won't work locally the same way it works in staging. For it to work locally you have to obtain the key and copy to a location on your machine

The FHIR client will use the same URL and JWT in it's headers in order to access FHIR resources in such a way as:
FHIR::Questionnaire.read(id)
Currently vets-api does not use any such FHIR client



