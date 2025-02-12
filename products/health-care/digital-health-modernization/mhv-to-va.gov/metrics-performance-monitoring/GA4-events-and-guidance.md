# GA4 events and guidance
This guide is compiled by the Cartography Team with a focus on GA4 events that occur on the MHV landing page, but also events that are global or universal to the portal experience, such as the secondary navigation.

## Events
Event details have been gathered by use of Adswerve while signed into staging. 

<table>
  <tbody>
    <tr>
      <th>Event description</th>
      <th>Event location</th>
      <th>Adswerve output</th>
      <th>How to isolate</th>
    </tr>
    <tr>
      <td>Click subscribe button for MHV newsletter (or click **any link on the MHV landing page**)</td>
      <td>MHV landing page</td>
      <td> 
        <ul> 
          <li>en:"outbound_link" (specific to only a few links on the page)</li> 
          <li>ep.event_action:"click"</li>
          <li>ep.link_text:"subscribe to the My HealtheVet newsletter on GovDelivery.com (opens in new tab)"</li>
        </ul>
        </td> 
      <td>Filter report by page_path exactly matches regex:"/my-health|/my-health/" to capture all links on the landing page and add filter link_text contains:"subscribe" (or exactly matches whatever the link text is)</td>
    </tr>
     <tr>
      <td>Click BTSSS link to file a claim (or any links within the **Payments** card)</td>
      <td>MHV landing page</td>
      <td> 
        <ul> 
          <li>en:"link_click"</li> 
          <li>ep.dle_name:"nav-linkslist"</li>
          <li>ep.event_action:"click"</li>
          <li>ep.link_text:"Go to BTSSS to file a claim"</li>
          <li>ep.heading_1:"Payments"</li>
        </ul>
        </td> 
      <td>Filter report by page_path exactly matches regex:"/my-health|/my-health/" and heading exactly matches:"Payments" to capture all links within the Payments card. Add filter link_text contains:"BTSSS" for just this one link.</td>
    </tr>
    <tr>
      <td>Click Find VA locations within **Appointments** card</td>
      <td>MHV landing page</td>
      <td> 
        <ul> 
          <li>en:"link_click"</li> 
          <li>ep.dle_name:"nav-linkslist"</li>
          <li>ep.event_action:"click"</li>
          <li>ep.link_text:"Find VA locations"</li>
          <li>ep.link_url:"(not set)"</li>
          <li>ep.heading_1:"Appointments"</li>
        </ul>
        </td> 
      <td>Filter report by page_path exactly matches regex:"/my-health|/my-health/" and heading exactly matches:"Appointments" to capture all links within the Appointments card. Add filter link_text contains:"VA locations" for just this one link.</td>
    </tr>
      <tr>
      <td>Click Learn how to order other medical supplies within **Medical supplies** card</td>
      <td>MHV landing page</td>
      <td> 
        <ul> 
          <li>en:"link_click"</li> 
          <li>ep.dle_name:"nav-linkslist"</li>
          <li>ep.event_action:"click"</li>
          <li>ep.link_text:"Learn how to order other medical supplies"</li>
          <li>ep.link_url:"(not set)"</li>
          <li>ep.heading_1:"Medical supplies"</li>
        </ul>
        </td> 
      <td>Filter report by page_path exactly matches regex:"/my-health|/my-health/" and heading exactly matches:"Medical supplies" to capture all links within the Medical supplies card. Add filter link_text contains:"Learn how to order" for just this one link.</td>
    </tr>
     <tr>
      <td>Click Review medications within **Medications** card</td>
      <td>MHV landing page</td>
      <td> 
        <ul> 
          <li>en:"link_click"</li> 
          <li>ep.dle_name:"nav-linkslist"</li>
          <li>ep.event_action:"click"</li>
          <li>ep.link_text:"Review medications"</li>
          <li>ep.link_url:"(not set)"</li>
          <li>ep.heading_1:"Medications"</li>
        </ul>
        </td> 
      <td>Filter report by page_path exactly matches regex:"/my-health|/my-health/" and heading exactly matches:"Medications" to capture all links within the Medications card. Add filter link_text exactly matches:"Review medications" for just this one link.</td>
    </tr>
     <tr>
      <td>Click Go to inbox within **Messages** card</td>
      <td>MHV landing page</td>
      <td> 
        <ul> 
          <li>en:"link_click"</li> 
          <li>ep.dle_name:"nav-linkslist"</li>
          <li>ep.event_action:"click"</li>
          <li>ep.link_text:"Go to inbox"</li>
          <li>ep.link_url:"(not set)"</li>
          <li>ep.heading_1:"Messages"</li>
        </ul>
        </td> 
      <td>Filter report by page_path exactly matches regex:"/my-health|/my-health/" and heading exactly matches:"Messages" to capture all links within the Messages card. Add filter link_text exactly matches:"Go to inbox" to isolate this one. </td>
    </tr>
      <tr>
      <td>Click on Hearing aids connect with telehealth, **In the Spotlight**</td>
      <td>MHV landing page</td>
      <td> 
        <ul> 
          <li>en:"link_click"</li> 
          <li>ep.dle_name:"nav-linkslist"</li>
          <li>ep.event_action:"click"</li>
          <li>ep.link_text:"Hearing Aids Connect with Telehealth"</li>
          <li>ep.link_url:"(not set)"</li>
          <li>ep.heading_1:"In the spotlight"</li>
        </ul>
        </td> 
      <td>Filter report by page_path exactly matches regex:"/my-health|/my-health/" and heading exactly matches:"In the spotlight" to capture all links within the In the spotlight column. Add filter link_text exactly matches:"Hearing Aids Connect with Telehealth" to isolate this one. </td>
    </tr>
     <tr>
      <td>Click on How to use VA Video Connect, **More resources and support**</td>
      <td>MHV landing page</td>
      <td> 
        <ul> 
          <li>en:"link_click"</li> 
          <li>ep.dle_name:"nav-linkslist"</li>
          <li>ep.event_action:"click"</li>
          <li>ep.link_text:"How to use VA Video Connect"</li>
          <li>ep.link_url:"(not set)"</li>
          <li>ep.heading_1:"More resources and support"</li>
        </ul>
        </td> 
      <td>Filter report by page_path exactly matches regex:"/my-health|/my-health/" and heading exactly matches:"More resources and support" to capture all links within the column. Add filter link_text exactly matches:"How to use VA Video Connect" to isolate this one. </td>
    </tr>
     <tr>
      <td>Click on Dental care, **My VA health benefits**</td>
      <td>MHV landing page</td>
      <td> 
        <ul> 
          <li>en:"link_click"</li> 
          <li>ep.dle_name:"nav-linkslist"</li>
          <li>ep.event_action:"click"</li>
          <li>ep.link_text:"Dental care"</li>
          <li>ep.link_url:"(not set)"</li>
          <li>ep.heading_1:"My VA health benefits"</li>
        </ul>
        </td> 
      <td>Filter report by page_path exactly matches regex:"/my-health|/my-health/" and heading exactly matches:"My VA health benefits" to capture all links within the column. Add filter link_text exactly matches:"Dental care" to isolate this one. </td>
    </tr>
    <tr>
     <td>Click to open/close expandable alert ("Learn more about My HealtheVet on VA.gov")</td>
     <td>MHV landing page</td>
     <td>
       <ul> 
          <li>en:"alert"</li>
          <li>ep.dle_name:"int-alert-expandable-expand" OR "int-alert-expandable-collapse"</li>
          <li>ep.event_action:"expand" OR ep.event_action:"collapse"</li>
          <li>ep.link_text:"(not set)"</li>
       </ul>
     </td>
     <td>Filter report by page_path exactly matches regex:"/my-health|/my-health/" and filter report for Datalayer_event_name contains:"int-alert-expandable" to get all clicks, both open and close. Set event_action exactly matches:"expand" or "collapse" to get just opens or closes.</td>
    <tr>
     <td>Click health care links on My VA</td>
     <td>My VA, VA.gov</td>
     <td>
       <ul> 
          <li>en:"link_click"</li>
          <li>ep.dle_name:"nav-linkslist"</li>
          <li>ep.event_action:"click"</li>
          <li>ep.link_text:usually filled out</li>
          <li>ep.link_url:"(not set)"</li>
          <li>ep.heading_1:"Health care"</li>
       </ul>
     </td>
     <td>Filter report for page_path exactly matches regex:"/my-va|/my-va/" and heading exactly matches:"Health care" to get all health care link clicks and add filter link_text exactly matches:(whatever the link text is) to isolate just one of the links.</td>
    </tr>
       <tr>
     <td>Click breadcrumbs</td>
     <td>VA.gov website, portal, or just landing page</td>
     <td>
       <ul> 
          <li>en:"breadcrumb"</li>
          <li>ep.dle_name:"nav-breadcrumb-link-click"</li>
          <li>ep.event_action:"click"</li>
          <li>ep.link_text:"My HealtheVet"(for example)</li>
       </ul>
     </td>
     <td>Filter report for event_name is exactly "breadcrumb" and filter report by page path of the page(s) you want data on. For the entire portal use page_path begins with:"/my-health." For just the landing page, use page_path exactly matches regex:"/my-health|/my-health/</td>
    </tr>
     <tr>
     <td>Click "Appointments" in MHV secondary nav</td>
     <td>Entire portal or just landing page</td>
     <td>
       <ul> 
          <li>en:"navigation"</li>
          <li>ep.dle_name:"nav-mhv-secondary"</li>
          <li>ep.event_action:"click"</li>
          <li>ep.link_url:"/my-health/appointments"
          <li>ep.link_location:"MHV secondary nav"</li>
          <li>ep.link_type:"secondary nav"</li>
       </ul>
     </td>
     <td>These secondary nav link clicks are well-made custom events that are easy to isolate. Do so by filtering a report by link_type exactly matches:"secondary nav" or link_location exactly matches: "MHV secondary nav" or datalayer_event_name exactly matches: "nav-mhv-secondary" to get all secondary nav clicks (on all 5 links). Further filter by link_text exactly matches: "appointments" or "medications" or "messages" or "My HealtheVet" or "records" to get clicks on just those links throughout the portal. Add filter for page_path exactly matches regex:"/my-health|/my-health" to get clicks specific to the landing page."</td>
     </tr>   
      <tr>
     <td>Click link in the footer</td>
     <td>All of VA.gov</td>
     <td>
       <ul> 
          <li>en:"nagivation"</li>
          <li>ep.dle_name:"nav-footer-contact" or "nav-footer-resources" or "nav-footer-programs" depending on the specific link</li>
          <li>ep.event_action:"click"</li>
          <li>ep.link_text:tends to be filled out
          <li>ep.link_location:"footer"</li>
          <li>ep.link_type:"primary navigation"</li>
       </ul>
     </td>
     <td>Filter to look at all clicks in the footer throughout VA.gov by adding link_location exactly matches:"footer." Get all clicks on one link throughout VA.gov by adding filter link_text exactly matches:(whatever the link text is). Further filter to look at clicks on one link in the footer throughout the VA.gov MHV portal by adding filter page_path begins with:"/my-health" and to get clicks on one link in the footer on the landing page, set page_path exactly matches regex:"/my-health|/my-health/</td>
     </tr>   
      <tr>
     <td>Click link in the sidebar nav</td>
     <td>Some pages of VA.gov (those with a sidebar nav, but not facility pages, which have a different secondary nav)</td>
     <td>
       I wasn't able to get these clicks to show up in Adswerve, but I know these parameters are true for these link clicks:
       <ul> 
          <li>en:"navigation"</li>
          <li>ep.dle_name:"nav-sidenav"</li>
          <li>ep.link_location:"sidebar"</li>
       </ul>
     </td>
     <td>Filter to look at all clicks in the sidebar nav throughout VA.gov (but not the facility pages) by adding link_location exactly matches:"sidebar." If pulling event coutn, add event_name exactly matches:"navigation." Avoid facility pages by adding page path and screen class does not contain "vet-center"</td>
     </tr>   
