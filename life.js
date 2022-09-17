let bot = document.getElementById("bot");
let user = document.getElementById("you");
let result = document.getElementById("result");
let choices = document.querySelectorAll("button");
let userdisplay
let botdisplay

choices.forEach((el) => {
  el.addEventListener("click", () => {
    userdisplay = el.id;
    user.innerText = userdisplay
    botchoice()
    resultshower()
  });
});

function botchoice(){
botdisplay = Math.floor(Math.random() * 3) + 1;
console.log(botdisplay);
if(botdisplay === 1){
    bot.innerText = "rock"
}
else if(botdisplay === 2){
    bot.innerText = "scissor"
}
else if(botdisplay === 3){
    bot.innerText = "paper"
}
}

 function resultshower(){
if(userdisplay == bot.innerText ){
    console.log('ok')
    result.innerText = "It's a tie"
}
if(userdisplay == "rock" && bot.innerText == "scissor" ){
    console.log('You lose')
    result.innerText = "You win"
}
if(userdisplay == "rock" && bot.innerText == "paper" ){
    console.log('ok')
    result.innerText = "You lose"
}
if(userdisplay == "scissor" && bot.innerText == "rock" ){
    console.log('ok')
    result.innerText = "You lose"
}
if(userdisplay == "scissor" && bot.innerText == "paper" ){
    console.log('ok')
    result.innerText = "You win"
}
if(userdisplay == "paper" && bot.innerText == "rock" ){
    console.log('ok')
    result.innerText = "You win"
}
if(userdisplay == "paper" && bot.innerText == "scissor" ){
    console.log('ok')
    result.innerText = "You lose"
}

 }


