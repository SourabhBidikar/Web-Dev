function loadScript(src, callback) {
  var script = document.createElement("script");
  script.src = src;

  script.onload = () => {
    //this runs the callback function just to know that script is loaded. any function which is asynchornous should have a callback to denote that action is performed.
    console.log("Script loaded correctly.");
    callback(null, src);
  };

  script.onerror = (error) => {
    console.log("Script has some error.");
    callback(error, src);
  };

  document.head.appendChild(script);
}

loadScript(
  "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.min.js",
  function hello(error, src) {
    if (error) {
      console.log("This is error: ");
      console.log(error);
      callCeo();
      return;
    }
    loadScript(
      "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.min.js",
      function hello(error, src) {
        if (error) {
          console.log("This is error: ");
          console.log(error);
          callCeo();
          return;
        }
        loadScript(
          "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.min.js",
          function hello(error, src) {
            if (error) {
              console.log("This is error: ");
              console.log(error);
              callCeo();
              return;
            }
            loadScript(
              "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.min.js",
              function hello(error, src) {
                if (error) {
                  console.log("This is error: ");
                  console.log(error);
                  callCeo();
                  return;
                }
                loadScript(
                  "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.min.js",
                  function hello(error, src) {
                    if (error) {
                      console.log("This is error: ");
                      console.log(error);
                      callCeo();
                      return;
                    }
                    loadScript(
                      "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.min.js",
                      function hello(error, src) {
                        if (error) {
                          console.log("This is error: ");
                          console.log(error);
                          callCeo();
                          return;
                        }
                      }
                    );
                  }
                );
              }
            );
          }
        );
      }
    );
  }
);

//hello is a callback function passed as an argument to another function i.e. loadscript, which is then invoked by the outer function (i.e. loadScript) to complete an action (i.e. here alert)
