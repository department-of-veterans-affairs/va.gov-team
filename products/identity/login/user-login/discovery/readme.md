# Discovery

* Current work is in this folder
* [pre-PI7 archive]()

### [Data needed to make design decisions]()


### Questions
1. General question - we'll be making some changes to the sign up/in flows - possibly removing functionality. 
    * How do we explain the changes to users?
    * Can we send emails (presuming we have email addresses) to affected users? Or to all of them if we can't identify affected users? 
    * Who has the email addresses? How do we get them? How would we send emails out?

2. If we removed Google, Facebook, and/or LinkedIn as methods for sign in and sign up, what happens to people who already signed up using those methods? 
    * Can they still sign in? If so, how?
    * Do they have a Vets.gov password so that they can sign in with email+password? 
    * If not, how would we transition these users to email+password? Can something be done on the back-end? Or would a transition need to happen via user action (prompted maybe by an email to them)?
    
3. If we removed ID.me mobile wallet, Code Generator, and/or Ubikey as options for 2FA, are there any impacts on people who've previously used these methods?
    * Similar questions about how we notify people about the impact to them.
    
4. Risk/Liability/Legal issues related to removing id.me precense for a subset of our users (people who sign with mhv or ds logon credentials)
    * We could update vets.gov [privacy policy](https://www.vets.gov/privacy/) to include information about handling pii and sensitive financial information in the 2FA and identity proofing process. For reference, id.me [privacy](https://www.id.me/privacy) and [terms](https://www.id.me/terms).
    * Question: if we point people to a Vets.gov (or VA) privacy policy, Vets.gov (or VA) assumes risk/liability for user data. But really id.me is still handling the data. Is Vets.gov/VA comfortable with assuming risk/liability for a 3rd party's work? If not, how can we communicate to users that the overall process is Vets.gov/VA with specific parts being id.me? E.g., "VA uses id.me to check your credit history." 
    * others ?
    
5. Customer service
    * How do people change their 2FA phone number? Short term - call the help desk. Longer term - what does a white labeled self-service option look like?
