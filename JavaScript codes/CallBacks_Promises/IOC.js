//inversion of control

function loadScript(src, callback) {
  var script = document.createElement("script");
  script.src = src;

  script.onload = () => {
    console.log("Script loaded correctly.");
    callback(true, src); /////this is mistake made where true should be null and that is causing to call error even when script loaded
  };

  script.onerror = (error) => {
    console.log("Script has some error.");
    callback(error, src);
  };

  document.head.appendChild(script);
}

function hello(error, src) {
  if (error) {
    console.log("This is error: ");
    console.log(error);
    callCeo();
    return;
  }
  console.log("Hello src " + src);
}

const callCeo = () => {
  alert("ERROR ERROR ERROR");
};

loadScript(
  "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.min.js",
  hello
);

//we have passed whole function as an argument this becomes inversion of control and one mistake in loadscript can result in wrong execution of the inner callback function as happened here.
