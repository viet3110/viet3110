function LogginUser() {
  let usernameToLoggin = document.getElementById("usernameToLoggin").value;
  let passwordToLoggin = document.getElementById("passwordToLoggin").value;
  if (usernameToLoggin == "admin" && passwordToLoggin == "admin") {
    alert("Loggin Successfully!");
    document.getElementById("userFormLoggin").action = "admin.html";
  } else {
    alert("User Name or Password is wrong!");
  }
}
