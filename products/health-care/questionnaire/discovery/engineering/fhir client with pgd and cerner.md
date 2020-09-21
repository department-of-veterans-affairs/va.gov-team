
## Using the FHIR client with PGD sandbox and Cerner sandbox

This code is experimental and used for research and proof of concept using the rails console so it is described here rather than being checked in. It uses the fhir client ruby gem

<details>
  <summary>PGDService module</summary>
  
```
# frozen_string_literal: true

# other than init_pgd() to create a user session, none of the other methods
# currently work yet as S Barrs is still working on getting the sandbox functional
#
# From the rails console you can get a user session with the PGD sandbox:
#
# HealthQuest::PgdService.init_pgd
# 

require 'net/http'

LifelinesQuestion = 

# https://www.hl7.org/fhir/questionnaire-example-f201-lifelines.json.html

{
  "resourceType": "Questionnaire",
  "id": "f201",
  "text": {
    "status": "generated",
    "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n      <pre>Lifelines Questionnaire 1 part 1\n  1. Do you have allergies?\n  2. General Questions:\n    2.a) What is your gender?\n    2.b) What is your date of birth?\n    2.c) What is your country of birth?\n    2.d) What is your marital status?\n    3. Intoxications:\n      3.a) Do you smoke?\n      3.b) Do you drink alcohol?</pre>\n    </div>"
  },
  "url": "http://none.hl7.org/fhir/Questionnaire/f201/xxx",
  "status": "active",
  "subjectType": [
    "Patient"
  ],
  "date": "2010",
  "code": [
    {
      "system": "http://none.example.org/system/code/lifelines/nl",
      "code": "VL 1-1, 18-65_1.2.2",
      "display": "Lifelines Questionnaire 1 part 1"
    }
  ],
  "item": [
    {
      "linkId": "1",
      "text": "Do you have allergies?",
      "type": "boolean"
    },
    {
      "linkId": "2",
      "text": "General questions",
      "type": "group",
      "item": [
        {
          "linkId": "2.1",
          "text": "What is your gender?",
          "type": "string"
        },
        {
          "linkId": "2.2",
          "text": "What is your date of birth?",
          "type": "date"
        },
        {
          "linkId": "2.3",
          "text": "What is your country of birth?",
          "type": "string"
        },
        {
          "linkId": "2.4",
          "text": "What is your marital status?",
          "type": "string"
        }
      ]
    },
    {
      "linkId": "3",
      "text": "Intoxications",
      "type": "group",
      "item": [
        {
          "linkId": "3.1",
          "text": "Do you smoke?",
          "type": "boolean"
        },
        {
          "linkId": "3.2",
          "text": "Do you drink alchohol?",
          "type": "boolean"
        }
      ]
    }
  ]
}

QResponse = {
  "resourceType": "QuestionnaireResponse",
  "text": {
    "status": "generated",
    "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n      <pre>\n            Comorbidity? YES\n              Cardial Comorbidity? YES\n                Angina? YES\n                MI? NO\n              Vascular Comorbidity?\n                (no answers)\n              ...\n            Histopathology\n              Abdominal\n                pT category: 1a\n              ...\n          </pre>\n    </div>"
  },
  "identifier": {
    "system": "http://example.org/fhir/NamingSystem/questionnaire-ids",
    "value": "Q12349876"
  },
  "status": "completed",
  "encounter": {
    "reference": "Encounter/example"
  },
  "item": [
    {
      "item": [
        {
          "answer": [
            {
              "valueCoding": {
                "system": "http://cancer.questionnaire.org/system/code/yesno",
                "code": "1",
                "display": "Yes"
              },
              "item": [
                {
                  "item": [
                    {
                      "answer": [
                        {
                          "valueCoding": {
                            "system": "http://cancer.questionnaire.org/system/code/yesno",
                            "code": "1"
                          }
                        }
                      ]
                    },
                    {
                      "answer": [
                        {
                          "valueCoding": {
                            "system": "http://cancer.questionnaire.org/system/code/yesno",
                            "code": "1"
                          }
                        }
                      ]
                    },
                    {
                      "answer": [
                        {
                          "valueCoding": {
                            "system": "http://cancer.questionnaire.org/system/code/yesno",
                            "code": "0"
                          }
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}

module HealthQuest
  class PGDService < HealthQuest::SessionService
    class << self
      attr_accessor :usr
    end
    attr_accessor :rec

    def get_header()
      headers
    end

    def without_client2
      url = "https://vagovtest.mapsandbox.net/smart-pgd-fhir/v1/Questionnaire"
      req = Net::HTTP::Get.new(uri)
      req['some_header'] = "some_val"

      res = Net::HTTP.start(uri.hostname, uri.port) {|http|
        http.request(req)
      }
    end

    def without_client
      params = {':_id' => "200f373a-65b0-48e0-9b84-98e1ad495e6d"}
      # params = {}
      url = "https://vagovtest.mapsandbox.net/smart-pgd-fhir/v1/Questionnaire"
      url2 = "/vagovtest.mapsandbox.net/smart-pgd-fhir/v1/Questionnaire/_id?200f373a-65b0-48e0-9b84-98e1ad495e6d"
      response = perform(:get, url, params, headers, timeout: 55)
      puts response.body.inspect[0..300]
    end

    def self.without_client
      @usr = FactoryBot.create :user, :health_quest
      @svc = self.new(@usr)
      @svc.without_client
    end

    def self.create_patient
      FHIR::Patient.create(name: {given: 'John', family: 'Doe'})
    end

    def self.create_questionnaire
      id = LifelinesQuestion['id']
      FHIR::Model.client = @client
      FHIR::Questionnaire.read(id)
    end

    def self.create_questionnaire
      FHIR::Model.client = @client
      FHIR::Questionnaire.new(LifelinesQuestion)
    end

    def self.create_quest_resp
      FHIR::Model.client = @client
      @rec = FHIR::QuestionnaireResponse.create(QResponse)
    end

    def self.get_quest
      id = "200f373a-65b0-48e0-9b84-98e1ad495e6d"
      FHIR::Model.client = @client
      puts '=============================='
      puts '=============================='
      begin
      FHIR::Questionnaire.read(id)
      rescue Exception => e 
        puts e.backtrace[0..40].join("\n")
        puts "ERR:#{e.message}"
      end
    end

    def self.init_pgd
      @usr = FactoryBot.create :user, :health_quest
      @svc = self.new(@usr)
      @hdr = @svc.get_header
      @url = 'https://vagovtest.mapsandbox.net/smart-pgd-fhir/v1'
      # @url = 'https://vagovtest.mapsandbox.net'
      @client = FHIR::Client.new(@url)
      @hdr['Accept'] = "application/json+fhir"
      @client.additional_headers = @hdr
      @client.use_r4
      #puts 'GET VERS'
      #puts "\n\n ====================== \n\n"
      # vers = @client.detect_version
      # puts "VER:" + vers.inspect
      FHIR::Model.client = @client
      puts '======HDR========='
      puts @hdr.inspect
    end  

  end
end

```
  
