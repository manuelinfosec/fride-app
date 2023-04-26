// signing up
const signup = document.getElementById("signup");
const firstName = document.getElementById("firstname");
const lastName = document.getElementById("lastname");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const password = document.getElementById("password");

if (signup) {
    signup.addEventListener("submit", (e) => {
        e.preventDefault();
        getSignupData();
    });
}

let datumTwo;

async function getSignupData() {
    const objectOne = {
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
        phone: phone.value,
        password: password.value
    }

    const response = await fetch("http://localhost:8080/register", {
        method: "post",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },

        body: JSON.stringify(objectOne)
    });
    const data = await response.json();
    datumTwo = data;
    location.href = "dashboard.html";
}

export default datumTwo;