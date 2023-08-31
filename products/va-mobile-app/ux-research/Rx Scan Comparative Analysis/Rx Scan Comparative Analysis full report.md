# **Prescriptions Scan/Search comparative analysis**
#### VA Health & Benefits Mobile App | July 2023


## **Summary**

Although Scan-to-Refill is common in other popular pharmacy mobile apps it’s not clear that Scan will reduce or expedite the prescription workflows in the flagship app–given the app is authenticated and only provides mail order prescriptions. 


## **Background and assumptions**

Rx Refill enables users to Scan and Search for prescriptions. VA will soon direct these users to the VA Health & Benefits app to manage their prescriptions. The team will investigate the experience within the Rx Refill app as well as other mobile apps with Scan. This will help the team establish a baseline for other mobile apps with Scan and Search functionality. This market research is an opportunity to check some existing assumptions about Scan:  

* Assumption 1: Scan is most useful in a retail context as a way to encourage app engagement and revenue.
* Assumption 2: Scanning prescriptions is heavily relied upon in the VA prescription experience. So, the users who move from RxR will expect to find Scan in VAHB. Scan is used 5% of the time in the RxR app. 
* Assumption 3: In-app scanning acts as a micro task that’s nested within Search. Scan rarely exists without Search. 


## **Mobile apps compared**

* Looked at apps across Health, Medical and Retail
    * Health/Medical related: 
        * CVS Caremark  (Scan prescription) - had Scan
        * CVS Pharmacy (Spoken Rx) - had Scan
        * Envision ScriptTalk - had Scan
        * GoodRx - had Search
        * Hannaford Rx - had Scan
        * Leaphy - had Scan
        * MedScanner - had Scan
        * Walgreens - had Scan
        * Walmart Pharmacy - had Scan
    * Retail: 
        * Airbnb
        * Amazon
        * Best Buy
        * Dollar general
        * Lifesum
        * Noom
        * Spotify
        * Under Armour
        * Venmo
        * Walmart (Shop scanner)
        * Zara
    * General help/security
        * 1Password
        * Google Authenticator
        * Seeing AI


## **Key takeaways**

Scan for Rx… 

* Is a common feature in consumer pharmacy apps and is used mainly to refill.
* Allows users to refill without using an account for a pharmacy (e.g. you can use Walgreens unauthenticated to scan and refill a prescription as long as you have a prescription with them).
* Can provide a direct path to a specific item without signing in (e.g. locate a prescription in a long list with competing options).
    * Even if scan is available when authenticated, scrolling a list view to locate the Refill option seems like the desired action.
* Success felt intermittent (determine which barcode on a bottle to use, precisely angle the camera for it to capture)
* Can be an accessible tool to quickly gather medication details and actions they can take (add to list, refill, renew).
* Non-refill medication search was primarily text based.


## **Recommendations and next steps**

Conducting this comparative analysis answered many questions and helped us address some assumptions. The analysis also surfaced some new questions where the team may follow up at a later date. Because of this, the Scan feature may be better positioned after further analysis of higher priority, known issues that will improve medication findability within the feature. 

If the mobile team were to commit to Scan implementation, we would need to expand our discovery efforts. As part of this, some next steps might be:

* Investigate how to support VA prescription bottles with scannable code
    * Build a scanner to accept the square barcode on current VA prescriptions. Fill out the experience by providing details of what was scanned, along with quick actions to take.
    * This helps us increase engagement and leverage capabilities that are unique to mobile devices (built-in camera display).
    * If there are too many errors, Scan can become a barrier to getting the information and lower the app’s credibility.
    * See how to integrate with VA prescription bottles that have a requested RFID tag, since we were told they exist and often use ScriptTalk. (Some pharmacies can print them, but not all.)
    * Provide a way to request RFID tags for a VA prescription
* Get access to RxRefill metrics
    * Continue to surface qualitative Scan/Search metrics from Rx Refill. This helps provide insight for how many users we have the potential to leave behind when they migrate to the Prescriptions feature in the VA Health & Benefits app.

###
