import datumOne from "./login.js";
import datumTwo from "./signup.js";

// dashboard stuff
const name = document.getElementById("name");
if (datumOne) {
    updateDashboard(datumOne);
} else {
    updateDashboard(datumTwo);
}

async function updateDashboard(data) {
    const objectTwo = {
        email: data.email
    }

    const response = await fetch("http://localhost:8080/dashboard", {
        method: "get",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },

        body: JSON.stringify(objectTwo)
    });
    const datum = await response.json();
    name.textContent = datum.firstName;
}