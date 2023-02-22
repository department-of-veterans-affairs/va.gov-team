# INSTRUCTIONS FOR DOING A JSON COMPARISON OF LOCALE FILES

## PYTHON SCRIPT TO DO COMPARISON
- [Python Script](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/translations/json-compare/JsonDiff.py)
  - Dependencies
    - You will need to have Python installed
    - You will need to have these packages installed
        - json
        - re
        - easygui    

## STEP-BY-STEP INSTRUCTIONS
- Set up the Python script
    - Download the Python script above to your desktop
    - Install Python (see https://www.python.org/downloads/)
    - Install the needed packages using Pip (see https://www.w3schools.com/python/python_pip.asp)    
- Retrieve the locale files from the GitHub Main branch
    - Open the [English locale json file](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/check-in/locales/en/translation.json) from the Main GitHub branch
    - Click the 'Copy raw contents' icon and paste it into a new text file labelled "English.json"
    - Open the [Spanish locale json file](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/check-in/locales/es/translation.json) from the Main GitHub branch
    - Click the 'Copy raw contents' icon and paste it into a new text file labelled "Spanish.json"
    - Open the [Tagalog locale json file](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/check-in/locales/tl/translation.json) from the Main GitHub branch
    - Click the 'Copy raw contents' icon and paste it into a new text file labelled "Tagalog.json"
    - NOTE: you can also clone the branch to get the files if you are so inclined; I couldn't find an easy way to download just the json files but if anyone knows a way please let me know
- Generate the files that list the English content for which we need to have translations
  - Run the Python Script
  - Choose (from your desktop) the English.json file 
  - Choose (from your desktop) the Spanish.json file
  - Enter a name for the output file (e.g. SpanishTranslationsNeeded) [NOTE: .json will get appended automatically)
  - Run the Python Script a second time
  - Choose (from your desktop) the English.json file 
  - Choose (from your desktop) the Tagalog.json file
  - Enter a name for the output file (e.g. TagalogTranslationsNeeded) [NOTE: .json will get appended automatically)
  - Review the 2 files you generated for any keys that may be obsolete or incorrect
- Forward the 2 files that you generated to Danielle Thierry and let her know that we need this content translated; better to give her a "date needed"

## DEMO VIDEO 
