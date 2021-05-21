box = document.querySelector('#dragbox')

const ts = e => {
    // e.preventDefault()
    console.log('start')
    box.innerHTML='start'
}

const tm = e => {
    // e.preventDefault()
    console.log('move')
    box.innerHTML='move'
}

const te = e => {
    // e.preventDefault()
    console.log('end')
    box.innerHTML='end'
}

box.addEventListener('touchstart', ts)
box.addEventListener('touchend', te)
box.addEventListener('touchmove', tm)
box.addEventListener('mousedown', ts)
box.addEventListener('mouseup', te)
box.addEventListener('mousemove', tm)
