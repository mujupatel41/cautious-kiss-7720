document.querySelector("#nav>div>h1").addEventListener("click",()=>{
    window.location.reload();
})
document.getElementById("Sign").addEventListener("click",()=>{
    window.location.href = "./SignUp.html"
})
document.getElementById("login").addEventListener("click",()=>{
    window.location.href = "./Login.html"
})
document.getElementById("Demo").addEventListener("click",()=>{
    window.location.href = "SignUp.html"
})
document.getElementById("Demo-2").addEventListener("click",()=>{
    window.location.href = "SignUp.html"
})
document.querySelector("#email+button").addEventListener("click",()=>{
    let data = JSON.parse(localStorage.getItem("userdata")) || [];
    let email = document.getElementById("email").value;

    let obj = {
        email,
    }
    data.push(obj)
    localStorage.setItem("userdata",JSON.stringify(data))
    alert("SignUp Sucsessful!")
    window.location.href = "./LogIn.html"
})
document.querySelector("#nav>:nth-child(1)>:nth-child(2)").addEventListener("mouseover",()=>{
    document.getElementById("Block0").style.display = "inline"
    document.getElementById("Block0").style.display = "grid";
    document.getElementById("Block0").style.paddingBottom = "230px"
    document.getElementById("Block0").style.gridtemplatecolumns = "repeat(5,1fr)";
    document.getElementById("Block1").style.display = "none"
})
document.querySelector("#nav>:nth-child(1)>:nth-child(2)").addEventListener("mouseout",()=>{
    document.getElementById("Block0").style.display = "none"
    document.getElementById("Block1").style.display = "flex"
})
document.querySelector("#nav>:nth-child(1)>:nth-child(4)").addEventListener("mouseover",()=>{
    document.getElementById("Block0").style.display = "inline"
    document.getElementById("Block0").style.display = "grid";
    document.getElementById("Block0").style.paddingBottom = "230px"
    document.getElementById("Block0").style.gridtemplatecolumns = "repeat(5,1fr)";
    document.getElementById("Block1").style.display = "none"
})
document.querySelector("#nav>:nth-child(1)>:nth-child(4)").addEventListener("mouseout",()=>{
    document.getElementById("Block0").style.display = "none"
    document.getElementById("Block1").style.display = "flex"
})
document.querySelector("#nav>:nth-child(1)>:nth-child(6)").addEventListener("mouseover",()=>{
    document.getElementById("Block0").style.display = "inline"
    document.getElementById("Block0").style.display = "grid";
    document.getElementById("Block0").style.paddingBottom = "230px"
    document.getElementById("Block0").style.gridtemplatecolumns = "repeat(5,1fr)";
    document.getElementById("Block1").style.display = "none"
})
document.querySelector("#nav>:nth-child(1)>:nth-child(6)").addEventListener("mouseout",()=>{
    document.getElementById("Block0").style.display = "none"
    document.getElementById("Block1").style.display = "flex"
})
document.querySelector("#sqr>:nth-child(1)").addEventListener("click",()=>{
    window.location.href = "./SecondPage.html"
})
document.querySelector("#sqr>:nth-child(2)").addEventListener("click",()=>{
    window.location.href = "./SecondPage.html"
})
document.querySelector("#sqr>:nth-child(3)").addEventListener("click",()=>{
    window.location.href = "./SecondPage.html"
})
document.querySelector("#sqr>:nth-child(4)").addEventListener("click",()=>{
    window.location.href = "./SecondPage.html"
})
// ALl Done 