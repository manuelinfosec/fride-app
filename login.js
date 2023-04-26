// logging in
const login = document.getElementById("login");
const loginEmail = document.getElementById("loginEmail");
const loginPassword = document.getElementById("loginPassword");

let datumOne;

if (login) {
    login.addEventListener("submit", (e) => {
        e.preventDefault();
        getLoginData();
    });
}

async function getLoginData() {
    const objectThree = {
        email: loginEmail.value,
        password: loginPassword.value
    }

    const response = await fetch("http://localhost:8080/login", {
        method: "post",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },

        body: JSON.stringify(objectThree)
    });
    const data = await response.json();
    datumOne = data;
    location.href = "dashboard.html";
}

export default datumOne;