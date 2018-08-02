let now;

function refreshTime () {
  now = new Date();
  document.getElementById("0").innerText = "Current time is " + now;
}

refreshTime();
