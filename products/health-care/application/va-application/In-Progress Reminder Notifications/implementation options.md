**Option 1: Utilize the email found in Profile**
- Pros: handles the check on whether the Veteran is deceased and will stop sending if necessary.  Quicker to production as this is how the project is currently built out.
- Cons: might have a different emaila ddress than what is entered into the form.

**Option 2: Utilize the email found in the Form**
- Pros: it is the email the Veteran just actively entered
- Cons: doesn't allow for checking the status of the Veteran.  The email is also on the 7th page of the form.  It looks like about 4% of the users that begin the form don't make it to that page so we would not be able to capture that email.
  - we could roll back to using the Profile email in these scenarios, but that is a heavier lift.

**Option 3: Utilize both emails (Profile + Form)**
- Pros: Greater chance of reaching the user
- Cons: Risk the chance of sending duplicate notifications
  - we could attempt to de-dup the emails as not to send 2 to the same email address, but that is a heavier lift
  - additional points of contact with the Veteran about the same thing might cause frustration.

**Option 4: Profile first then Form**
- Pros: uses the email address that is prefilled into the email communication section and allows us to capture the email address of any Veteran that we don't already have one for.
- Cons: if a Profile email exists, notifications will be sent there regardless of what the Veteran enters into the Form.  Additional time to fully implement.
