var usasearch_config = { siteHandle:"vets.gov_search" };
var script = document.createElement("script");
script.src = "https://search.usa.gov/javascripts/remote.loader.js";
script.async = true;
document.getElementsByTagName("head")[0].appendChild(script);

(function() {
  var domReady = function(callback) {
    document.readyState === "interactive" || document.readyState === "complete" ? callback() : document.addEventListener("DOMContentLoaded", callback);
  };

  domReady(function() {
    // check whether browser is IE10 and older
    if (window.navigator.userAgent.indexOf('MSIE ') > 0) {
      var browserWarning = document.getElementsByClassName("incompatible-browser-warning")[0];

      if (browserWarning) {
        browserWarning.classList.add("visible");
      }
    }
  });
})();
