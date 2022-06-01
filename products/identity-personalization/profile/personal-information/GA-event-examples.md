# Events send to Google Analytics for personal information

- Preferred name edit initiated when no name present
```
event:  profile-navigation
profile-action: add-link
profile-section: preferred-name
```

- Preferred name editing cancelled
```
event:  profile-navigation
profile-action: cancel-button
profile-section: preferred-name
```

- Preferred name update api_call failed 403

**event:** api_call
**api-name:** PUT /profile/preferred_names
**api-status:** failed
**error-key:** preferred-name-403-Forbidden-Forbidden

- Gender Identity edit initiated
   
   **event:**  profile-navigation
   **profile-action:** edit-link
   **profile-section:** gender-identity
 
- Gender Identity edit cancelled
   
   **event:**  profile-navigation
   **profile-action:** cancel-button
   **profile-section:** gender-identity

- Gender identity update api_call failed 403

**event:** api_call
**api-name:** PUT /profile/gender_identities
**api-status:** failed
**error-key:** gender-identity-403-Forbidden-Forbidden

- Gender identity additional info expanded

**event:** int-additional-info-expand
**event-source:** component-library
**additional-info-triggerText:** What to know before you decide to share your gender identity

- Gender identity additional info collapsed

**event:** int-additional-info-collapse
**event-source:** component-library
**additional-info-triggerText:** What to know before you decide to share your gender identity
