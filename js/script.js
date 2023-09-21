const name = document.getElementById('name')
const email = document.getElementById('email')
const phoneNumber = document.getElementById('phoneNumber')
const country = document.getElementById('country')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')
let btnTerms = document.querySelector('#terms')
var isAgree = 0
var isError = 0

btnTerms.addEventListener('click', () => {
    btnTerms.style.backgroundColor='#4cae4c'
    isAgree = 1
})

form.addEventListener('submit', (e) =>{
    if (name.value === '' || name.value == null){
        alert("Name is required!")
        isError = 1;
    }

    if (email.value === '' || email.value == null){
        alert("Email is required!")
        isError = 1;
    }

    if (phoneNumber.value === '' || phoneNumber.value == null){
        alert("Phone number is required!")
        isError = 1;
    }

    if (phoneNumber.value.length <= 8){
        alert("Phone number must contain atleast 7 digits!")
        isError = 1;
    }

    if (phoneNumber.value.length >= 17){
        alert("Phone number must contain less than 16 digits!")
        isError = 1;
    }

    if (country.value === '' || country.value == null){
        alert("Country is required!")
        isError = 1;
    }

    if (isAgree == 0){
        alert("You must agree to the terms & conditions!")
        isError = 1;
    }

    if (isError == 1){
        e.preventDefault()
    }

    if(isError == 0){
        alert("Thankyou for subscribing!")
    }
})



