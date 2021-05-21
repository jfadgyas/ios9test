box = document.querySelector('#dragbox')

const ts = e => {
    e.preventDefault()
    console.log('start')
}

const tm = e => {
    e.preventDefault()
    console.log('move')
}

const te = e => {
    e.preventDefault()
    console.log('end')
}

box.addEventListener('touchstart', (e) => ts(e))
box.addEventListener('touchend', (e) => te(e))
box.addEventListener('touchmove', (e) => tm(e))
box.addEventListener('mousedown', (e) => ts(e))
box.addEventListener('mouseup', (e) => te(e))
box.addEventListener('mousemove', (e) => tm(e))
