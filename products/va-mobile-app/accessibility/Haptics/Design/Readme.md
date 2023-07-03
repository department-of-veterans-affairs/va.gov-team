Haptics in the VA Health and Benefits App only works if the Veteran's device haptic setting is enabled.

**Logic**

  * This app, in the long term, prefers to use device settings to enable vs. having to create it's own on/off toggle within the app.  
     * Follows the same pattern established by dark mode (and less like notifications) 
     * Team decided to treat haptics like dark mode now vs. having to change it later 
        * Saves dev work/effort both now and later 
  * Haptics will be tied to the component level 
  
**Things to keep in mind**

  * Not all devices support haptics
  * Not all device operating systems support haptics 
  * Each device and operating system have their own location and verbiage for haptic settings 
  * Not all operating systems support the same haptic patterns - thus used 3 pattern instead of 4 
     * Currently our own library also has limitations as it does not support 4 pattern 
  
**Haptic settings currently in use:**
 
|   Component      |      When haptics occurs  |     Haptic Pattern |
|-----------------|--------------------------|---------------------| 
|   Snack Bar         |   Appearance           |     3 pattern |
|   Toggle            |   Interaction          |     Heavy toggle 
|   Error Alert Box   |   Appearance           |     3 pattern |
|   Warning Alert Box |   Appearance           |     3 pattern |

**Risks**

  * Veteran cannot turn haptics on and off within the app
  * Limited insight into haptic engagement given we do not have our own setting 
  * No proactive awareness outside of "Whats New" in the app store, which may catch the Veteran off guard
