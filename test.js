const bttn = document.querySelector('#btn')
const para = document.getElementById('text')
const div = document.querySelector('#divclick')

para.innerHTML = window.innerWidth
para.append(screen.width)

bttn.addEventListener('click', () => para.innerHTML='clicked')
div.addEventListener('click', () => para.innerHTML='div is clicked')
console.log('test')