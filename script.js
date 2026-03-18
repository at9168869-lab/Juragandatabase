function login(){
    let u = document.getElementById("user").value;
    let p = document.getElementById("pass").value;

    if(u === "admin" && p === "123"){
        localStorage.setItem("login", "true");
        localStorage.setItem("balance", "100");
        window.location = "dashboard.html";
    } else {
        showToast("Login gagal");
    }
}

function checkLogin(){
    if(localStorage.getItem("login") !== "true"){
        window.location = "index.html";
    }
}

function logout(){
    localStorage.clear();
    window.location = "index.html";
}

/* TOAST */
function showToast(msg){
    let t = document.getElementById("toast");
    t.innerText = msg;
    t.style.opacity = 1;
    setTimeout(()=>{ t.style.opacity = 0; },2000);
}

/* ORDER SYSTEM */
function order(){
    let history = JSON.parse(localStorage.getItem("history")) || [];
    
    let newOrder = {
        id: Date.now(),
        status: "Pending"
    };

    history.unshift(newOrder);
    localStorage.setItem("history", JSON.stringify(history));

    showToast("Order berhasil dibuat 🚀");
}

/* LOAD HISTORY */
function loadHistory(){
    let container = document.getElementById("historyList");
    let data = JSON.parse(localStorage.getItem("history")) || [];

    container.innerHTML = "";

    data.forEach(o=>{
        container.innerHTML += `
            <div class="card">
                Order #${o.id} - ${o.status}
            </div>
        `;
    });
}

/* AUTO UPDATE STATUS (FAKE REALTIME) */
setInterval(()=>{
    let data = JSON.parse(localStorage.getItem("history")) || [];

    data.forEach(o=>{
        if(o.status === "Pending"){
            o.status = "Success";
        }
    });

    localStorage.setItem("history", JSON.stringify(data));
},5000);
