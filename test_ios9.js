const bttn = document.querySelector('#btn')
const para = document.getElementById('text')
const div = document.querySelector('#divclick')

para.innerHTML = window.navigator.userAgent
// para.innerHTML = window.innerHeight
// para.innerHTML(screen.width)

bttn.addEventListener('touchstart', function ios9() {para.innerHTML='clicked'})
div.addEventListener('touchstart', function iosdiv() {para.innerHTML='div is clicked'})
console.log('test_ios')