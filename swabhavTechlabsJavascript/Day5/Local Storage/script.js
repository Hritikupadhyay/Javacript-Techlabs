function store(){

    const name = document.getElementById('name');
    const pw = document.getElementById('pw');

        localStorage.setItem('name', name.value);
        localStorage.setItem('pw', pw.value);
        alert('Your account has been created');
    
}


function check(){
    var storedName = localStorage.getItem('name');
    var storedPw = localStorage.getItem('pw');

    var userName = document.getElementById('userName');
    var userPw = document.getElementById('userPw');
    var userRemember = document.getElementById("rememberMe");

    if(userName.value == storedName && userPw.value == storedPw){
        alert('You are logged in.');
    }else{
        alert('Error on login');
    }
}


















// var name = document.getElementById('username');
// var pw = document.getElementById('password');

// function store() {
//     localStorage.setItem('name', name.value);
//     localStorage.setItem('pw', pw.value);
// }



// function check() {

    
//     var storedName = localStorage.getItem('name');
//     var storedPw = localStorage.getItem('pw');

    
//     var userName = document.getElementById('username');
//     var userPw = document.getElementById('password');

    
//     if(userName.value == storedName && userPw.value == storedPw) {
//         alert('ERROR');
//     }else {
//         alert('You are loged in.');
//     }
// }

// const loginbtn=document.querySelector("login")

// submitbtn.addEventListener("click",()=>{
//     check()
    
// })



// let name=document.querySelector("username")
// console.log(name.value);




// let email=document.querySelector("email")
// let password=document.querySelector("password")

// localStorage.setItem("name","password")