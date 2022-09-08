var question=[
    {
        ques : "Q1 :  What does HTML stand for? ",
        a:"hyper text markup",
        b:"hyper technology",
        c:"hyper text markup language",
        d:"hyper link",
ans:"hyper text markup"

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
        ques : "Q4 : <Choose the correct HTML element to define important text        > ",
        a:"break",
        b:"i",
        c:"imp",
        d:"strong",
ans:"imp"
   
    }, {
        ques : "Q5 : What is the correct HTML element for inserting a link? ",
        a:"break",
        b:"a",
        c:"link",
        d:"src",
ans:"link"

    },
    

]

var que = document.getElementById("que")
var op1 = document.getElementById("op1")
var op2 = document.getElementById("op2")
var op3 = document.getElementById("op3")
var op4 = document.getElementById("op4")
var answer= document.querySelectorAll(".ans")
var nxtbtn=document.getElementById("nxt")
var main2 = document.getElementById("main2")
var count =0;
var score = 0;
render()
function render(){
 
    var quesindex = question[count]
    que.innerText=quesindex.ques
op1.innerText=quesindex.a
op2.innerText=quesindex.b
op3.innerText=quesindex.c
op4.innerText=quesindex.d

}
function nxt(){
var get = getvalue()
if(get){
    if(get===question[count].ans){
        score++
    }
    count++
    if(count<question.length){
        render()
    }else if(count===question.length){
        main2.innerHTML=`<h1>you scored ${score}/${question.length}    </h1>`
    }
}



}


function getvalue(){
    var value;
    answer.forEach((answer)=>{
        if(answer.checked){
            value = answer.id
        }
    });
    return value;
}