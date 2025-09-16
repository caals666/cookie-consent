const cookieBtn=document.querySelector("#cookie-btn");
const cookieDiv=document.querySelector("#cookie-div");


let cookieClose=()=>{
    cookieDiv.classList.toggle("hidden");
    localStorage.setItem("cookies",false);
}

cookieBtn.addEventListener("click",()=>{
    cookieDiv.classList.add("hidden");
    localStorage.setItem("cookies","true");
})

if(localStorage.getItem("cookies")=="true"||localStorage.getItem("cookies")=="false"){
    cookieDiv.classList.add("hidden");
}