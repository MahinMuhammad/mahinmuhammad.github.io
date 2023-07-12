/* Copyright 2023 Md. Mahinur Rahman

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License. */

function iconClicked(){
    if(document.getElementById("chatBotBox").style.display == "none" || document.getElementById("chatBotBox").style.display == ""){
        document.getElementById("chatBotBox").style.display = "block";
        setTimeout(() => {
            document.getElementById("chatBotBox").style.opacity = "1";
        });
        document.getElementById("chatBotIcon").innerHTML = '<img src="../asset/minimizeIcon.png"></img>';
    } 
    // == "" because I don't know why first time it gets "" as display type
    else{
        document.getElementById("chatBotBox").contentWindow.document.getElementById("chatInput").value = ""; //taking element from iframe
        setTimeout(() => {
            document.getElementById("chatBotBox").style.opacity = "0";
        });
        setTimeout(() => {
            document.getElementById("chatBotBox").style.display = "none";
        }, 500);
        setTimeout(() => {
            document.getElementById("chatBotIcon").innerHTML = '<img src="../asset/chatbot.png"></img>';
        }, 200);
    }
}

function submitChat(event){
    if(event.code == "Enter"){
        alert("Chat bot is sleeping..Zzzz");
        document.getElementById("chatInput").value = "";
    }
}