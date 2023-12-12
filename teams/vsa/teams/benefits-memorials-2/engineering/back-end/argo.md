### Argo

To access the Argo CD dashboard for deployment management:

- URL: [https://argocd.vfs.va.gov/login](https://argocd.vfs.va.gov/login%5C%60 "https://argocd.vfs.va.gov/login%5C%60")

#### Select the node

Find a vets-api-website node and enter the terminal with: `bundle exec rails c` Once logged into the Rails console on the appropriate node, use the following commands to interact with in-progress forms:

#### Sample Console Commands

_To get the last form entry for form number '5655':_

`InProgressForm.for_form('5655').last`

_To access the metadata for the last in-progress form:_

`InProgressForm.for_form('5655').last.metadata`

### Rails Console Commands

- The `in_progress_form.rb` file is where the `InProgressForm` ActiveRecord model is defined.
- The `db/schema.rb` file contains the schema definition for your database, including the `uuid` as a transaction ID.

### Code Snippet for Processing Form Submissions

_Warning - Don't mess with this unless you need to modify production data_ Example Ruby script to iterate over `Form5655Submission` records, updating the `public_metadata` for each submission that has a 'streamlined' form:

```
DebtsApi::V0::Form5655Submission.find_each(batch_size: 300).with_index do |sub, index|
  begin
    form = sub.form
    if form['streamlined']
      puts "#{index}/#{total}" # Note: Ensure 'total' is defined as the total number of submissions.
      metadata = sub.public_metadata
      metadata['streamlined'] = form['streamlined']
      sub.update!(public_metadata: metadata)
    end
  rescue => e # It's a good practice to specify what you're rescuing from, e.g., StandardError
    trouble << sub.id # Ensure 'trouble' is initialized before this block.
    puts "Error processing submission #{sub.id}: #{e.message}"
  end
end
```

### Additional Resources

For more information on querying with Active Record, refer to the following guide:

- - Rails Active Record Querying Guide: [https://guides.rubyonrails.](https://guides.rubyonrails.org/active%5C_record%5C_querying.html "https://guides.rubyonrails.org/active%5C_record%5C_querying.html")


