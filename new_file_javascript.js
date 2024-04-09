// function rps(number) {
//     if(number === 1) {
//         alert('True')
//         return true
//     } else {
//         alert('False')
//         return false
//     }
// }
// rps(5) 

function playgame(playerChoice) {
    // var playerchoice =document.getElementById('userchoice').value;

    // document.getElementById('playerchoice').innerHTML = 'Player Choice: ' + playerChoice;

    document.getElementById('playerchoice').innerHTML = 'Player Choice: ' + playerChoice;
    const choices = ['Quartz', 'Parchment', 'Shears']; 

    const computerChoice = choices[Math.floor(Math.random() * 3)];

    document.getElementById('computerchoice').innerHTML = 'Computer Choice: ' + computerChoice;


    if(playerChoice===computerChoice) {
        document.getElementById('result').innerHTML='It is a tie'
        
    } else if(playerChoice==='Quartz' && computerChoice==='Shears'){
        document.getElementById('result').innerHTML='You Win!'
    }
    else if(playerChoice==='Parchment' && computerChoice==='Quartz'){
    document.getElementById('result').innerHTML='You Win!'
}
     else if(playerChoice==='Shears' && computerChoice==='Parchment'){
    document.getElementById('result').innerHTML='You Win!'
}   
   else {
    document.getElementById('result').innerHTML='Try Again!'
   }
   
}

