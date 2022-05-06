# RFC: Mobile Routes naming conventions

- Date: 2022-05-05
- Related Issue: https://app.zenhub.com/workspaces/va-mobile---backend-61d75d03a7505500147ec7f6/issues/department-of-veterans-affairs/va-mobile-app/2937

## Background
Mobile routes currently have some inconsistencies in their naming conventions, such as:
- Sometimes using snake_case over kebab-case (maintenance_windows, message_drafts)
- :ids are after the resource action rather than before (canceling appointments)
- Referring to the same thing with different names (appointments: 'pending' and 'requests')
- Not nesting under parent products (the 'health' and 'benefits' app)

## Motivation
Keeping naming consistent will make using the Mobile API much easier to use and is generally a good practice for maintainability. 

## Design
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
get '/facilities-info/:sort', to: 'facilities_info#index'

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

See below for example of all routes after changes:
```

                                            GET    /                                                                             mobile/discovery#welcome
                                         v0 GET    /v0/appeal/:id(.:format)                                                      mobile/v0/claims_and_appeals#get_appeal
                                            GET    /v0/appointment_requests/:appointment_request_id/messages(.:format)           mobile/v0/appointment_request_messages#index
                            v0_appointments GET    /v0/appointments(.:format)                                                    mobile/v0/appointments#index
                                            PUT    /v0/appointments/cancel/:id(.:format)                                         mobile/v0/appointments#cancel
                                            GET    /v0/appointments/community_care/eligibility/:service_type(.:format)           mobile/v0/community_care_eligibility#show
             v0_appointments_va_eligibility GET    /v0/appointments/va/eligibility(.:format)                                     mobile/v0/veterans_affairs_eligibility#show
       v0_appointments_facility_eligibility GET    /v0/appointments/facility/eligibility(.:format)                               mobile/v0/facility_eligibility#index
                             v0_appointment POST   /v0/appointment(.:format)                                                     mobile/v0/appointments#create
             v0_claims_and_appeals_overview GET    /v0/claims-and-appeals-overview(.:format)                                     mobile/v0/claims_and_appeals#index
                                            GET    /v0/claim/:id(.:format)                                                       mobile/v0/claims_and_appeals#get_claim
                                            POST   /v0/claim/:id/documents(.:format)                                             mobile/v0/claims_and_appeals#upload_document
                                            POST   /v0/claim/:id/documents/multi-image(.:format)                                 mobile/v0/claims_and_appeals#upload_multi_image_document
                                            POST   /v0/claim/:id/request-decision(.:format)                                      mobile/v0/claims_and_appeals#request_decision
                v0_community_care_providers GET    /v0/community-care-providers(.:format)                                        mobile/v0/community_care_providers#index
                       v0_disability_rating GET    /v0/disability-rating(.:format)                                               mobile/v0/disability_rating#index
                    v0_health_immunizations GET    /v0/health/immunizations(.:format)                                            mobile/v0/immunizations#index
                                            GET    /v0/health/locations/:id(.:format)                                            mobile/v0/locations#show
                                 v0_letters GET    /v0/letters(.:format)                                                         mobile/v0/letters#index
                     v0_letters_beneficiary GET    /v0/letters/beneficiary(.:format)                                             mobile/v0/letters#beneficiary
                                            POST   /v0/letters/:type/download(.:format)                                          mobile/v0/letters#download
                     v0_maintenance_windows GET    /v0/maintenance_windows(.:format)                                             mobile/v0/maintenance_windows#index
     v0_messaging_health_messages_signature GET    /v0/messaging/health/messages/signature(.:format)                             mobile/v0/messages#signature
                v0_military_service_history GET    /v0/military-service-history(.:format)                                        mobile/v0/military_information#get_service_history
                         v0_payment_history GET    /v0/payment-history(.:format)                                                 mobile/v0/payment_history#index
            v0_payment_information_benefits GET    /v0/payment-information/benefits(.:format)                                    mobile/v0/payment_information#index
                                            PUT    /v0/payment-information/benefits(.:format)                                    mobile/v0/payment_information#update
                           v0_push_register PUT    /v0/push/register(.:format)                                                   mobile/v0/push_notifications#register
                                            GET    /v0/push/prefs/:endpoint_sid(.:format)                                        mobile/v0/push_notifications#get_prefs
                                            PUT    /v0/push/prefs/:endpoint_sid(.:format)                                        mobile/v0/push_notifications#set_pref
                               v0_push_send POST   /v0/push/send(.:format)                                                       mobile/v0/push_notifications#send_notification
                                    v0_user GET    /v0/user(.:format)                                                            mobile/v0/users#show
                             v0_user_logout GET    /v0/user/logout(.:format)                                                     mobile/v0/users#logout
                          v0_user_addresses POST   /v0/user/addresses(.:format)                                                  mobile/v0/addresses#create
                                            PUT    /v0/user/addresses(.:format)                                                  mobile/v0/addresses#update
                                            DELETE /v0/user/addresses(.:format)                                                  mobile/v0/addresses#destroy
                 v0_user_addresses_validate POST   /v0/user/addresses/validate(.:format)                                         mobile/v0/addresses#validate
                             v0_user_emails POST   /v0/user/emails(.:format)                                                     mobile/v0/emails#create
                                            PUT    /v0/user/emails(.:format)                                                     mobile/v0/emails#update
                                            DELETE /v0/user/emails(.:format)                                                     mobile/v0/emails#destroy
                             v0_user_phones POST   /v0/user/phones(.:format)                                                     mobile/v0/phones#create
                                            PUT    /v0/user/phones(.:format)                                                     mobile/v0/phones#update
                                            DELETE /v0/user/phones(.:format)                                                     mobile/v0/phones#destroy
                            v0_triage_teams GET    /v0/messaging/health/recipients(.:format)                                     mobile/v0/triage_teams#index {:format=>:json}
                         v0_folder_messages GET    /v0/messaging/health/folders/:folder_id/messages(.:format)                    mobile/v0/messages#index {:format=>:json}
                                 v0_folders GET    /v0/messaging/health/folders(.:format)                                        mobile/v0/folders#index {:format=>:json}
                                            POST   /v0/messaging/health/folders(.:format)                                        mobile/v0/folders#create {:format=>:json}
                                  v0_folder GET    /v0/messaging/health/folders/:id(.:format)                                    mobile/v0/folders#show {:format=>:json}
                                            DELETE /v0/messaging/health/folders/:id(.:format)                                    mobile/v0/folders#destroy {:format=>:json}
                          thread_v0_message GET    /v0/messaging/health/messages/:id/thread(.:format)                            mobile/v0/messages#thread {:format=>:json}
                     categories_v0_messages GET    /v0/messaging/health/messages/categories(.:format)                            mobile/v0/messages#categories {:format=>:json}
                            move_v0_message PATCH  /v0/messaging/health/messages/:id/move(.:format)                              mobile/v0/messages#move {:format=>:json}
                           reply_v0_message POST   /v0/messaging/health/messages/:id/reply(.:format)                             mobile/v0/messages#reply {:format=>:json}
                      v0_message_attachment GET    /v0/messaging/health/messages/:message_id/attachments/:id(.:format)           mobile/v0/attachments#show {:format=>:json}
                                v0_messages POST   /v0/messaging/health/messages(.:format)                                       mobile/v0/messages#create {:format=>:json}
                                 v0_message GET    /v0/messaging/health/messages/:id(.:format)                                   mobile/v0/messages#show {:format=>:json}
                                            DELETE /v0/messaging/health/messages/:id(.:format)                                   mobile/v0/messages#destroy {:format=>:json}
             create_reply_v0_message_drafts POST   /v0/messaging/health/message_drafts/:reply_id/replydraft(.:format)            mobile/v0/message_drafts#create_reply_draft {:format=>:json}
             update_reply_v0_message_drafts PUT    /v0/messaging/health/message_drafts/:reply_id/replydraft/:draft_id(.:format)  mobile/v0/message_drafts#update_reply_draft {:format=>:json}
                          v0_message_drafts POST   /v0/messaging/health/message_drafts(.:format)                                 mobile/v0/message_drafts#create {:format=>:json}
                           v0_message_draft PATCH  /v0/messaging/health/message_drafts/:id(.:format)                             mobile/v0/message_drafts#update {:format=>:json}
                                            PUT    /v0/messaging/health/message_drafts/:id(.:format)                             mobile/v0/message_drafts#update {:format=>:json}
                                  v1_health GET    /v1/health/appointment-requests/:appointment_request_id/messages(.:format)    mobile/v1/health/appointment_request_messages#index
                     v1_health_appointments GET    /v1/health/appointments(.:format)                                             mobile/v1/health/appointments#index
                                            PUT    /v1/health/appointments/:id/cancel(.:format)                                  mobile/v1/health/appointments#cancel
                                            GET    /v1/health/appointments/community-care/:service_type/eligibility(.:format)    mobile/v1/health/community_care_eligibility#show
      v1_health_appointments_va_eligibility GET    /v1/health/appointments/va/eligibility(.:format)                              mobile/v1/health/veterans_affairs_eligibility#show
v1_health_appointments_facility_eligibility GET    /v1/health/appointments/facility/eligibility(.:format)                        mobile/v1/health/facility_eligibility#index
                      v1_health_appointment POST   /v1/health/appointment(.:format)                                              mobile/v1/health/appointments#create
         v1_health_community_care_providers GET    /v1/health/community-care-providers(.:format)                                 mobile/v1/health/community_care_providers#index
                    v1_health_immunizations GET    /v1/health/immunizations(.:format)                                            mobile/v1/health/immunizations#index
                                v1_benefits GET    /v1/benefits/appeal/:id(.:format)                                             mobile/v1/benefits/claims_and_appeals#get_appeal
    v1_benefits_claims_and_appeals_overview GET    /v1/benefits/claims-and-appeals-overview(.:format)                            mobile/v1/benefits/claims_and_appeals#index
                                            GET    /v1/benefits/claim/:id(.:format)                                              mobile/v1/benefits/claims_and_appeals#get_claim
                                            POST   /v1/benefits/claim/:id/documents(.:format)                                    mobile/v1/benefits/claims_and_appeals#upload_document
                                            POST   /v1/benefits/claim/:id/documents/multi-image(.:format)                        mobile/v1/benefits/claims_and_appeals#upload_multi_image_document
                                            POST   /v1/benefits/claim/:id/request-decision(.:format)                             mobile/v1/benefits/claims_and_appeals#request_decision
                     v1_maintenance_windows GET    /v1/maintenance-windows(.:format)                                             mobile/v1/maintenance_windows#index
                                         v1 GET    /v1/push/:endpoint_sid/prefs(.:format)                                        mobile/v1/push_notifications#get_prefs
                                            PUT    /v1/push/:endpoint_sid/prefs(.:format)                                        mobile/v1/push_notifications#set_pref
                                    v1_user GET    /v1/user(.:format)                                                            mobile/v1/users#show
                                            GET    /v1/facilities-info/:sort(.:format)                                           mobile/v1/facilities_info#index
             create_reply_v1_message_drafts POST   /v1/messaging/health/message-drafts/:reply_id/reply-draft(.:format)           mobile/v1/message_drafts#create_reply_draft {:format=>:json}
             update_reply_v1_message_drafts PUT    /v1/messaging/health/message-drafts/:reply_id/reply-draft/:draft_id(.:format) mobile/v1/message_drafts#update_reply_draft {:format=>:json}
                          v1_message_drafts POST   /v1/messaging/health/message-drafts(.:format)                                 mobile/v1/message_drafts#create {:format=>:json}
                           v1_message_draft PATCH  /v1/messaging/health/message-drafts/:id(.:format)                             mobile/v1/message_drafts#update {:format=>:json}
                                            PUT    /v1/messaging/health/message-drafts/:id(.:format)                             mobile/v1/message_drafts#update {:format=>:json}

```
Naming conventions will also be documented on mobile documentation site. 
## Risks
Must throughly test new endpoints to ensure nothing breaks.

## Alternatives
N/A
