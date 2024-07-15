# In progress form status stuffs
As written by a FE explorer

## Purpose
The goal here is to get a list of all the in progress forms stripped down to some specific (non-pii) subset of properties so we can copy the values out of the production terminal and into a more managable system so we can analyze the data for future solutions. 

## Notes
 - rails as written by an FE engineer with limited experience, lots of info sourced from [Active Record Querying](https://guides.rubyonrails.org/active_record_querying.html).
 - To the newcomers: `form_hash = {` is just that, a hash. So accessing the values within takes a different syntax
 - Good luck! :D 

## Script!
```
### Good vibes v6.87
### form_hash props and thier desires: 
### id - incremental index, just used to help filter/print
### form_id - 5565 (just in case)
### user - uuid for troubleshooting/analysis
### created_at
### updated_at
### expires_at
### return_url - should help identify drop off
### submission_status -  false, and "applicationSubmitted" are options I think
### error_message - populated by backend iirc
### has_attempted_submit
### enhanced - feature flag status
### streamlined - feature flag status
### asset - feature flag status

### pre/post 60 days since creation
pre_sixty = []
post_sixty = []
### total in progress forms (should hopefully not include submitted stuffs)
total = InProgressForm.for_form('5655').length
InProgressForm.for_form('5655').order(:created_at).find_each(batch_size: 500).with_index do |form, index|
  puts "#{index}/#{total}: #{form.created_at}"
  data = JSON.parse(form.form_data)
  form_hash = {id: index,   form_id: form.id,   user: form.user_uuid,   created_at: form.created_at,   updated_at: form.updated_at,   expires_at: form.expires_at,   return_url: form.metadata["return_url"],   submission_status: form.metadata["submission"]["status"],   error_message: form.metadata["submission"]["error_message"],   has_attempted_submit: form.metadata["submission"]["has_attempted_submit"],   enhanced: data["view:enhanced_financial_status_report"],   streamlined: data["view:streamlined_waiver"],   asset: data["view:streamlined_waiver_asset_update"]}

  if form.created_at < DateTime.new(2023, 10, 12, 20)
    pre_sixty << form_hash
  else
    post_sixty << form_hash
  end
end

### just for fun
pre_sixty.length
post_sixty.length

### gotta find the sweetspot in this batch size to copy out of the terminal
### max line is 1043, but each hash prints out with props on separate lines
start_id = 0
end_id = 100

filtered_values = pre_sixty.select do |hash|
  (start_id..end_id).include?(hash[:id])
end

### After this we can just print filtered_values, copy out, and then increment start/end ids for the next batch
```
