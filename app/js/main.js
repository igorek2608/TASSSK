const form = document.getElementById('auth_form')
const email = document.getElementById('email');
const password = document.getElementById('password');
const repeatPassword = document.getElementById('repeat__password');
const btnEnter = document.getElementById('btn__enter');
const btnReg = document.getElementById('btn__reg');
const btnReady = document.getElementById('btn__ready');
const users = [];




btnReg.onclick = (event) => {
    event.preventDefault();
    document.querySelector('.wrapper__repeat-password').classList.toggle('wrapper__repeat-password-active');
    document.querySelector('.btn-ready').classList.toggle('btn-ready-active');
}


btnEnter.addEventListener('click', function (event) {
    event.preventDefault();
    checkInputsAuth();
});

btnReady.addEventListener('click', function (event) {
    event.preventDefault();
    checkInputsReg();
});



function checkInputsReg() {
    const emailValue = email.value;
    const passwordValue = password.value;
    const repeatPasswordvalue = repeatPassword.value;

    if (emailValue === '') {
        
        setError(email, '*Email не может быть пустым')
    } else if (!isEmail(emailValue)) {
        setError(email, '*Непральный формат Email')
    } else {
       
        setSuccess(email)
    }


    if (passwordValue === '') {
       
        setError(password, '*Password не может быть пустым')
    } else {
       
        setSuccess(password)
    }


    if (repeatPasswordvalue === '') {
        setError(repeatPassword, '*Repeat Password не может быть пустым')
    } else if (passwordValue !== repeatPasswordvalue) {
        setError(repeatPassword, '*Пароли должны совпадать')
    } else {
        setSuccess(repeatPassword)
    }

    const user={
        email: emailValue,
        password:passwordValue,
    }

    users.push(user);
    console.log(users);
    localStorage.setItem('users', JSON.stringify(users))

}

function setError(input, message) {
    const formControl = input.parentElement;
    const span = formControl.querySelector('span');
    span.innerText = message;
    
}

function setSuccess(input) {
    const formControl = input.parentElement;
    const span = formControl.querySelector('span');
    span.classList.add('success');
      
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
};



function checkInputsAuth() {
    const emailValue = email.value;
    const passwordValue = password.value;
    

    if (emailValue === '') {
        
        setError(email, '*Email не может быть пустым')
    } else if (!isEmail(emailValue)) {
        setError(email, '*Непральный формат Email')
    } else {
       
        setSuccess(email)
    }


    if (passwordValue === '') {
       
        setError(password, '*Password не может быть пустым')
    } else {
       
        setSuccess(password)
    }
    
   
    
    function checkUser(users , user){
        for(let i=0;i<=users.lenth;i++){
            if(users[i]===user){
                return true;
            }
        }
        return nothingUser();
    }

    function nothingUser(){
        const avaibleUser=document.querySelector('.nothing-user');
        avaibleUser.innerText='пользователь отсутствует в системе';
    }

    checkUser();

}

function setError(input, message) {
    const formControl = input.parentElement;
    const span = formControl.querySelector('span');
    span.innerText = message;
    
}

function setSuccess(input) {
    const formControl = input.parentElement;
    const span = formControl.querySelector('span');
    span.classList.add('success');
      
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
};