
var signup = document.getElementById("signup")
var main = document.getElementById("main")
var username = document.getElementById("username")
var email = document.getElementById("Email")
var password = document.getElementById("password")
var regex=/^$/
var question=[
    {
        ques : "wdfsdfgsdkfljfgakdsdflsdfskla",
        a:"dsfsdfs",
        b:"dsfsdfs",
        c:"dsfsdfs",
        d:"dsfsdfs",
    },
    {
        ques : "erwryewiqew",
        a:"nbbn",
        b:"vbv",
        c:"vcbcv",
        d:"bnvb",
    },
    {
        ques : "ljkpuupy",
        a:"wqwewe",
        b:"dsfwerewsdfs",
        c:"wee",
        d:"dsfsddwsdfs",
    },
            



]
var count = 0

function submit(){
    var emailcheck = regex.test(email.value)
    var usernamecheck = regex.test(username.value)
    var passwordcheck = regex.test(password.value)
localStorage.setItem("username",username.value)
localStorage.setItem("email",email.value)
localStorage.setItem("password",password.value)
    console.log(usernamecheck)
    console.log(emailcheck)
    console.log(passwordcheck)
    if(usernamecheck===false && emailcheck===false && passwordcheck===false){
signup.innerHTML=""
 var login=`  <center>
 <h1>LOGIN</h1>
</center>
<p class="color">Username</p>
<input type="text" id="username1">
<p class="color">Password</p>

<input type="password" id="password1">
<button id="logbtn" class="btn" onclick="login()">Login</button>
<p class="color">If you haven't registered then click on sign up</p>
<button id="signbtn" class="btn" onclick="signback()">Sign up</button>



`
signup.innerHTML=login
    }
    
}
function start1(){
    main.innerHTML=
    `
    <div class="head" id="head">
        <h1>Quiz App</h1>
    </div>
    <h1 >Welcome to Quiz app <span class="user">${username.value}</span></h1>
    <div class="htmlqn" id="htmlqn">
    <h1>
    
       ${
        question[count].ques
       } 
    </h1>
    <label for=""><input type="radio" name="gender"> ${
        question[count].a
       } </label>
    <label for=""><input type="radio" name="gender"> ${
        question[count].b
       } </label>
    <label for=""><input type="radio" name="gender"> ${
        question[count].c
       } </label>
    <label for=""><input type="radio" name="gender"> ${
        question[count].c}</label>


 
    <button class="next" id="next" onclick="start1()">Next</button>
    </div>
    
    
    `
    count++
}

function login(){
  var loginname  =localStorage.getItem("username")
   var loginpass= localStorage.getItem("password")
 var username1=document.getElementById("username1")
 var password1=document.getElementById("password1")
 var username1check = regex.test(username1.value)
 var password1check = regex.test(password1.value)

   console.log(loginname)
   console.log(loginpass)
   if(username1check===false && password1check===false){
if(username1.value===loginname&&loginpass===password1.value){
    

main.innerHTML=
`
<div class="head" id="head">
    <h1>Quiz App</h1>
</div>
<h1 class="toptext">Welcome to Quiz app <span class="user">${username.value}</span></h1>
<div class="html" id="html">
<h1>

    HTML Quiz 01
</h1>

<button class="click" id="click" onclick="start1()">click here</button>
</div>


`




}else{
    swal("Incorrect username or password");
}}else{
    swal("Empty username or password!!")
}

}



function signback(){
    signup.innerHTML=` <center>
    <h1>SIGN UP</h1>
</center>
<p class="color">Username</p>
<input type="text" id="username">
<p class="color">Email</p>
<input type="email" id="Email">
<p class="color">Password</p>

<input type="password" id="password">
<button id="signbtn" class="btn" onclick="submit()">Sign up</button>
<p class="color">If you have registered then click on login</p>
<button id="logbtn" class="btn">Login</button>`
}
