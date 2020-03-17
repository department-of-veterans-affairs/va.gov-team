# Address validation production testing 

## Testing volunteers

- Erik
- Samara
- Rian Fowler
- Anna Carey
- Keifer Furzland

## Script

1. Sign into VA.gov and go to https://www.va.gov/profile/
1. Update your address using your real address (ie, just re-save the data that's already on file if you already have an address on file). The modal should close and the address should save after a few seconds.
1. Update your address using your real address _but intentionally get the zip code wrong_. You should see a modal giving you the option to choose your address with the zip code corrected. You should also have the option to choose the address as you entered it, with the incorrect zip code. Pick either one and it should save after a few seconds.
1. Update your address using a totally fake address, using something like `123 not a real street`. You should again see a modal saying we couldn't verify the address. You should have the option to select the address as you entered it. Select it and save it. It should save after a few seconds.
1. Finally, and most importantly, update your address to your correct address again so you don't have the wrong address on file with the VA.

If you run into problems or see errors of any kind we'd love to do a screen share with you to try to diagnose the problem.