</details>  


<details>
  <summary>Modified UserSession module</summary>

```

# frozen_string_literal: true

Faraday::Middleware.register_middleware health_quest_logging: HealthQuest::Middleware::HealthQuestLogging

module HealthQuest
  class UserService < HealthQuest::BaseService
    def session(user)
      #cached = cached_by_account_uuid(user.account_uuid)
      #return cached.token if cached

      new_session_token(user)
    end

    def extend_session(account_uuid)
      unless session_creation_locked?(account_uuid)
        lock_session_creation(account_uuid)
        HealthQuest::ExtendSessionJob.perform_async(account_uuid)
      end
    end

    def update_session_token(account_uuid)
      cached = cached_by_account_uuid(account_uuid)
      if cached
        url = '/users/v2/session/jwts'
        response = perform(:get, url, nil, refresh_headers(account_uuid))
        new_token = response.body[:jws]
        Rails.logger.info('HealthQuest session updated',
                          {
                            account_uuid: account_uuid,
                            new_jti: decoded_token(new_token)['jti'],
                            active_jti: decoded_token(cached.token)['jti']
                          })
        save_session!(account_uuid, new_token)
      else
        Rails.logger.warn('HealthQuest no session to update', account_uuid: account_uuid)
      end
    rescue => e
      Rails.logger.error('HealthQuest session update failed', { account_uuid: account_uuid, error: e.message })
      raise e
    end

    private

    def cached_by_account_uuid(account_uuid)
      SessionStore.find(account_uuid)
    end

    def redis_session_lock
      @redis ||= Redis::Namespace.new(REDIS_CONFIG[:va_mobile_session_refresh_lock][:namespace], redis: Redis.current)
    end

    def lock_session_creation(account_uuid)
      redis_session_lock.set(account_uuid, 1)
      redis_session_lock.expire(account_uuid, REDIS_CONFIG[:va_mobile_session_refresh_lock][:each_ttl])
    end

    def session_creation_locked?(account_uuid)
      !redis_session_lock.get(account_uuid).nil?
    end

    def save_session!(account_uuid, token)
      session_store = SessionStore.new(
        account_uuid: account_uuid,
        token: token,
        unix_created_at: Time.now.utc.to_i
      )
      session_store.save
      session_store.expire(ttl_duration_from_token(token))
      token
    end

    def new_session_token(user)
      url = 'https://vagovtest.mapsandbox.net/users/v2/session?processRules=true'
      token = HealthQuest::JwtWrapper.new(user).token
      response = perform(:post, url, token, headers)
      # rubocop:disable Layout/LineLength
      raise Common::Exceptions::BackendServiceException.new('HealthQuest_502', source: self.class) unless body?(response)

      # rubocop:enable Layout/LineLength
      # Rails.logger.info('HealthQuest session created',
      #                  { account_uuid: user.account_uuid, jti: decoded_token(token)['jti'] })

      # lock_session_creation(user.account_uuid)
      # save_session!(user.account_uuid, response.body)
      response.body
    end

    def headers
      { 'Accept' => 'text/plain', 'Content-Type' => 'text/plain', 'Referer' => referrer }
    end

    def refresh_headers(account_uuid)
      {
        'Referer' => referrer,
        'X-VAMF-JWT' => cached_by_account_uuid(account_uuid).token,
        'X-Request-ID' => RequestStore.store['request_id']
      }
    end

    def ttl_duration_from_token(token)
      # token expiry with 5 second buffer
      Time.at(decoded_token(token)['exp']).utc.to_i - Time.now.utc.to_i - 5
    end

    def decoded_token(token)
      ::JWT.decode(token, nil, false).first
    end

    def body?(response)
      response&.body && response.body.present?
    end
  end
end
```
</details>

