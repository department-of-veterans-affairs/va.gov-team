# CHAMPVA Claims Service Blueprint Meeting 

3/5/25

**Attendees:** Andrea Merrill, Angela Cranmore, Angela Pinon, Elizabeth Lightfritz, Elizabeth Sauer, Jamie Fiore, Kaoni Escobido, Melissa Johnson, Mike M., Prema Shah, Rachel Pope, Renata Keck

### Mailed-in claims
- Effective December, all claims are mailed to CIPM and scanned into PEGA
    - Currently claims are being held and not scanned because of a file type issue
- Nothing mailed to DCDM (remove from blueprint)
- No PDI sheets any longer - remove entire flow from blueprint
- Sunsetting DAPER
    - Still used for some form types
    - Will be gone by end of year
 
### Processing Claims
- BCPU dashboard is in PEGA now, and worked in PEGA
    - The BCPU process on the blueprint should be removed
- Claims Examiner reviews claims, not PA
- Shelf batches no longer exist - remove from blueprint
- There is just one workflow and that is in PEGA.
    - Doesn’t matter if it’s telework, or where anyone is working, all work is done in PEGA
    - All other workflows can be removed

### Verification
- May partially process a claim and send a letter for what’s missing
- Verify address
    - If the address matches, process the claim
    - If not, set aside until Eligibility updates the address
- Check for OHI coverage
    - Use CXM, but might not match OHI
    - VOIS is used as a secondary option to match OHI
- Bene batch assignment is still used for OHI and address updates

### Processed Claims
- All Claims are processed in CXM (can remove Vista from blueprint)
- Enter claim number is PEGA (not Vista)
- Some people still use the spreadsheet, but it’s not needed. 
    - Once PEGA is fully in place, this will no longer exist
- Nightly batches to FMS to print checks
    - Checks are mailed from FMS
    - DCDM not involved

### Letters
- Sendbacks generated in a word doc and uploaded to box.com
    - Reviewed by lead or supervisor
    - Set to ready to print
    - GPO pulls, prints, and mails

### Resubmits
- Question about whether the resubmitted claim is attached to the original claim
    - Not online, would be a new claim
    - No process to marry resubmits to originals
    - Can be a longer discussion at another time
