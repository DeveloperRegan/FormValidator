const form = document.getElementById("form")
const passwordEl1 = document.getElementById("password1")
const passwordEl2 = document.getElementById("password2")
const messageContainer = document.querySelector('.message-container')
const message = document.getElementById('message')

let isValid = false;
let passwordMatch =false;

function validateForm(){
  //using Constraint API
  isValid = form.checkValidity();
  if(!isValid) {
    message.textContent = 'Please fill out all fields.';
    message.style.color = 'red';
    messageContainer.style.borderColor = 'red';
    return
  }
  passwordMatch = passwordEl2.value === passwordEl2.value
  if(passwordMatch){
    passwordEl1.style.borderColor = 'green';
    passwordEl2.style.borderColor = 'green';

  } else{
    message.textContent = "Make sure passwords match.";
    messageContainer.style.borderColor = 'red';
    passwordEl1.style.borderColor = 'red';
    passwordEl2.style.borderColor = 'red';
    return
  }
//if form is valid and passwords match
  if(isValid && passwordMatch){
    message.textContent = 'Successfully Registered!'
    message.style.color = 'green';
    messageContainer.style.borderColor = 'green';
  }
}

function storeFormData(){
  const user = {
    name: form.name.value,
    phone: form.phone.value,
    email: form.email.value,
    website: form.website.value,
    password: form.password.value
  };

  //Since this is a form demo, we won't send it to a server
  console.log(user);
}
function processFormData(e) {
  e.preventDefault();
  validateForm();
  //style Main message for an error
  if(isValid && passwordMatch){
    storeFormData();
  }
}

//Event listener
form.addEventListener('submit', processFormData)
