---
layout: page.html
title: Logout
private: true
---

<div class="main home" role="main">
  <div class="section main-menu">
    <div class="row">
      <div class="small-12 columns">
        <div class="csp-inline-patch-logout">
        <h3>Signing out of Vets.gov...</h3>
        </div>
      </div>
    </div>
  </div>
</div>

<script>
if (location.search.substring(1) === 'success=true') {
  window.opener.sessionStorage.clear();
  window.opener.document.location.href = '/';
  window.close();
}
</script>
