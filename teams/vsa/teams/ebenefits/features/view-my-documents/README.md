# View My Documents (eFolder)

## WIP

## User Stories

- I can log in to VA.gov and see a page that has a list of all the documents I or my representtive have upoaded
- I can navigate through the list of documents by clicking to different pages
- I can filter and sort the list by various document metadata criteria (TBD)
- I can click on a document to view or download that document

## Considerations

- Lighthouse team is connecting to eFolder through VBMS service (https://github.com/department-of-veterans-affairs/vets-api/blob/master/modules/claims_api/app/workers/claims_api/vbms_uploader.rb#L66) 
- Ruby gem for VBMS is here: https://github.com/department-of-veterans-affairs/connect_vbms
  - Documentation is internal
- Once this is done we should be able to move to the debt center notification work
