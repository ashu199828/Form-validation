const name = document.getElementById('name')
const email = document.getElementById('email')
const phone = document.getElementById('phone')
let success = document.getElementById('success')
    let failure = document.getElementById('failure')
let validname = false
let validemail = false
let validphone = false
// failure.classList.display = 'none'
// success.classList.display = 'none'
// $(`#success`).hide();
// console.log(name,email,phone)
name.addEventListener('blur', ()=>{
    console.log('name is blurred')
    let regex = /^[a-zA-Z]([0-9a-zA-z]){2,20}$/
        let str = name.value
        console.log(regex,str)
        if (regex.test(str)){
            console.log('it matched')
            name.classList.remove('is-invalid')
            validname = true        }
        else{
            console.log('dont match')
            name.classList.add('is-invalid')
            validname = false
        }
})
email.addEventListener('blur', ()=>{
    console.log('email is blurred')
    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.a-zA-Z]+)\.([a-zA-Z]){2,7}$/
        let str = email.value
        console.log(regex,str)
        if (regex.test(str)){
            console.log('it matched')
            email.classList.remove('is-invalid')
             validemail = true
        }
        else{
            console.log('dont match')
            email.classList.add('is-invalid')
            validemail = false
        }
})
phone.addEventListener('blur', ()=>{
    console.log('phone is blurred')
    let regex = /^([0-9]){10}$/
        let str = phone.value
        console.log(regex,str)
        if (regex.test(str)){
            console.log('it matched')
            phone.classList.remove('is-invalid')
            validphone = true
        }
        else{
            console.log('dont match')
            phone.classList.add('is-invalid')
            validphone = false
        }
})

let submit = document.getElementById('submit')
submit.addEventListener('click', (e)=>{
    e.preventDefault();
    // let success = document.getElementById('success')
    // let failure = document.getElementById('failure')
    console.log('you have clicked on submit')
    if(validemail && validname && validphone){
        console.log('name,email and phone is valid. submitting the form')
        
    success.classList.add('show')
    failure.classList.remove('show')
    // $('#failure').hide()
    // $('#success').show()
    }
    else{
        console.log('one of name,email and phone is not valid. Hence not submitting the form')
        
    failure.classList.add('show')
    success.classList.remove('show')
    // $(`#success`).hide()
    // $(`#failure`).show()
    }

    
})
