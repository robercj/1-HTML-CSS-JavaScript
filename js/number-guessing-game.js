function runGame() {
    target = Math.floor(Math.random() * 100) + 1;
    let guessString= '' ;
    let guessNumber= 0 ;
    let correct = false ;
    let numTries = 0 ;
    while(!correct) {
        guessString = prompt('What number am I thinking of?');
        if(guessString === null) {
            return;
        }
        numTries = ++numTries;
        guessNumber = +guessString;
        correct = checkGuess(guessNumber,target)
    }
    alert('You got it, dude! and it only took ' + numTries + ' tries!')
};
function checkGuess(guessNumber,target) {
    let correct = false;
    if(isNaN(guessNumber)) {
        alert('ERROR: Must be a number!')
    }
    else if((guessNumber < 1 || guessNumber > 100)) {
        alert('Number is out of range!')
    }
    else if((guessNumber) < (target)) {
        alert('Number is too low!')
    }
    else if ((guessNumber) > (target)) {
        alert('Number is too high!')
    }
    else {
        correct = true
    }
    return correct;
}