# RFC: Mobile Routes naming conventions

- Date: 2022-05-05
- Related Issue: https://app.zenhub.com/workspaces/va-mobile---backend-61d75d03a7505500147ec7f6/issues/department-of-veterans-affairs/va-mobile-app/2937

## Background
_Explain the current state of the feature._
Mobile routes currently have some inconsistencies in their naming conventions, such as:
- Sometimes using snake_case over kebab-case (maintenance_windows, message_drafts)
- :ids are after the resource action rather than before (canceling appointments)
- Referring to the same thing with different names (appointments: 'pending' and 'requests')
- Not nesting under parent products (the 'health' and 'benefits' app)

## Motivation
_Why do we want to change the current implementation? What problem(s) does the change solve?_
Keeping naming consistent will make using the Mobile API much easier to use and is generally a good practice for maintainability. 

## Design
_Explain the proposed changes in enough detail so that a team member with working knowledge 
of the project could implement the change themselves. Bonus points if this is easily mappable
to user stories or specs._
Version all endpoint that do not meet the naming convention as follows:
```
namespace :health do
  get '/appointment-requests/:appointment_request_id/messages', to: 'appointment_request_messages#index'
  get '/appointments', to: 'appointments#index'
  put '/appointments/:id/cancel', to: 'appointments#cancel'
  get '/appointments/community-care/:service_type/eligibility', to: 'community_care_eligibility#show'
  get '/appointments/va/eligibility', to: 'veterans_affairs_eligibility#show'
  get '/appointments/facility/eligibility', to: 'facility_eligibility#index'
  post '/appointment', to: 'appointments#create'
  get '/community-care-providers', to: 'community_care_providers#index'
  end

namespace :benefits do
  get '/appeal/:id', to: 'claims_and_appeals#get_appeal'
  get '/claims-and-appeals-overview', to: 'claims_and_appeals#index'
  get '/claim/:id', to: 'claims_and_appeals#get_claim'
  post '/claim/:id/documents', to: 'claims_and_appeals#upload_document'
  post '/claim/:id/documents/multi-image', to: 'claims_and_appeals#upload_multi_image_document'
  post '/claim/:id/request-decision', to: 'claims_and_appeals#request_decision'
  end

  get '/maintenance-windows', to: 'maintenance_windows#index'
  get '/push/:endpoint_sid/prefs', to: 'push_notifications#get_prefs'
  put '/push/:endpoint_sid/prefs', to: 'push_notifications#set_pref'

scope :messaging do
   scope :health do
      resources :message_drafts, path: 'message-drafts', only: %i[create update], defaults: { format: :json } do
        post ':reply_id/reply-draft', on: :collection, action: :create_reply_draft, as: :create_reply
        put ':reply_id/reply-draft/:draft_id', on: :collection, action: :update_reply_draft, as: :update_reply
      end
   end
end
```
Notes: 
- Only endpoints being changed are shown above
- All of these will be versioned from v0 to v1
- Adding parent products (health, benefits) is adding a namespace so the controllers will be nested in a folder as well.

For the sake of ease of reviewing all endpoints, see below for all mobile endpoint that will not be changed.
```
get '/disability-rating', to: 'disability_rating#index'
get '/health/immunizations', to: 'immunizations#index'
get '/health/locations/:id', to: 'locations#show'
get '/letters', to: 'letters#index'
get '/letters/beneficiary', to: 'letters#beneficiary'
post '/letters/:type/download', to: 'letters#download'
get '/messaging/health/messages/signature', to: 'messages#signature'
get '/military-service-history', to: 'military_information#get_service_history'
get '/payment-history', to: 'payment_history#index'
get '/payment-information/benefits', to: 'payment_information#index'
put '/payment-information/benefits', to: 'payment_information#update'
put '/push/register', to: 'push_notifications#register'
post '/push/send', to: 'push_notifications#send_notification'
get '/user', to: 'users#show'
get '/user/logout', to: 'users#logout'
post '/user/addresses', to: 'addresses#create'
put '/user/addresses', to: 'addresses#update'
delete '/user/addresses', to: 'addresses#destroy'
post '/user/addresses/validate', to: 'addresses#validate'
post '/user/emails', to: 'emails#create'
put '/user/emails', to: 'emails#update'
delete '/user/emails', to: 'emails#destroy'
post '/user/phones', to: 'phones#create'
put '/user/phones', to: 'phones#update'
delete '/user/phones', to: 'phones#destroy'

scope :messaging do
  scope :health do
    resources :triage_teams, only: [:index], defaults: { format: :json }, path: 'recipients'

    resources :folders, only: %i[index show create destroy], defaults: { format: :json } do
      resources :messages, only: [:index], defaults: { format: :json }
    end

    resources :messages, only: %i[show create destroy], defaults: { format: :json } do
      get :thread, on: :member
      get :categories, on: :collection
      patch :move, on: :member
      post :reply, on: :member
      resources :attachments, only: [:show], defaults: { format: :json }
    end
  end
end
```
Naming conventions will also be documented on mobile documentation site. 
## Risks
_What are the risks of the proposed changes?_
Must throughly test new endpoints to ensure nothing breaks.

## Alternatives
_What other alternatives solutions were considered, why weren't they chosen?_
N/A
