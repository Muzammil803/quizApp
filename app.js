
var signup = document.getElementById("signup")
var main = document.getElementById("main")
var username = document.getElementById("username")
var email = document.getElementById("Email")
var password = document.getElementById("password")
var regex=/^$/

function signup1(){
    main.innerHTML=
    `
    <div id="signup">
    <center>
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
    <button id="logbtn" class="btn">Login</button>

</div>`
}


var question=[
    {
        ques : "Q1 :  What does HTML stand for? ",
        a:"hyper text markup",
        b:"hyper technology",
        c:"hyper text markup language",
        d:"hyper link",
ans:"hyper text markup language"

    },
    {
        ques : "Q2 : Choose the correct HTML element for the largest heading:",
        a:"h1",
        b:"h2",
        c:"h",
        d:"br",
ans:"h1"

    },
    {ques : "Q3 : What is the correct HTML element for inserting a line break? ",
    a:"break",
    b:"br",
    c:"hr",
    d:"g",
ans:"br"

}, 
    {
        ques : "Q4 : Choose the correct HTML element to define important text         ",
        a:"break",
        b:"i",
        c:"imp",
        d:"strong",
ans:"strong"
   
    }, {
        ques : "Q5 : What is the correct HTML element for inserting a link? ",
        a:"break",
        b:"a",
        c:"link",
        d:"src",
ans:"link"

    },
    

]

console.log(question[1].ans)
var count = 0
var score = 0
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



`
signup.innerHTML=login
    }
    
}
function start1(){
    main.innerHTML=
    `
    <div id="main2" class="main2">
<h1>HTML QUIZ</h1>
<h3 id="que">${question[count].ques}</h3>
<ul>
<li>
    <input type="radio" id="a"  name="opt" class="ans" value="${question[count].a}">
    <label for="a" id="op1">${question[count].a} </label>
</li>
<li>
    <input type="radio" id="b" name="opt" class="ans" value="${question[count].b}">
    <label  for="b" id="op2">${question[count].b} </label>
</li>
<li>
    <input type="radio" id="c" name="opt" class="ans" value="${question[count].c}">
    <label for="c" id="op3">${question[count].c} </label>
</li>
<li>
    <input type="radio" id="d" name="opt" class="ans" value="${question[count].d}">
    <label for="d" id="op4">${question[count].d} </label>
</li>


</ul>    


<button id="nxt" onclick="start2()">next</button>





</div>

    
    `
   
}


function start2(){
   
    var answer = document.querySelectorAll(".ans")
for(var i=0 ; i<answer.length;i++){
    if(answer[i].checked){
        if(answer[i].value === question[count].ans){

score++
        }
    }
}
    console.log(answer)
    
    

    
    count++
    console.log(count)
    if(count<question.length){
        start1()
        
    }else if(count==question.length){
        var main2=document.getElementById("main2")
       main2.innerHTML=`<h1> you scored ${score} out of ${question.length}</h1>`

    }
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
<div class="main2" >
    <h1>Quiz App</h1>
    <h1 class="toptext">Welcome to Quiz app <span class="user">${username.value}</span></h1>
    <div >
    <h1>
    
    HTML Quiz 01
</h1>

<button class="click" id="click" onclick="start1()">click here</button>
</div>

</div>

`




}else{
    swal("Incorrect username or password");
}}else{
    swal("Empty username or password!!")
}

}



function login1(){
    signup.innerHTML= `  <center>
    <h1>LOGIN</h1>
   </center>
   <p class="color">Username</p>
   <input type="text" id="username1">
   <p class="color">Password</p>
   
   <input type="password" id="password1">
   <button id="logbtn" class="btn" onclick="login()">Login</button>
   
   
   
   `
}