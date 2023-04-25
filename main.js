const menu = document.querySelector(".menu");
const nav = document.querySelector(".nav");

menu.addEventListener("click", () => {
    nav.classList.toggle("open");
});

// signing up
const signup = document.getElementById("signup");
const firstName = document.getElementById("firstname");
const lastName = document.getElementById("lastname");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const password = document.getElementById("password");

signup.addEventListener("submit", (e) => {
    e.preventDefault();
    const objectOne = {
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
        phone: phone.value,
        password: password.value
    }

    fetch("https://ab8e-197-210-78-158.eu.ngrok.io/register", {
            method: "post",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },

            body: JSON.stringify(objectOne)
        })
        .then((response) => {
            console.log(response.json());
        });
    //`https://api.allorigins.win/get?url=${encodeURIComponent("https://f99f-197-210-85-211.eu.ngrok.io/signup")}`
});