

function login(){
    let userName = "Ionut"
    let userInbox = 0;

    function displayUserName(){
        console.log("Hello", userName);
    }

    function displayUserInbox(){
        console.log("You have",userInbox,"new messages")
    }

    displayUserName();
    displayUserInbox();
}

login();

//displayUserInbox();
//displayUserName();