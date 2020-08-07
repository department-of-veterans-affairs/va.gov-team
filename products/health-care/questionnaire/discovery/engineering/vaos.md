## VAOS

- VAOS uses VAMF (VA Mobile Framework) to obtain veteran scheduling information.
- VAOS is essentialy the VAOS Rails engine/Gem in vets-api that lives in the modules/vaos directory and has it's own set of Rails Routes. 
- VAOS connects to VAMF through veteran.apps.va.gov, however in the development and other environments there is no key to connect.
- The vets-website in dev and other environments actualy does not connect to VAOS but has fake mock data.
- The VAOS team is sensitive about other teams piggybacking or using their API as it effects their metrics and Paul Short is aware of this. 
- VAOS is not part of the VA platform support but are more of a services team. 
- VAOS suggested forking their code but this also has reusability concerns. 
- More information about the VAMF api specifically would be useful to understand how VAOS data is obtained.
