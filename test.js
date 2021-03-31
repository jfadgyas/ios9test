const bttn = document.querySelector('#btn')
const para = document.getElementById('text')

para.innerHTML = 'hello'

bttn.addEventListener('touchstart', function ts() {para.innerHTML='clicked'})
