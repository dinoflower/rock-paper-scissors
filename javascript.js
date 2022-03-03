// upon input (in console)
// function computerPlay(){
//     return Math.floor(Math.random()*3) + 1;
// }

// return "rock" for 1, "paper" for 2, "scissors" for 3
function computerPlay(){
    if (randomNumber() == 1) {
    result = "rock";
    } else if (randomNumber() == 2) {
    result = "paper";
    } else {
    result = "scissors";
    }
    return result;
}
function randomNumber(){
    return Math.floor(Math.random()*3) + 1;
}
//    if (result == 1){
//    return "rock";
// }
// else-if (result == 2){
//     return "paper";
// }
// else {
//    return "scissors";
// }