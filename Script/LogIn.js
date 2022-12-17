let checkbox = document.getElementById("checkbox")

document.getElementById("checkbox").addEventListener("change",()=>{
    if(checkbox.checked == true){
        document.getElementById("text").style.display = "block"
        let data = JSON.parse(localStorage.getItem("userdata"))
        document.getElementById("btn").addEventListener("click",()=>{
            let count = 0;
            let count2 = 0;
            let email = document.getElementById("email").value;
            let password = document.getElementById("pass").value;
            data.forEach((el)=>{
            
                if(email == el.email){
                    count++;
                }
                if(email == el.email && password == el.password){
                    count2++
                }
                
            })
            if(count == 0){
                alert("You are Not Register!")
                
            }
            else{
                if(count2>0){
                    alert("Login Sucsessful!")
                    window.location.href = "./HomePage.html"
                }
                else{
                    alert("Wrong Password!")
                }
            }
        })
    }
    else{
        document.getElementById("text").style.display = "none"
    }
})
document.getElementById("login").addEventListener("click",()=>{
    window.location.href = "./SignUp.html"
})
document.querySelector("#nav>div>h1").addEventListener("click",()=>{
    window.location.href = "./HomePage.html"
})
// document.getElementById("text").style