# RFC: Mobile Routes naming conventions

- Date: 2022-05-05
- Related Issue: https://app.zenhub.com/workspaces/va-mobile---backend-61d75d03a7505500147ec7f6/issues/department-of-veterans-affairs/va-mobile-app/2937

## Background
Mobile routes currently have some inconsistencies in their naming conventions, such as:
- Sometimes using snake_case over kebab-case (maintenance_windows, message_drafts)
- :ids are after the resource action rather than before (canceling appointments)
- Not nesting under parent products (the 'health' and 'benefits' app)

## Motivation
Keeping naming consistent will make using the Mobile API much easier to use and is generally a good practice for maintainability. 

## Design
Version all endpoint that do not meet the naming convention as follows:
```
                            maintenance_windows GET    /maintenance-windows(.:format)                                                mobile/maintenance_windows#index
                         v1_health_appointments GET    /v1/health/appointments(.:format)                                             mobile/v1/health/appointments/appointments#index
                                                POST   /v1/health/appointments(.:format)                                             mobile/v1/health/appointments/appointments#create
                                                GET    /v1/health/appointments/requests/:appointment_request_id/messages(.:format)   mobile/v1/health/appointments/appointment_request_messages#index
                                                PUT    /v1/health/appointments/:id/cancel(.:format)                                  mobile/v1/health/appointments/appointments#cancel
v1_health_appointments_community_care_providers GET    /v1/health/appointments/community-care-providers(.:format)                    mobile/v1/health/appointments/community_care_providers#index
                                                GET    /v1/health/appointments/facilities-info/:sort(.:format)                       mobile/v1/health/appointments/facilities_info#index
                                                GET    /v1/health/appointments/eligibility/community-care/:service_type(.:format)    mobile/v1/health/appointments/community_care_eligibility#show
                      v1_health_appointments_va GET    /v1/health/appointments/eligibility/va(.:format)                              mobile/v1/health/appointments/veterans_affairs_eligibility#show
                v1_health_appointments_facility GET    /v1/health/appointments/eligibility/facility(.:format)                        mobile/v1/health/appointments/facility_eligibility#index
                         v1_health_triage_teams GET    /v1/health/messaging/recipients(.:format)                                     mobile/v1/health/triage_teams#index {:format=>:json}
                      v1_health_folder_messages GET    /v1/health/messaging/folders/:folder_id/messages(.:format)                    mobile/v1/health/messages#index {:format=>:json}
                              v1_health_folders GET    /v1/health/messaging/folders(.:format)                                        mobile/v1/health/folders#index {:format=>:json}
                                                POST   /v1/health/messaging/folders(.:format)                                        mobile/v1/health/folders#create {:format=>:json}
                               v1_health_folder GET    /v1/health/messaging/folders/:id(.:format)                                    mobile/v1/health/folders#show {:format=>:json}
                                                DELETE /v1/health/messaging/folders/:id(.:format)                                    mobile/v1/health/folders#destroy {:format=>:json}
                       thread_v1_health_message GET    /v1/health/messaging/messages/:id/thread(.:format)                            mobile/v1/health/messages#thread {:format=>:json}
                  categories_v1_health_messages GET    /v1/health/messaging/messages/categories(.:format)                            mobile/v1/health/messages#categories {:format=>:json}
                         move_v1_health_message PATCH  /v1/health/messaging/messages/:id/move(.:format)                              mobile/v1/health/messages#move {:format=>:json}
                        reply_v1_health_message POST   /v1/health/messaging/messages/:id/reply(.:format)                             mobile/v1/health/messages#reply {:format=>:json}
                   v1_health_message_attachment GET    /v1/health/messaging/messages/:message_id/attachments/:id(.:format)           mobile/v1/health/attachments#show {:format=>:json}
                             v1_health_messages POST   /v1/health/messaging/messages(.:format)                                       mobile/v1/health/messages#create {:format=>:json}
                              v1_health_message GET    /v1/health/messaging/messages/:id(.:format)                                   mobile/v1/health/messages#show {:format=>:json}
                                                DELETE /v1/health/messaging/messages/:id(.:format)                                   mobile/v1/health/messages#destroy {:format=>:json}
          create_reply_v1_health_message_drafts POST   /v1/health/messaging/message-drafts/:reply_id/reply-draft(.:format)           mobile/v1/health/message_drafts#create_reply_draft {:format=>:json}
          update_reply_v1_health_message_drafts PUT    /v1/health/messaging/message-drafts/:reply_id/reply-draft/:draft_id(.:format) mobile/v1/health/message_drafts#update_reply_draft {:format=>:json}
                       v1_health_message_drafts POST   /v1/health/messaging/message-drafts(.:format)                                 mobile/v1/health/message_drafts#create {:format=>:json}
                        v1_health_message_draft PATCH  /v1/health/messaging/message-drafts/:id(.:format)                             mobile/v1/health/message_drafts#update {:format=>:json}
                                                PUT    /v1/health/messaging/message-drafts/:id(.:format)                             mobile/v1/health/message_drafts#update {:format=>:json}
                                    v1_benefits GET    /v1/benefits/appeals/:id(.:format)                                            mobile/v1/benefits/claims_and_appeals#get_appeal
        v1_benefits_claims_and_appeals_overview GET    /v1/benefits/claims-and-appeals-overview(.:format)                            mobile/v1/benefits/claims_and_appeals#index
                  v1_benefits_disability_rating GET    /v1/benefits/disability-rating(.:format)                                      mobile/v1/benefits/disability_rating#index
                                                GET    /v1/benefits/claims/:id(.:format)                                             mobile/v1/benefits/claims_and_appeals#get_claim
                                                POST   /v1/benefits/claims/:id/documents(.:format)                                   mobile/v1/benefits/claims_and_appeals#upload_document
                                                POST   /v1/benefits/claims/:id/documents/multi-image(.:format)                       mobile/v1/benefits/claims_and_appeals#upload_multi_image_document
                                                POST   /v1/benefits/claims/:id/request-decision(.:format)                            mobile/v1/benefits/claims_and_appeals#request_decision
                                                GET    /v1/benefits/letters(.:format)                                                mobile/v1/benefits/letters#index
                        v1_benefits_beneficiary GET    /v1/benefits/letters/beneficiary(.:format)                                    mobile/v1/benefits/letters#beneficiary
                                                POST   /v1/benefits/letters/:type/download(.:format)                                 mobile/v1/benefits/letters#download
                            v1_benefits_history GET    /v1/benefits/payments/history(.:format)                                       mobile/v1/benefits/payment_history#index
                        v1_benefits_information GET    /v1/benefits/payments/information(.:format)                                   mobile/v1/benefits/payment_information#index
                                                PUT    /v1/benefits/payments/information(.:format)                                   mobile/v1/benefits/payment_information#update
                                             v1 GET    /v1/push/:endpoint_sid/prefs(.:format)                                        mobile/v1/push_notifications#get_prefs
                                                PUT    /v1/push/:endpoint_sid/prefs(.:format)                                        mobile/v1/push_notifications#set_pref
               v1_user_military_service_history GET    /v1/user/military-service-history(.:format)                                   mobile/v1/military_information#get_service_history

```
Notes: 
- Only endpoints being changed are shown above
- All of these will be versioned from v0 to v1
- Adding parent products (health, benefits) is adding a namespace so the controllers will be nested in a folder as well.
- Naming conventions will also be documented on mobile documentation site. 

