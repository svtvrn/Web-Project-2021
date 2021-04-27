const passConfirm = document.querySelector('#confirm-password');
const password  = document.querySelector('#password');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const phone = document.querySelector('#phone');
const subscription = document.querySelector('#subscription');
const submit = document.querySelector('#submit-button');

//All the input elements of the HTML document.
let formInputs = document.querySelectorAll('.form-cont fieldset input');

//Overrides the browser back button to return to the article last read.
subscription.addEventListener('click',() => {
    window.history.back();
});

username.addEventListener('input',() =>{
    if(!username.checkValidity()){
        username.reportValidity();
    }
});

phone.addEventListener('input',() =>{
    if(!phone.checkValidity()){
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

submit.addEventListener('click', () =>{

   for (let e of formInputs){
        if(!e.checkValidity()){
            //Scroll dismisses the error message, so I display the message after 400ms have passed, enough for the scroll.
            setTimeout(function(){
                e.reportValidity();
            }, 400);
            break;
        }
    }
});