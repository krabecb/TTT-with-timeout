const current = [ '', '', '', '', '', '', '', '', '']

const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [0, 4, 8]
]

let turnTracker = 'X'
let pass = 0
let nemesisPoint = 0
let squaresClicked = 0

const allSquares = document.querySelectorAll('.square')

function updateTracker() {
    if (turnTracker === 'X') {
        turnTracker = 'O'
    } else {
        turnTracker = 'X'
    }
}

function createWin() {
    console.log("Winner!")
}

function checkTie() {
    if (squaresClicked === 8) console.log("It's a TIE!!!")
}

function checkLoss() {
    for (let i = 0; i < winConditions.length; i++) {
        for (let j = 0; j < winConditions[i].length; j++) {
            if (current[winConditions[i][j]] !== 'O') {
                nemesisPoint = 0
                break
            }
            nemesisPoint += 1
            if (nemesisPoint === 3) return console.log("YOU! LOOOOOSE!")
        }
    }
    checkTie()
}

function checkWin() {
    for (let i = 0; i < winConditions.length; i++) {
        for (let j = 0; j < winConditions[i].length; j++) {
            if (current[winConditions[i][j]] !== 'X') {
                pass = 0
                break
            }
            pass += 1
            if (pass === 3) return console.log("WINNER!")
        }
    }
    checkLoss()
}

function selectSquare(e) {
    if (e.target.innerHTML) return console.log("A value already exists!")
    switch (e.target.className) {
        case 'square zero':
            e.target.innerHTML = turnTracker
            current[0] = turnTracker
            break
        case 'square one':
            e.target.innerHTML = turnTracker
            current[1] = turnTracker
            break
        case 'square two':
            e.target.innerHTML = turnTracker
            current[2] = turnTracker
            break
        case 'square three':
            e.target.innerHTML = turnTracker
            current[3] = turnTracker
            break
        case 'square four':
            e.target.innerHTML = turnTracker
            current[4] = turnTracker
            break
        case 'square five':
            e.target.innerHTML = turnTracker
            current[5] = turnTracker
            break
        case 'square six':
            e.target.innerHTML = turnTracker
            current[6] = turnTracker
            break
        case 'square seven':
            e.target.innerHTML = turnTracker
            current[7] = turnTracker
            break
        case 'square eight':
            e.target.innerHTML = turnTracker
            current[8] = turnTracker
    }
    updateTracker()
    checkWin()
}

allSquares.forEach( square => {
    square.addEventListener('click', (e) => {
        selectSquare(e)
        squaresClicked += 1
    })
})
