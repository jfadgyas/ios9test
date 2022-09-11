const bttn = document.querySelector('#btn')
const para = document.getElementById('text')
const div = document.querySelector('#divclick')

para.innerHTML = window.innerWidth
para.append(screen.width)

bttn.addEventListener('click', () => para.innerHTML='clicked')
div.addEventListener('click', () => para.innerHTML='div is clicked')
console.log('test')

// text scrolling
const cells = Array.from(document.querySelectorAll('.cella'))

cells.map(item => {
    // console.log(item)
    if (item.clientWidth < item.scrollWidth) item.classList.add('animate')
})

// hidden buttons under the row
const list = document.querySelector('#productlist')
list.addEventListener('click', e => {
    const item = e.target.closest('div')
    item.classList.toggle('moved')
    const btn = e.target.closest('button')
    console.log(btn)

})