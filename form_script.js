const passConfirm = document.querySelector('#confirm-password');
const password  = document.querySelector('#password');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const phone = document.querySelector('#phone');


function goBack() {
    window.history.back();
}

username.addEventListener('input',() =>{
    if(!username.checkValidity()){
        username.reportValidity();
    }
});

phone.addEventListener('input',() =>{
    if(/[a-zA-Z]/g.test(phone.value)){
        phone.setCustomValidity("Invalid telephone number!");
        phone.reportValidity();
    }else{
        phone.setCustomValidity("");
        phone.reportValidity();
    }
});

email.addEventListener('input',()=>{
    if(!email.checkValidity()){
        email.reportValidity();
    }
});

password.addEventListener('input',()=>{
    if(!password.checkValidity()){
        password.reportValidity();
    }
});

passConfirm.addEventListener('input',() =>{
    if(passConfirm.value != password.value){
        passConfirm.setCustomValidity("The two passwords don't match!");
        passConfirm.reportValidity();
    }else{
        passConfirm.setCustomValidity("");
        passConfirm.reportValidity();
    }
});