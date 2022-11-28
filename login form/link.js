let rmCheck = document.getElementById("rmemberMe");
rmCheck.checked = true;
let emailInput = document.getElementById("email1").value;
let passInput = document.getElementById("pass").value;

function checkboxcheck() {
  if (rmCheck.checked == true) {
    y = document.getElementById("rmemberMe").value;
    console.log(y);
    setCookie("name", "Mohsin Khan");
    setCookie("email", emailInput);
    stopBox.classList.remove("d-none");
    stopBox.classList.add("d-flex");
    setTimeout(() => {
      stopBox.classList.remove("d-none");
      // window.location('https://google.com', '_blank');
      window.location = "../student_page/spp.html";
    }, 2000);

    function setCookie(cname, cvalue, exdays = 1) {
      const d = new Date();
      d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
      let expires = "expires=" + d.toUTCString();
      document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
      alert("cookiessss");
    }
  } else {
    y = "Dont Remember me";
    console.log(y);
  }
}
function validateinput() {
  console.log;
  // if (emailInput == "" || passInput == "") {
  //   console.log("Wrong INput validated");
  // } else {
  //   console.log(" correct input");
  // }
  let emailInput = document.getElementById("email1")?.value;
  let passInput = document.getElementById("pass")?.value;
  if (!emailInput || !passInput) return alert("all fields are required");
}
function findinputs() {
  const inputss = [emailInput, passInput];
  for (let i = 0; i < inputss.length; i++) {
    console.log(inputss[i]);
  }
  validateinput();
  // document.getElementById("wronginpo").innerHTML = "Invalid Input";
}
function lsRememberMe() {
  findinputs();
  checkboxcheck();
  alert("Logged in successfully");
  window.open("http://127.0.0.1:5500/lab003.html");
  window.open("/lab003.html");
  // window.stop();

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
