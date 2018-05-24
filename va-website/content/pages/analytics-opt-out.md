---
layout: page.html
title: Analytics Opt-Out
permalink: false
private: true
---

<!-- Maintenance Page Start -->

<div class="main home" role="main">
  <div class="section main-menu">
    <div class="row">
      <div class="small-12 columns">
        <div style="padding: 2em 0;">
        <h3>Analytics Opt-out</h3>
        <h4>Click the below button to opt out of the vets.gov Google Analytics collection.</h4>
        <p>This opt-out is will endure for this device/browser combination as long as you do not remove/reset your cookies. If you use multiple browsers or devices, you will need to opt out once for each device/browser combination to fully exclude yourself.</p>
        <p>The intended use case of this opt-out is for Vets.gov team members performing testing or validation in the production environment with their personal devices. Other uses are not recommended. The only way to re-enable Vets.gov Google Analytics collection is to clear the browser cookies. Therefore, this is not recommended for use on any shared devices.</p>
        <button class="usa-button-primary" onClick="recordEvent({ event: 'analytics-opt-out', 'internal-user': 'true' }); event.target.classList = ['usa-button-disabled']; event.target.innerText='Opted out'">Opt out</button>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- Maintenance Page End -->
