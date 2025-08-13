# [Design Review a11y findings]: Appointments FE
[Prototype link](https://www.figma.com/file/RcDljBwThbwVDkNrDH2xiA/Appointment-Details-Redesign?type=design&node-id=1212%3A35309&mode=design&t=A73tfhxBshtTEvXo-1) <br>
[DSVA slack channel for contacting product team](https://dsva.slack.com/archives/CMNQT72LX)  <br>

## Product team
OCTO-DE product owner: Katherine Lawyer <br>
Product manager: Jeff Roof and Leah De La Costa <br>
Designer: Peter Russo, Ciera Maddox and Melissa Lefevre  <br>

## Auditor(s): Kate Murphy

## Testing Coverage:
### Manual
 * [x] Color contrast checks (recommend using whocanuse.com for beyond compliance reports)
 * [x] Color blindness checks
 * [x] Buttons vs links
 * [x] Cognitive flow
 * [x] Design consistency across screens
 
### Screen Reader
 * [x] Behavior & navigation advice

## Findings
_All findings given in comments directly on Figma file, this is a high level summary._

• Add 'state' for all H1's (Confirmed, Upcoming, Past, Cancelled) <br>
• Review coupled links in status <br>
      • Adjust placements, and language <br>
      • persist consistently across all similar screens <br>
• Add H2 'Appointment details' this will help with rotary navigation, and solve some button junk drawer challenges <br>
      • move print button near 'Appointment details' heading <br>
• Links vs buttons -- Since adding to calendar, getting directions or printing are all actions that first open (go) to another app we recommend making all consistent with icon and link. <br>
      • Note: we understand print and calendar have known behavior as buttons in many UI and are OK left as is or adapting for visual hierarchy if you decide to adjust the layout with H2. <br>
• Rotary navigation considerations -- when looking at any 'action' review the design to find the previous heading and ask if this is where you would think to find that action <br>
      • example: currently print is housed under 'need to make any changes?' on video appointments <br>
• consider at what point the add-to-calendar functionality is unnecessary <br>
