var input=document.getElementById("inputBox");
var btns=document.querySelectorAll("button");
let inputStr="";

let arr=Array.from(btns);
arr.forEach(button => button.addEventListener('click',(e) =>{
    if(e.target.innerHTML== '='){
        var op=eval(inputStr);
        input.value=op;
    }
    else if(e.target.innerHTML== 'AC'){
        inputStr=""
        input.value=inputStr;
    }
    else if(e.target.innerHTML== 'DEL'){
        inputStr=inputStr.substring(0,inputStr.length-1);
        input.value=inputStr;
    }
    else{
    inputStr += e.target.innerHTML;
    input.value=inputStr;
    }
}))