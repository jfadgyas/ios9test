const form = document.querySelector('#frm')
const button = document.querySelector('#send')

const validate = e => {
    e.preventDefault()
    let z=Array.from(form.querySelectorAll('input'))
    z.map(item => {
        console.log(item.validity)
        if (item.validity.valueMissing){
            item.setCustomValidity('hello')
            item.reportValidity()
        }
        else {
            item.setCustomValidity('')
            item.reportValidity()
        }
    })
}

button.addEventListener('click', validate)