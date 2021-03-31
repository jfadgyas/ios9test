const bttn = document.querySelector('#btn')
const para = document.getElementById('text')

para.innerHTML = 'hello'

bttn.addEventListener('click', () => para.innerHTML='clicked')
