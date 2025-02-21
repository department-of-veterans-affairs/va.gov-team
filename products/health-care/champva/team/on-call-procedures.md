# Commands for the rails console on Argo

1. On the VA network login to: argocd.vfs.va.gov/applications/vets-api-prod?resources
2. Find a pod that starts with `vets-api-web` and click on it
3. Choose terminal
4. From here, you can use the below commands:
    - To log in to the rails console: `bundle exec rails console`
    - To find a user by uuid: `IvcChampvaForm.where(form_uuid: 'xyz').where(pega_status: nil)`

## To check for submissions with missing PEGA status in Rails console: 
```ruby
def get_statuses
    all_nil_statuses = IvcChampvaForm.where(pega_status: nil)

    batches = {}

    # Group all nil results into batches by form UUID
    all_nil_statuses.map {|el| 
        batch = IvcChampvaForm.where(form_uuid: el.form_uuid)
        batches[el.form_uuid] = batch
    }

    # Print out details of each batch that contains a missing PEGA status:
    batches.each {|batch_id, batch|
        nil_in_batch = batch.where(pega_status: nil)
        el = nil_in_batch[0]
        puts "---"
        puts "#{el.first_name} #{el.last_name} missing PEGA status on #{nil_in_batch.length}/#{batch.length} attachments - #{el.email}\n"
        puts "Form UUID:   #{el.form_uuid}"
        puts "Uploaded at: #{el.created_at}"
        puts "S3 Status:   #{nil_in_batch.distinct.pluck(:s3_status)}\n"
    }
    true
end

get_statuses
```

## To clear a missing status:
```ruby
form = IvcChampvaForm.find("form_id")
form.update(pega_status: "Manually Processed")
form.save
```
