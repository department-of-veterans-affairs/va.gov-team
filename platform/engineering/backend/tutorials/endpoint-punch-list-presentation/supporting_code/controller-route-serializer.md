----

# We're moving our docs! 
### Find [the latest version of this page](https://vfs.atlassian.net/wiki/spaces/pilot/pages/1886814232/Controller+Route+Serializer) on the Platform website.

### Still can't find what you're looking for? Reach out to [#vfs-platform-support](https://dsva.slack.com/archives/CBU0KDSB1) on Slack.

----


## vets-api/app/controllers/v0/profile/emails_controller.rb
````ruby
module V0
  module Profile
    class EmailsController < ApplicationController
      before_action { authorize :evss, :access? }

      # Fetches the email address, and its effective datetime, for the current user
      #
      # @return [Response] Sample response.body:
      #   {
      #     "data" =>
      #       {
      #         "id" => "",
      #         "type" => "evss_pciu_email_address_responses",
      #         "attributes" =>
      #           {
      #             "email" => "test2@test1.net",
      #             "effective_at" => "2018-02-27T14:41:32.283Z"
      #           }
      #       }
      #   }
      #
      def show
        response = service.get_email_address

        render json: response, serializer: EmailSerializer
      end

      private

      def service
        EVSS::PCIU::Service.new @current_user
      end
    end
  end
end
````


## vets-api/app/serializers/email_serializer.rb
````ruby
class EmailSerializer < ActiveModel::Serializer
  attribute :email
  attribute :effective_at

  def id
    nil
  end

  # Returns the email address nested in the given object.
  #
  # @return [String] Email address.  Sample `object.email_address`:
  #   {
  #     "effective_date" => "2018-02-27T14:41:32.283Z",
  #     "value" => "test2@test1.net"
  #   }
  #
  def email
    object&.email_address&.dig 'value'
  end

  # Returns the email's effective datetime nested in the given object
  #
  # @return [String] Effective datetime in the yyyy-MM-dd'T'HH:mm:ss format.
  #   Sample `object.email_address`:
  #     {
  #       "effective_date" => "2018-02-27T14:41:32.283Z",
  #       "value" => "test2@test1.net"
  #     }
  #
  def effective_at
    object&.email_address&.dig 'effective_date'
  end
end
````


## vets-api/config/routes.rb
````ruby
...
  namespace :v0, defaults: { format: 'json' } do
    namespace :profile do
      resource :email, only: :show
    end
  end
...
````
