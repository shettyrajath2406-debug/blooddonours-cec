function show(id) {
  document.querySelectorAll(".page").forEach(p => p.classList.add("hidden"));
  document.getElementById(id).classList.remove("hidden");
}

function goHome() { show("home"); }
function goToFind() { show("find"); }
function goToRegister() { show("register"); }

function submitRequest() {
  const mobile = document.getElementById("reqMobile").value;
  if (!/^[0-9]{10}$/.test(mobile)) {
    alert("Mobile number must be exactly 10 digits");
    return;
  }
  show("otp");
}

function verifyOtp() {
  if (document.getElementById("otpInput").value === "1234") {
    show("success");
  } else {
    alert("Wrong OTP");
  }
}

function submitDonor() {
  const age = document.getElementById("dage").value;
  const mobile = document.getElementById("dmobile").value;

  if (age < 18) {
    alert("Age must be 18 or above");
    return;
  }

  if (!/^[0-9]{10}$/.test(mobile)) {
    alert("Mobile number must be exactly 10 digits");
    return;
  }

  alert("Registration Successful");
  goHome();
}
