# Mobile Plays
As we tackle issues and gain firefighting experience as team, we will undoubtably encounter repeats of similar issues. This section is an attempt to document plays containg steps or tips to fix those recurring issues.

Having an existing play does not abdicate you of your responsibility to follow the playbook and alert the proper people. But it should serve as a guide to help you more quickly resolve recurring problems.

## SSOe OAuth
SSOe OAuth issues are a fairly common occurrence. They usually manifest themselves by one or more credential types not being able to sign in.

<table>
  <tr aligh="left">
    <th>Manifestation</th>
    <td>Problems usually manifest themselves by one or more credential types not being able to sign in.</td>
  </tr>
  <tr align="left">
    <th>Detection</th>
    <td>
      You may detect the problem in one of many ways, including (but not limited to)...
      <ul>
        <li/>getting notified in the #va-mobile-app-alerts channel on Slack
        <li/>seeing a lack of authentications for one or more credentials in our logs / monitoring software
        <li/>receiving a notice that users are having trouble signing in
        <li/>reading bad reviews on the app stores
      </ul>
    </td>
  </tr>
  <tr align="left">
    <th>Correction</th>
    <td>
      <ol>
        <li/>Check the #vsp-identity slack to see if there are widespread or known issues. If so, alert the Product Owner and 
        continue to monitor the situation.
        <li/>If the problem is not widespread, alert the Product Owner and begin your investigation.
        <li/>Have we changed anything lately that would impact logging in? Since we use SSOe OAuth, the answer is usually no. But perhaps
        we made some backend changes we should investigate.
        <li/>At the point we've determined we've not made any changes that would impact login, alert the IAM architects: Damien DeAntonio and 
        Perry Vessels. They are both reachable via Slack. They will often request you create a ticket in YourIT. You can do that, or ask the
        government to do it on your behalf. That ticket should get routed to IO.TPS.IAM.Data Quality Team.
        <li/>Follow up. The IAM team has a lot on their plate, so make sure <i>you</i> champion our cause.
        <li/>If the problem turns out to be something wider-spread, like a VA DNS issue, alert Boris Ning or Thomas Delrue. They will help 
        you work with Gateway Ops to resolve the problem.
      </ol>
    </td>
  </tr>
</table>

## DNS
Though rare, we do encounter DNS issues from time to time. They manifest in many different ways that are almost impossible to 
predict. But when it's DNS, you'll know it.

<table>
  <tr align="left">
    <th>Manifestation</th>
    <td>Almost impossible to predict. You'll know, usually when all else fails to fix the problem. Often DNS issues impact a much
    wider audience than just our app. In those cases, you'll see complaints appear in multiple channels in Slack.</td>
  </tr>
  <tr align="left">
    <th>Detection</th>
    <td>
      You may detect the problem in one of many ways, including (but not limited to)...
      <ul>
        <li/>seeing widespread access issues
        <li/>seeing problems that aren't solvable in any other ways
      </ul>
    </td>
  </tr>
  <tr align="left">
    <th>Correction</th>
    <td>
      <ol>
        <li/>Check the Slack to see if there are widespread or known issues. If so, alert the Product Owner and 
        continue to monitor the situation.
        <li/>If the problem is not widespread, alert the Product Owner and begin your investigation.
        <li/>DNS issues fall under the purview of Gateway Ops. They are a small group with a huge amount of responsibility. Because of that, it's
        best to approach them with a lot of evidence that DNS is the problem. 
        <li/>Engage Boris Ning or Thomas Delrue. Boris has empowered Dan E. Smith with the tools necessary to monitor network traffic, and 
        he's very effective. Use him and all the tools available to gather as much information as possible before going to Gateway Ops.
        <li/>It is also important to note the lack of automation in Gateway Ops. So often issues are intermittent or regionalized.
        <li/>At the point you've collected enough data, contact Gateway Ops. They are on a rotational schedule, so if you contact one of them
        directly they'll tell you to use the generic email address. That is, VANSOCOperationsGateWay@va.gov. When you create a ServiceNow 
        ticket with them, it'll need to get routed to: IO.NETWORK.NOC.TICGATEWAY.
        <li/>Derek O'Donnell from Gateway Ops is a great resource to start a Teams chat with.
        <li/>You <i>MUST</i> be proactive and continue to push DNS or other Gateway Issues forward. They will not get resolved on their own.
      </ol>
    </td>
  </tr>
</table>

# Postmortems
The following table contains postmortems created by the mobile team.
| Postmortem | About |
| ---------- | ----- |
| Name       | Text  |
