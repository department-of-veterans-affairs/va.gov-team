# CURES information from Dr. Meredith Josephs 2/28/2023

<div width=500>

The 21st Century Cures Act requires health systems/vendors to be able to share patient’s data with the patient and whomever else the patient elects to have the data:
  
The ONC Cures Act Final Rule (healthit.gov)
  
Here is a high level timeline: New Applicability Dates included in [ONC Interim Final Rule](https://gcc02.safelinks.protection.outlook.com/?url=https%3A%2F%2Fwww.healthit.gov%2Fsites%2Fdefault%2Ffiles%2Fpage2%2F2020-03%2FTheONCCuresActFinalRule.pdf&data=05%7C01%7C%7C954e195b3be245875a0208db18f8fb3d%7Ce95f1b23abaf45ee821db7ab251ab3bf%7C0%7C0%7C638131229875130002%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C3000%7C%7C%7C&sdata=Beu7%2Bg6RGy0mRXsjqexYIVzMakGbnaUgB2aMgOgLB3A%3D&reserved=0) (healthit.gov)
  
Per this you can see that Cerner was required to have its FHIR APIs available by 12/31/2022
  
And Cerner will be required to have full EHI Export capability available by 12/31/2023.
  
The Cures Act has established USCDI v1 as the standardized data classes/sets to be used for interoperability via FHIR: [Cures Act Final Rule - United States Core for Interoperability](https://gcc02.safelinks.protection.outlook.com/?url=https%3A%2F%2Fwww.healthit.gov%2Fsites%2Fdefault%2Ffiles%2Fpage2%2F2020-03%2FUSCDI.pdf&data=05%7C01%7C%7C954e195b3be245875a0208db18f8fb3d%7Ce95f1b23abaf45ee821db7ab251ab3bf%7C0%7C0%7C638131229875130002%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C3000%7C%7C%7C&sdata=0KeVRAPZtpZSSXVMBplKrRG4fxwfp1d6ULJfJeL2yLc%3D&reserved=0)(healthit.gov)
  
Here is more on USCDI – you will see they are working on v4 now: [United States Core Data for Interoperability (USCDI) | Interoperability Standards Advisory (ISA)](https://gcc02.safelinks.protection.outlook.com/?url=https%3A%2F%2Fwww.healthit.gov%2Fisa%2Funited-states-core-data-interoperability-uscdi%23uscdi-v1&data=05%7C01%7C%7C954e195b3be245875a0208db18f8fb3d%7Ce95f1b23abaf45ee821db7ab251ab3bf%7C0%7C0%7C638131229875130002%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C3000%7C%7C%7C&sdata=VGn66zRJ6JHv6kMI7CVwZm2e3HB9DNAh4%2FC8XSxRPLI%3D&reserved=0) (healthit.gov)
  
As of Oct 2022, ONC expanded what ePHI patients are entitled to. [Information Blocking Rule includes ePHI starting October 2022 (opennotes.org)](https://gcc02.safelinks.protection.outlook.com/?url=https%3A%2F%2Fwww.opennotes.org%2Fnews%2Finformation-blocking-rule-includes-ephi-starting-october-2022%2F&data=05%7C01%7C%7C954e195b3be245875a0208db18f8fb3d%7Ce95f1b23abaf45ee821db7ab251ab3bf%7C0%7C0%7C638131229875130002%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C3000%7C%7C%7C&sdata=ytdM%2BX8KC2herVV6YFZezVtsJVISBtKqscyDWgKz3lY%3D&reserved=0)
  
It was previously defined as USCDI, however with the expansion, ePHI now includes the entire Designated Record Set. Not sure how to reconcile the USCDI v1 as definition of data sets when the requirement is to give more than what is captured there.
  
I hope this is helpful. My recommendation is that we build our APIs to match ONC requirements to ensure we get from Cerner what they are required to give us…and then figure out how to get the Vista side of the data (as opposed to starting with MHV data set and asking Cerner to meet that need).
</div>
