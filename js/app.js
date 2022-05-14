let sliderElement = document.querySelector("#slider")
let buttonElement = document.querySelector("#button")

let sizePassword = document.querySelector("#valor")
let password = document.querySelector("#password")

let containerPassaword = document.querySelector("#container-password")

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789"

let novaSenha = "";

sizePassword.innerHTML = sliderElement.value

slider.oninput = function(){
    sizePassword.innerHTML = this.value;
}
buttonElement.addEventListener("click", () => {
    
    let pass = "";
    for(let i = 0, n = charset.length; i < sliderElement.value; ++i){
         pass += charset.charAt(Math.floor(Math.random() * n))
    }
   containerPassaword.classList.remove("hide");
   password.innerHTML = pass;
   novaSenha = pass; 

})
containerPassaword.addEventListener("click",function(){
    navigator.clipboard.writeText(novaSenha)
})