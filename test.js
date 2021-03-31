const bttn = document.querySelector('#btn')
const para = document.getElementById('text')

para.innerHTML = window.navigator.userAgent

bttn.addEventListener('touchstart', () => para.innerHTML='clicked')
