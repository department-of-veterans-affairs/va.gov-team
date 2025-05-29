@startuml

actor "Accredited Representative"
participant "vets-website\n(React Frontend)" as Frontend
participant "vets-api\n(Rails Backend)" as Backend
participant "Lighthouse API\n(Benefits Claims API)" as LighthouseAPIClaims
participant "Lighthouse API\n(Benefits Intake API)" as LighthouseAPIIntake
database "VA.gov Database\n(PostgreSQL)" as VAGovDB

"Accredited Representative" -> Frontend: Go to /representative/representative-form-upload/form-number
Frontend -> Backend: GET User
activate Backend

Backend -> VAGovDB: Verify that logged-in user is found in ar_user_account_accredited_individuals
VAGovDB --> Backend: Authorization Status


Backend --> Frontend: Return User
deactivate Backend
Frontend --> "Accredited Representative": Display Form Upload Introduction Page

"Accredited Representative" -> Frontend: Go through Is Veteran page, Veteran/Claimant Information Pages. Upload File
Frontend -> Backend: POST Form Upload
activate Backend

Backend -> VAGovDB: Create PersistentAttachments::VAForm.new
VAGovDB -> Backend: Return confirmation

Backend --> Frontend: JSON Response with confirmation code
deactivate Backend
Frontend --> "Accredited Representative": Remove loading indicator

"Accredited Representative" -> Frontend: Submit Form and Veteran/Claimant data
Frontend -> Backend: POST Submit Form
activate Backend

Backend -> LighthouseAPIClaims: Verify rep has power of attorney
LighthouseAPIClaims --> Backend: Return result

Backend -> VAGovDB: Create Claims Submission
Backend -> LighthouseAPIIntake: Submit Form
Backend --> Frontend: JSON Response with confirmation code

Frontend -> "Accredited Representative": Confirmation Page

alt Unauthorized Rep
    Backend -> LighthouseAPIClaims: Verify rep has power of attorney
    LighthouseAPIClaims --> Backend: Return result
    Backend -> Frontend: Return result: unauthorized
    Frontend -> "Accredited Representative": Display Error Message

end
deactivate Backend

@enduml
