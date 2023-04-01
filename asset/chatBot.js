function iconClicked(){
    if(document.getElementById("chatBotBox").style.display == "none" || document.getElementById("chatBotBox").style.display == ""){
        document.getElementById("chatBotBox").style.display = "block";
        document.getElementById("chatBotIcon").innerHTML = '<img src="../asset/minimizeIcon.png"></img>';
    } 
    // == "" because I don't know why first time it gets "" as display type
    else{
        document.getElementById("chatBotBox").style.display = "none";
        document.getElementById("chatBotIcon").innerHTML = '<img src="../asset/chatbot.png"></img>';
    }
}