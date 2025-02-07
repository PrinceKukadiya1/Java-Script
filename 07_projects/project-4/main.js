let randm = parseInt(Math.random() * 100 +1);

const submit = document.getElementById('subt');
const userinput = document.getElementById('guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const loworhi = document.querySelector('.lowOrHi')
const startover = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuess = [];
let numGuess = 1;

let playgame =true;

if (playgame) {
    submit.addEventListener('click',function(e){
        e.preventDefault()
        const guess = parseInt(userinput.value)
        validguess(guess)
    })  
}

function validguess (guess){
    if (isNaN(guess)) {
        alert('please enter a valid number.')
    }
    else if(guess < 1){
        alert('please enter a valid number.')
    }  
    else if(guess > 100){
        alert('please enter a valid number.')
    }
    else{
        prevGuess.push(guess)
        if(numGuess === 10){
            displayguess(guess)
            displaymessage(`Game Over. Random Number was ${randm}`)
            endgame()
        }
        else{
            displayguess(guess)
            checkguess(guess)
        }
    }
}

function checkguess(guess){
    if(guess === randm){
        displaymessage(`You Guess the Right Number.`)
        endgame()
    }
    else if(guess < randm){
        displaymessage(`Your Guess Number is smaller then random number.`)
    }
    else if(guess > randm){
        displaymessage(`Your Guess Number is bigger then random number.`)
    }
}

function displayguess(guess){
    userinput.value =""
    guessSlot.innerHTML += `${guess} , `
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`
}

function displaymessage(message){
    loworhi.innerHTML = `<h2>${message}</h2>`
}

function endgame(){
    userinput.value = ""
    userinput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id = "newgame"> Start New Game </h2>`
    startover.appendChild(p)
    playgame = false;
    newgame()
}

function newgame(){
    const newbutton = document.getElementById('newgame')
    newbutton.addEventListener('click' , function(e){
        randm = parseInt(Math.random() * 100 +1);
        prevGuess = []
        numGuess = 1
        guessSlot.innerHTML = ""
        remaining.innerHTML = `${11 - numGuess}`
        userinput.removeAttribute('ddisabled')
        startover.removeChild(p)
        playgame = true;
    })
}