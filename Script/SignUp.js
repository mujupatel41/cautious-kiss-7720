let checkbox = document.getElementById("checkbox")

document.getElementById("checkbox").addEventListener("change",()=>{
    if(checkbox.checked == true){
        document.getElementById("text").style.display = "block"
        document.getElementById("btn").addEventListener("click",()=>{
            let data = JSON.parse(localStorage.getItem("userdata")) || [];
            let email = document.getElementById("email").value;
            let password = document.getElementById("pass").value;
            if(email == "" || password == ""){
                alert("Please fill the Data")
            }
            else{
                let obj = {
                    email,
                    password
                }
                data.push(obj)
                console.log(data)
                localStorage.setItem("userdata",JSON.stringify(data))
                alert("SignUp Sucsessful")
                window.location.href = "./Login.html"
            }
            
        })
        
    }
    else{
        document.getElementById("text").style.display = "none"
    }
})
document.getElementById("login").addEventListener("click",()=>{
    window.location.href = "./LogIn.html"
})
document.querySelector("#nav>div>h1").addEventListener("click",()=>{
    window.location.href = "./HomePage.html"

})
// All Done
// window.location
=======
})

