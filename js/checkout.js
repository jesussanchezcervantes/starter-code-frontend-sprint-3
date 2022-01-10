/*Regular Expressions. Las expresiones regulares (a menudo llamadas RegExp o RegEx) son patrones que se utilizan 
para hacer coincidir combinaciones de caracteres en cadenas */

const regText = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
const regPassword = /^.{4,12}$/;
const regEmail =  /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
const regPhone = /^\d{7,14}$/;

const form = document.getElementById("form");
const firstName = document.getElementById("firstName");
const email = document.getElementById("email");
const address = document.getElementById("address");
const lastName = document.getElementById("lastName");
const password = document.getElementById("password");
const phone = document.getElementById("phone");

// Get the error elements
var errorFirstName = document.getElementById("errorFirstName");
var errorLastName = document.getElementById('errorLastName'); 
var errorEmail = document.getElementById("errorEmail");
var errorPassword = document.getElementById("errorPassword");
var errorPhone = document.getElementById('errorPhone'); 


// Exercise 6
function validate() {
    // Validate fields entered by the user: name, phone, password, and email
   
    var elements = document.querySelectorAll("._input"); //he añadido la clase "input" a todos los campos para poder recorrerlos.
    for (var i = 0, element; element = elements[i++];) {
        if(element.value === '' || element.value.length >= 3) {
            element.className += " input-invalid";
        }
        else {
            element.classList.remove ('input-invalid');
        }
    }

    //FirstName
     if(regText.test(firstName.value) === false) {
        firstName.className += " input-invalid";
        errorFirstName.style.display = 'block';
    }
    else {
        firstName.classList.remove ('input-invalid');
        errorFirstName.style.display = 'none';
    }
    //Email
    if(regEmail.test(email.value) === false) {
        email.className += " input-invalid";
        errorEmail.style.display = 'block';
    }
    else {
        email.classList.remove ('input-invalid');
        errorEmail.style.display = 'none';
    }
    //LastName
    if(regText.test(lastName.value) === false) {
        lastName.className += " input-invalid";
        errorLastName.style.display = 'block';
    }
    else {
        lastName.classList.remove ('input-invalid');
        errorLastName.style.display = 'none';
    }
    //Password
    if(regPassword.test(password.value) === false) {
        password.className += " input-invalid";
        errorPassword.style.display = 'block';
    }
    else {
        password.classList.remove ('input-invalid');
        errorPassword.style.display = 'none';
    }
    //Phone
     if(regPhone.test(phone.value) === false) {
        phone.className += " input-invalid";
        errorPhone.style.display = 'block';
    }
    else {
        phone.classList.remove ('input-invalid');
        errorPhone.style.display = 'none';
    }
}