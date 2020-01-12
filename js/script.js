function operator(operator) {
    var getOperator = document.getElementById("output-value");
    switch (operator) {
        case '-':
            getOperator.innerHTML += '_';
            break;
        case '+':
            getOperator.innerHTML += '+';
            break;
        case '*':
            getOperator.innerHTML += '*';
            break;
        case '%':
            getOperator.innerHTML += '%';
            break;
        case '=':
            getOperator.innerHTML += '=';
            break;
        case '/':
            getOperator.innerHTML += '/';
            break;
    }
}
function number(number) {
    var getNumber = document.getElementById("output-value");
    switch (number) {
        case 1:
            getNumber.innerHTML += 1;
            break;
        case 2:
            getNumber.innerHTML += 2;
            break;
        case 3:
            getNumber.innerHTML += 3;
            break;
        case 4:
            getNumber.innerHTML += 4;
            break;
        case 5:
            getNumber.innerHTML += 5;
            break;
        case 6:
            getNumber.innerHTML += 6;
            break;
        case 7:
            getNumber.innerHTML += 7;
            break;
        case 8:
            getNumber.innerHTML += 8;
            break;
        case 9:
            getNumber.innerHTML += 9;
            break;
        case 0:
            getNumber.innerHTML += 0;
            break;
    }
}
function clean() {
    document.getElementById("output-value").innerHTML = "";
}
function backspace() {
    var back = document.getElementById("output-value").innerHTML;
    document.getElementById("output-value").innerHTML = back.substring(0,back.length-1);
}
function culculator() {
    var culculator = document.getElementById("output-value").innerHTML;
   if(culculator) {
    document.getElementById('output-value').innerHTML = "="+ eval(culculator);
    document.getElementById('history-value').innerHTML = culculator +"="+ eval(culculator);
   }
}

//Sound
var sound= document.getElementById("output-text");
var spn= document.querySelector("#microphone");
function userSpeak() {
    if('webkitSpeechRecognition' in window) {
        let speak= new webkitSpeechRecognition();
        speak.continuous= true;
        speak.interimResults= true;
        speak.lang= "en-IN";
        speak.start();

        let finalSpeak= '';
        speak.onresult= function(event){
            let interimTranscript= '';
            for(let i= event.resultIndex; i < event.results.length; i++){
                let transcripts= event.results[i][0].transcript;
                transcripts.replace("\n", "<br>");
                if(event.results[i].isFinal){
                    finalSpeak += transcripts;
                }else {
                    interimTranscript += transcripts;
                }
            }
            sound.innerHTML= finalSpeak + interimTranscript;
        }
    }else {
        sound.innerHTML= "Browser not support";
    }
}
spn.addEventListener('click', userSpeak);

// var microphone = document.getElementById('microphone');
// microphone.onclick=function(){
//     microphone.classList.add("record");
//     var recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition)();
//     recognition.lang = 'en-US';
//     recognition.start();
//     operations = {"plus":"+",
//                  "minus":"-",
//                  "multiply":"*",
//                  "multiplied":"*",
//                  "divide":"/",
//                  "divided":"/",
//                  "reminder":"%"}
    
//     recognition.onresult = function(event){
//         var input = event.results[0][0].transcript;
//         for(property in operations){
//             input= input.replace(property, operations[property]);
//         }
//         document.getElementById("output-text").innerText = input;
//         setTimeout(function(){
//             evaluate(input);
//         },2000);
//         microphone.classList.remove("record");
//     }
    
// }
// function evaluate(input){
//     try{
//         var result = eval(input);
//         document.getElementById("output-text").innerText = result;
//     }
//     catch(e){
//         console.log(e);
//         document.getElementById("output-text").innerText = "";
//     }
// }
