function applySafeRedirector(url) {
    window.setTimeout(function() {
      var statusChecker = arguments.callee;
        new Ajax.Request(url, {
            method: "get",
            onFailure: function(rsp) {
                if(rsp.status==503) {
                  // redirect as long as we are still loading
                  window.setTimeout(statusChecker,5000);
                } else {
                  window.location.replace(url);
                }
            },
            onSuccess: function(rsp) {
                if(rsp.status!=200) {
                    // if connection fails, somehow Prototype thinks it's a success
                    window.setTimeout(statusChecker,5000);
                } else {
                    window.location.replace(url);
                }
            }
        });
    }, 30000);
}
