


let message;

function displayConsole(output){

    console.log(output);
}

function displayDOM(output){

    document.getElementById("MyH1").innerHTML=output;
}

function setMessage(text, callback){

    message = text;
    callback(message);
}

setMessage("Hi mom!", displayDOM);
setMessage("Hi mom!", displayConsole);