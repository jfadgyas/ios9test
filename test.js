const bttn = document.querySelector('#btn')
const para = document.getElementById('text')

para.innerHTML = 'hello'


bttn.onclick = ()=>para.innerHTML='clicked'
