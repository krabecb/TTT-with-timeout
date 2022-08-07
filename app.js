const current = [ '', '', '', '', '', '', '', '', '']
let turnTracker = 'X'

const allSquares = document.querySelectorAll('.square')

function updateTracker() {
    if (turnTracker === 'X') {
        turnTracker = 'O'
    } else {
        turnTracker = 'X'
    }
}

function selectSquare(e) {
    if (e.target.innerHTML) return console.log("A value already exists!")
    switch (e.target.className) {
        case 'square zero':
            e.target.innerHTML = turnTracker
            current[0] = turnTracker
        case 'square one':
            e.target.innerHTML = turnTracker
            current[1] = turnTracker
        case 'square two':
            e.target.innerHTML = turnTracker
            current[2] = turnTracker
        case 'square three':
            e.target.innerHTML = turnTracker
            current[3] = turnTracker
        case 'square four':
            e.target.innerHTML = turnTracker
            current[4] = turnTracker
        case 'square five':
            e.target.innerHTML = turnTracker
            current[5] = turnTracker
        case 'square six':
            e.target.innerHTML = turnTracker
            current[6] = turnTracker
        case 'square seven':
            e.target.innerHTML = turnTracker
            current[7] = turnTracker
        case 'square eight':
            e.target.innerHTML = turnTracker
            current[8] = turnTracker
        break;
    }
    updateTracker()
}

allSquares.forEach( square => {
    square.addEventListener('click', (e) => {
        selectSquare(e)
    })
})
