const allSquares = document.querySelectorAll('.square')

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

function checkLoss() {
    for (let i = 0; i < winConditions.length; i++) {
        for (let j = 0; j < winConditions[i].length; j++) {
            if (current[winConditions[i][j]] !== 'O') {
                nemesisPoint = 0
                break
            }
            nemesisPoint += 1
            if (nemesisPoint === 3) {
                document.querySelector('main').className = "dissapear"
                let loseText = document.createElement('h2')
                loseText.innerHTML = "You lost!"
                document.querySelector('section').appendChild(loseText)
                loseText.className = 'move'
                return
            }
        }
    }
}

function checkWin() {
    for (let i = 0; i < winConditions.length; i++) {
        for (let j = 0; j < winConditions[i].length; j++) {
            if (current[winConditions[i][j]] !== 'X') {
                pass = 0
                break
            }
            pass += 1
            if (pass === 3) {
                document.querySelector('main').className = "dissapear"
                let winText = document.createElement('h2')
                winText.innerHTML = "You actually won? :)"
                document.querySelector('section').appendChild(winText)
                winText.className = "move"
                return
            }
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
            setTimeout( () => {
                e.target.innerHTML = ''
                current[0] = ''
            }, 3000)
            break
        case 'square one':
            e.target.innerHTML = turnTracker
            current[1] = turnTracker
            setTimeout( () => {
                e.target.innerHTML = ''
                current[1] = ''
            }, 3000)
            break
        case 'square two':
            e.target.innerHTML = turnTracker
            current[2] = turnTracker
            setTimeout( () => {
                e.target.innerHTML = ''
                current[2] = ''
            }, 3000)
            break
        case 'square three':
            e.target.innerHTML = turnTracker
            current[3] = turnTracker
            setTimeout( () => {
                e.target.innerHTML = ''
                current[3] = ''
            }, 3000)
            break
        case 'square four':
            e.target.innerHTML = turnTracker
            current[4] = turnTracker
            setTimeout( () => {
                e.target.innerHTML = ''
                current[4] = ''
            }, 3000)
            break
        case 'square five':
            e.target.innerHTML = turnTracker
            current[5] = turnTracker
            setTimeout( () => {
                e.target.innerHTML = ''
                current[5] = ''
            }, 3000)
            break
        case 'square six':
            e.target.innerHTML = turnTracker
            current[6] = turnTracker
            setTimeout( () => {
                e.target.innerHTML = ''
                current[6] = ''
            }, 3000)
            break
        case 'square seven':
            e.target.innerHTML = turnTracker
            current[7] = turnTracker
            setTimeout( () => {
                e.target.innerHTML = ''
                current[7] = ''
            }, 3000)
            break
        case 'square eight':
            e.target.innerHTML = turnTracker
            current[8] = turnTracker
            setTimeout( () => {
                e.target.innerHTML = ''
                current[8] = ''
            }, 3000)
    }
    updateTracker()
    checkWin()
}

allSquares.forEach( square => {
    square.addEventListener('click', (e) => {
        selectSquare(e)
    })
})