## Basic setup

Create a set of local keys as described here [sandbox access](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/questionnaire/discovery/engineering/connecting%20to%20PGD%20sandbox.md) and set the settings.yml as described

in modules/health_quest/app/services/health_quest/jwt_wrapper.rb set ISS ISS = 'gov.va.clipboard'

add to Gemfile:
```
gem 'fhir_client'
```

The userService module has caching removed to work with the console.
copy the userService module code from above to replace the current one at:
```
modules/health_quest/app/services/health_quest/user_service.rb
```

## PGD Sandbox

copy the PGDService module code from above to:
```
modules/health_quest/app/services/health_quest/pgd_service.rb
```

in the Rails console this command will set up the fhir client to connect with the PGD sandbox with the proper headers:
```
HealthQuest::PGDService.init_pgd
```
After running the above command, this command will then read the questionnaire from the sandbox:
```
HealthQuest::PGDService.get_quest
```

---

## Cerner Sandbox

<details>
  <summary>CernerService module</summary>
  
```
  
module HealthQuest
  class CernerService < HealthQuest::SessionService

    def self.print_patient
       puts @patient['name'].inspect
       puts @patient['resourceType']
       puts @patient['gender']
       puts @patient['address'].inspect
    end

    def self.init
      url = "https://fhir-open.cerner.com/r4/ec2458f2-1e24-41c8-b71b-0e701af7583d"
      @client = FHIR::Client.new(url)
      @client.additional_headers = {Accept: "application/json+fhir"}
      FHIR::Model.client = @client
    end

    def self.get_patient(id=nil)
      pid = id || '12507979'
      puts 'GET'
      @patient = FHIR::Patient.read(pid).to_hash
      puts 'GOT'
      print_patient
    end

    def self.patient_search(params)
       puts 'params:' + params.inspect
       # reply = @client.search(FHIR::Patient, search: {parameters: {family: 'Smith'}})
       reply = @client.search(FHIR::Patient, search: {parameters: params})
       rec = JSON.parse reply.to_hash['response'][:body]
       resource = rec['entry'].first
       puts resource['fullUrl']
       puts 'total results:' + rec['entry'].count.to_s
       @patient = resource['resource']
       puts 'displaying first result'
       print_patient 
    end

    def self.get_bundle
      reply = @client.read_feed(FHIR::Patient) # fetch Bundle of Patients
      bundle = reply.resource
      bundle.entry.each do |entry|
        patient = entry.resource
        puts patient.name[0].text
      end
      puts reply.code # HTTP 200 (or whatever was returned)
      puts reply.body # Raw XML or JSON
    end  
  end
end
    
```  
</details>  

Copy the CernerService module code from above to
```
modules/health_quest/app/services/health_quest/cerner_service.rb
```

in the Rails console:

```
HealthQuest::CernerService.init
```

After initializing the service as above then these commands will work

```
HealthQuest::CernerService.get_patient('12507979')
```

```
HealthQuest::CernerService.patient_search({family: 'Smith'})
```








