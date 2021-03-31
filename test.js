const bttn = document.querySelector('#btn')
const para = document.getElementById('text')

para.innerHTML = window.navigator.userAgent

bttn.addEventListener('click', () => para.innerHTML='clicked')
console.log('test')