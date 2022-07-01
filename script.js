let goods = document.querySelector('.good')
let bads = document.querySelector('.bad')
let father = document.querySelector('.father')
let btns = document.querySelector('button')
let inpts_all = []
let texts_all = []
let left = father.querySelector('.left')
let inpts_left = left.querySelectorAll('input')
let text_left = left.querySelectorAll('span')
let right = father.querySelector('.right')
let inpts_right = right.querySelectorAll('input')
let text_right = right.querySelectorAll('span')
inpts_all.push(...inpts_left, ...inpts_right)
texts_all.push(...text_left, ...text_right)
let num = []
let min = []
let pattern = {
    name: /^[a-z ,.'-]+$/i,
    surname: /^[0-9\-\+]{9,15}$/,
    phone: /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,
    email: /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"/
}
function validate(field, regex) {
    if(regex.test(field.value)) {
        field.style.borderColor = "green"
    } else {
        field.style.borderColor = "red"
    }
}
inpts_all.forEach(inpt => {
    btns.onclick = () => {
        num = 0
        min = 0
        inpts_all.forEach(item => {
            if (item.value.length >= 5) {
                item.classList.remove("input_error")
                item.classList.add("inp")
                btns.style.backgroundColor = "#4200FF"
                btns.style.border = "3px dashed #4200FF"
                btns.style.color = "white"
                num++
                goods.innerHTML = num
            } else {
                item.classList.remove("inp")
                item.classList.add("input_error")
                btns.style.backgroundColor = "red"
                btns.style.border = "5px solid #4200FF"
                btns.style.color = "white"
                min++
                bads.innerHTML = min
            }
        })
    }
})


