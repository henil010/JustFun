function check(){
    var use = document.getElementById('user').value;
    var pas = document.getElementById('pass').value;
    var log = document.getElementById('login').value;
    
    if (pas.length >8 && use !="") {
        log.disabled = false;
        document.getElementById("login").style.cursor = "pointer";
        document.getElementById("login").style.background = "#0095f6";
    }else{
        log.disabled = true;
        document.getElementById("login").style.background = "rgba(var(--d69,0,149,246),.3)";
    }
    var x = document.getElementById("pass").value;
    if (x.length < 1) {
        document.getElementById("sh").style.display = "none";
    }else{
        document.getElementById("sh").style.display = "block";
    }
}
function logC(){
    var use = document.getElementById('user').value;
    var pas = document.getElementById('pass').value;
}

function hide() {
    var x = document.getElementById("pass");
    if (x.type === "password") {
      x.type = "text";
      document.getElementById("sh").innerHTML = "Hide";
    } else {
        x.type = "password";
        document.getElementById("sh").innerHTML = "Show";
    }
  }