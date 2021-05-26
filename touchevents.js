box = document.querySelector('#dragbox')


document.addEventListener('dragstart', e => e.preventDefault())

const ts = e => {
    // e.preventDefault()
    console.log('start')
    console.log(e)
    // box.innerHTML= e.touches[0].clientX
}

const tm = e => {
    // e.preventDefault()
    console.log('move')
    // box.innerHTML='move'
}

const te = e => {
    // e.preventDefault()
    console.log(e)
    // box.innerHTML= e.changedTouches[0].clientX
}

box.addEventListener('touchstart', ts)
box.addEventListener('touchend', te)
box.addEventListener('touchmove', tm)
box.addEventListener('mousedown', ts)
box.addEventListener('mouseup', te)
box.addEventListener('mouseleave', te)
box.addEventListener('mousemove', tm)
