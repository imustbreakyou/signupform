let password = document.getElementById("password");
let confirmPassword = document.getElementById("confirm_password");
let fail = document.getElementById("fail");
let passwordMatch = false;
const input = document.querySelectorAll ('input');


password.addEventListener("input", function(){
    checkPasswordMatch();
    
});

confirmPassword.addEventListener("blur", function(){
    checkPasswordMatch();
    
    
});

function checkPasswordMatch () {
    if (password.value === confirmPassword.value) {
        passwordMatch = true;
        fail.style.color = "green";
        fail.textContent = "passwords match!"
        password.style.cssText = "border: green; background: white";
        confirmPassword.style.cssText = "border: green; background: white";

        
        console.log("passwords match!")
    } else { 
        console.log("passwords don't match!")
        passwordMatch = false;
        fail.style.color = "red";
        fail.textContent = "passwords don't match!"
        password.style = "border: red; background: pink";
        confirmPassword.style = "border: red; background: pink";

    }
}


function validateInput () {
    if (!this.checkValidity()) {
        this.style.border = "1px solid red";
        console.log('Invalid input:', this.name);
    } else {
        console.log('Valid input:', this.name);
    }
}

input.forEach(input =>  {
    input.addEventListener ('blur', validateInput)
})
