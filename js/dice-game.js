function rollDice() {
    let goldCoins = 0
    let diceWins = 0
    let diceLosses = 0
    let tryAgain = 0
    for (i = 0; i < 10; i++) {
        const roll = Math.floor(Math.random() * 6) + 1;
        alert('You rolled a ' + roll +'!')
        if (roll === 1) {
            alert('Game over, yo! No more rolls!')
            break;
        }
        while(roll === 4) {
            if(goldCoins => 1);{
                goldCoins = --goldCoins;
                alert('Oh no! Unlucky number ' + roll + '! You lose 1 gold coin!' + '\n\n You now have ' + goldCoins + '!')
                break
            }
            diceLosses = ++diceLosses
            continue
        }
        if( roll < 5) {
            tryAgain = ++tryAgain
            continue;
        }
        goldCoins += roll;
        diceWins = ++diceWins
        alert('Congratulations, you win ' + roll + ' gold coins!' + '\n\n You now have ' + goldCoins + ' so far!');
        
    }
    alert ('You have won a total of ' + goldCoins +' gold coins!' + '\n\n Here is your results! \n\n You rolled 5 or 6: ' + diceWins + ' times, 4: ' + diceLosses + ' times, and 2 or 3: ' + tryAgain + ' times!')
}