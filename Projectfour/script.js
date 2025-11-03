let randomNumber = (parseInt(Math.random() * 100 +1));

const submit = document.querySelector('#subm')
const userInput = document.querySelector('#guessfld')
const Previous = document.querySelector('.guesses')
const Remaining = document.querySelector('.lastResult')
const hilow = document.querySelector('.abc')
const divtag = document.querySelector('.resultpars')

const p = document.createElement('p')

let prevGuess = []
let numGuess = 1

let Playgame = true

if (Playgame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault()
        const guess = parseInt(userInput.value)
        console.log(guess);
        validateGuess(guess)
    })
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert('Enter Valid Number')
    } else if(guess < 1) {
        alert('Enter Valid Number')
    } 
     else if(guess > 100) {
        alert('Enter Valid Number')
    } else {
        prevGuess.push(guess)
        if (numGuess === 11) {
            displayguess(guess)
            displayMessage(`Game Over. Random Number was ${randomNumber}`)
            endGame()
        } else{
            displayguess(guess)
            CheckGuess(guess)
        }
    }
}

function CheckGuess(guess) {
    if (guess === randomNumber) {
        displayMessage("You Guessed it right")
    } else if (guess < randomNumber){
        displayMessage("Number is too Low...")
    }
    else if (guess > randomNumber){
        displayMessage("Number is too High...")
    }
}

function displayguess(guess) {
    userInput.value = ''
    Previous.innerHTML += `${guess} `
    numGuess++ 
    Remaining.innerHTML = `${11 - numGuess}`
}

function displayMessage(message) {
    hilow.innerHTML = `<h2>${message}</h2>`
}

function endGame() {
    userInput.value = ''
    userInput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML = '<h2 id="newgame">Start New Game</h2>'
    divtag.appendChild(p)
    Playgame =  false
    newGame()
}

function newGame() {
   const newgamebtn = document.querySelector('#newgame')
   newgamebtn.addEventListener('click', function (e) {
    randomNumber = (parseInt(Math.random() * 100 +1));
    prevGuess = []
    numGuess = 1
    Previous.innerHTML= ''
    Remaining.innerHTML = `${11 - numGuess}`
    userInput.removeAttribute('disabled')
    divtag.removeChild(p)
    Playgame = true
   })
}