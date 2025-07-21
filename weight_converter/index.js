const input = document.getElementById("input")
const error = document.getElementById("error");
const result = document.getElementById("result");
let errorTime;

function updateResults(){
    if(input.value<0 || isNaN(input.value)){
        error.innerText = "Please enter a valid number!!!";
        clearTimeout(errorTime);
        errorTime = setTimeout(()=>{
            error.innerText="";
            input.value="";
        },1000);
    }else{
        result.innerText = (input.value/2.2).toFixed(2);
    }
}

input.addEventListener("input",updateResults);