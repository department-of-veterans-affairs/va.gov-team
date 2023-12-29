# Vet Centers Engineering README

## Vet Center data
Managed in () by ()

## Vet Center notifications
As of October 2023, email notifications are sent to Editors monthly on the first of the month, for any content that has not been updated in 365 days.
Epic that implemented notifications: https://github.com/department-of-veterans-affairs/va.gov-cms/issues/14694

## Monitoring 
None

## Vet Center "Nearby locations"
On Vet Center Location pages, "Nearby locations" are built dynamically. 

After https://github.com/department-of-veterans-affairs/va.gov-cms/issues/11789:
Vet Center "Other nearby Vet Centers" displays up to 5 Vet Centers or Vet Center Outstations within 120 miles as default
Vet Center "Other nearby Vet Centers" displays up to 5 Vet Centers or Vet Center Outstations within 120 miles birds-eye-view as fallback
If no locations are within 120 miles birds-eye-view, remove the header "Other nearby Vet Centers"