box = document.querySelector('#dragbox')

const ts = e => {
    // e.preventDefault()
    console.log('start')
    box.innerHTML= e.touches[0].clientX
}

const tm = e => {
    // e.preventDefault()
    console.log('move')
    box.innerHTML='move'
}

const te = e => {
    // e.preventDefault()
    console.log('end')
    box.innerHTML= e.touches[0].clientX
}

box.addEventListener('touchstart', ts)
box.addEventListener('touchend', te)
box.addEventListener('touchmove', tm)
box.addEventListener('mousedown', ts)
box.addEventListener('mouseup', te)
// box.addEventListener('mousemove', tm)
