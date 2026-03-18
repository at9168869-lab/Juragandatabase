function login(){
    let u = document.getElementById("user").value;
    let p = document.getElementById("pass").value;

    if(u === "admin" && p === "123"){
        localStorage.setItem("login", "true");
        window.location = "dashboard.html";
    } else {
        alert("Username / Password salah");
    }
}

function checkLogin(){
    if(localStorage.getItem("login") !== "true"){
        window.location = "index.html";
    }
}

function logout(){
    localStorage.removeItem("login");
    window.location = "index.html";
      }