See updated routes file to see implications to controllers:
```
# frozen_string_literal: true

Mobile::Engine.routes.draw do
  get '/', to: 'discovery#welcome'
  get '/maintenance-windows', to: 'maintenance_windows#index'

  namespace :v0 do
    get '/appeal/:id', to: 'claims_and_appeals#get_appeal'
    get '/appointment_requests/:appointment_request_id/messages', to: 'appointment_request_messages#index'
    get '/appointments', to: 'appointments#index'
    put '/appointments/cancel/:id', to: 'appointments#cancel'
    get '/appointments/community_care/eligibility/:service_type', to: 'community_care_eligibility#show'
    get '/appointments/va/eligibility', to: 'veterans_affairs_eligibility#show'
    get '/appointments/facility/eligibility', to: 'facility_eligibility#index'
    post '/appointment', to: 'appointments#create'
    get '/claims-and-appeals-overview', to: 'claims_and_appeals#index'
    get '/claim/:id', to: 'claims_and_appeals#get_claim'
    post '/claim/:id/documents', to: 'claims_and_appeals#upload_document'
    post '/claim/:id/documents/multi-image', to: 'claims_and_appeals#upload_multi_image_document'
    post '/claim/:id/request-decision', to: 'claims_and_appeals#request_decision'
    get '/community-care-providers', to: 'community_care_providers#index'
    get '/disability-rating', to: 'disability_rating#index'
    get '/health/immunizations', to: 'immunizations#index'
    get '/health/locations/:id', to: 'locations#show'
    get '/letters', to: 'letters#index'
    get '/letters/beneficiary', to: 'letters#beneficiary'
    post '/letters/:type/download', to: 'letters#download'
    get '/maintenance_windows', to: 'maintenance_windows#index'
    get '/messaging/health/messages/signature', to: 'messages#signature'
    get '/military-service-history', to: 'military_information#get_service_history'
    get '/payment-history', to: 'payment_history#index'
    get '/payment-information/benefits', to: 'payment_information#index'
    put '/payment-information/benefits', to: 'payment_information#update'
    put '/push/register', to: 'push_notifications#register'
    get '/push/prefs/:endpoint_sid', to: 'push_notifications#get_prefs'
    put '/push/prefs/:endpoint_sid', to: 'push_notifications#set_pref'
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

        resources :message_drafts, only: %i[create update], defaults: { format: :json } do
          post ':reply_id/replydraft', on: :collection, action: :create_reply_draft, as: :create_reply
          put ':reply_id/replydraft/:draft_id', on: :collection, action: :update_reply_draft, as: :update_reply
        end
      end
    end
  end

  namespace :v1 do
    namespace :health do
      namespace :appointments do
        get '/', to: 'appointments#index'
        post '/', to: 'appointments#create'
        get '/requests/:appointment_request_id/messages', to: 'appointment_request_messages#index'
        put '/:id/cancel', to: 'appointments#cancel'
        get '/community-care-providers', to: 'community_care_providers#index'
        get '/facilities-info/:sort', to: 'facilities_info#index'

        scope :eligibility do
          get '/community-care/:service_type', to: 'community_care_eligibility#show'
          get '/va', to: 'veterans_affairs_eligibility#show'
          get '/facility', to: 'facility_eligibility#index'
        end
      end

      scope :messaging do
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

        resources :message_drafts, path: 'message-drafts', only: %i[create update], defaults: { format: :json } do
          post ':reply_id/reply-draft', on: :collection, action: :create_reply_draft, as: :create_reply
          put ':reply_id/reply-draft/:draft_id', on: :collection, action: :update_reply_draft, as: :update_reply
        end
      end
      get '/immunizations', to: 'immunizations#index'
    end

    namespace :benefits do
      get '/appeals/:id', to: 'claims_and_appeals#get_appeal'
      get '/claims-and-appeals-overview', to: 'claims_and_appeals#index'
      get '/disability-rating', to: 'disability_rating#index'

      scope :claims do
        get '/:id', to: 'claims_and_appeals#get_claim'
        post '/:id/documents', to: 'claims_and_appeals#upload_document'
        post '/:id/documents/multi-image', to: 'claims_and_appeals#upload_multi_image_document'
        post '/:id/request-decision', to: 'claims_and_appeals#request_decision'
      end

      scope :letters do
        get '/', to: 'letters#index'
        get '/beneficiary', to: 'letters#beneficiary'
        post '/:type/download', to: 'letters#download'
      end

      scope :payments do
        get '/history', to: 'payment_history#index'
        get '/information', to: 'payment_information#index'
        put '/information', to: 'payment_information#update'
      end
    end

    get '/push/:endpoint_sid/prefs', to: 'push_notifications#get_prefs'
    put '/push/:endpoint_sid/prefs', to: 'push_notifications#set_pref'
    get '/user', to: 'users#show'
    get '/user/military-service-history', to: 'military_information#get_service_history'
  end
end

```
## Risks
Must throughly test new endpoints to ensure nothing breaks.

## Alternatives
N/A
