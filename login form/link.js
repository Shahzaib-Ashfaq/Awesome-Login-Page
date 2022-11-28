let rmCheck = document.getElementById("rmemberMe");
rmCheck.checked = true;
let emailInput = document.getElementById("email1").value;
let passInput = document.getElementById("pass").value;

function checkboxcheck() {
  if (rmCheck.checked == true) {
    y = document.getElementById("rmemberMe").value;
    console.log(y);
  } else {
    y = "Dont Remember me";
    console.log(y);
  }
}
function validateinput() {
  console.log;
  if (emailInput == "" || passInput == "") {
    console.log("Wrong INput validated");
  } else {
    console.log(" correct input");
  }
}
function findinputs() {
  const inputss = [emailInput, passInput];
  for (let i = 0; i < inputss.length; i++) {
    console.log(inputss[i]);
  }
  validateinput();
}
function lsRememberMe() {
  document.getElementById("wronginpo").innerHTML = "Invalid Input";
  alert("Logged in successfully");
  window.stop();

  return;

  findinputs();
  checkboxcheck();
  // console.log("test");

  // console.log(y);
  // console.log(emailInput);
  // alert(emailInput);
}

function cancel() {
  alert("Canceled is clicked");
}
