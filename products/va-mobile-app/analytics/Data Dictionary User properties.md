**This documentation is in progress. This note will be removed when the initial build out is complete.**

|User properties|definition|Values|
|---|----------|----|
|appeals|The set of users authorized to access appeals|false,true|
|appointments|The set of users authorized to access appointments|false,true|
|claims|The set of users authorized to access claims|true,false|
|directDepositBenefits|The set of users authorized to access direct deposit benefits|false,true|
|lettersAndDocuments|The set of users authorized to access letters and documents services|true,false|
|militaryServiceHistory|The set of users authorized to access military service history|true,false|
|prescriptions|The set of users authorized to access prescriptions.|true,false|
|scheduleAppointments|*tba*|false,true|
|secureMessaging|The set of users authorized to access secure messaging|false,true|
|userProfileUpdate|The set of users authorized to update their profiles|false,true|
|vama_biometric_device|The set of users who have a device that would allow them to use biometric sign in if they enable it|false,true|
|vama_environment|The environment of the user. E.g. Production|production|
|vama_uses_appointments|The set of users who have ever triggered a GET Appointment call to view upcoming or past appointment details for a specific appointment|true|
|vama_uses_biometric|User who currently have biometric sign-in enabled|true,false|
|vama_uses_cap|The set of users who have ever triggered a GET Claim or GET Appeal call to view open or closed claims or appeals details for a specific C/A|true|
|vama_uses_large_text|User's font scale is above 1.0|true,false|
|vama_uses_letters|The set of users who have ever triggered a POST Download Letters call to download a letter|true|
|vama_uses_profile|The set of users who have ever triggered an API call to update direct deposit, update phone number, update email, or update address in Profile|true|
|vama_uses_rx|*tba*|true|
|vama_uses_screen_reader|User uses a screen reader|true,false|
|vama_uses_sm|The set of users who have ever triggered an API call to read an SM, save draft, or send message|true|
|vama_uses_vcl|The set of users who have ever clicked Call, Text, Chat, TTY, or URL from the in-app VCL landing page|true|
