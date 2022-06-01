// Code your solutions in this file
function writeCards(thankYou, event){
    let thanks = []
    for(let i = 0; i < thankYou.length; i++){
         let message =`Thank you, ${thankYou[i]}, for the wonderful ${event} gift!`
         thanks.push(message)
    }
    return thanks
}
console.log(writeCards(["Guadalupe", "Ollie", "Aki"], "graduation"))
function countDown(count){
    while(count >= 0){
        console.log(count--)
    }
}
