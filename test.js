const bttn = document.querySelector('#btn')
const para = document.getElementById('text')

para.innerHTML = window.navigator.userAgent

bttn.addEventListener('touchstart', function ts() {para.innerHTML='clicked'})
