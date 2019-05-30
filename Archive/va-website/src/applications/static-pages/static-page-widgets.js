function mountWidgets(widgets) {
  widgets
    .forEach(function (widget) {
      var root = document.getElementById(widget.root);
      var timeout = (widget.timeout || 0) * 1000;
      var slowLoadingThreshold = (widget.slowLoadingThreshold || 6) * 1000;
      var slowMessage = widget.slowMessage || 'Sorry, this is taking longer than expected.';

      if (!widget.showSpinnerUnauthed && sessionStorage.userToken) {
        root.innerHTML = '<div class="loading-indicator-container">' +
          '<div class="loading-indicator" role="progressbar" aria-valuetext="' + widget.loadingMessage + '"></div>' +
          '<span class="loading-indicator-message">' + widget.loadingMessage + '</span>' +
        '</div><span class="static-content"/>';
      }

      if (timeout > slowLoadingThreshold) {
        setTimeout(function() {
          var replacedWithWidget = !root.querySelector('.static-content');
          if (!replacedWithWidget) {
            root.querySelector('.loading-indicator-message').innerHTML = slowMessage;
          }
        }, slowLoadingThreshold);
      }

      if (timeout > 0) {
        setTimeout(function() {
          var replacedWithWidget = !root.querySelector('.static-content');
          if (!replacedWithWidget && widget.errorMessage) {
            root.innerHTML = '<div class="usa-alert usa-alert-error sip-application-error">' +
              '<div class="usa-alert-body">' + widget.errorMessage + '</div>' +
            '</div>';
          } else if (!replacedWithWidget) {
            root.innerHTML = '';
          }
        }, timeout);
      }

      root.classList.remove('static-page-widget');
  });
}

if (module) {
  module.exports = mountWidgets;
}
