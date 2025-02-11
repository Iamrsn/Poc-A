document.addEventListener("DOMContentLoaded", function () {
    if (localStorage.getItem("name")) {
        document.getElementById("name").innerText = localStorage.getItem("name");
    }

    if (localStorage.getItem("number")) {
        document.getElementById("number").innerText = localStorage.getItem("number");
    }

    if (localStorage.getItem("email")) {
        document.getElementById("email").innerText = localStorage.getItem("email");
    }

    if (localStorage.getItem("address")) {
        document.getElementById("address").innerText = localStorage.getItem("address");
    }
});

function changeName() {
    let newName = prompt("Enter your new name:");
    if (newName) {
        document.getElementById("name").innerText = newName;
        localStorage.setItem("name", newName);
    }
}

function changeDetails() {
    let newNumber = prompt("Enter new number:");
    let newEmail = prompt("Enter new email:");
    let newAddress = prompt("Enter new address:");

    if (newNumber && newEmail && newAddress) {
        document.getElementById("number").innerText = newNumber;
        document.getElementById("email").innerText = newEmail;
        document.getElementById("address").innerText = newAddress;

        localStorage.setItem("number", newNumber);
        localStorage.setItem("email", newEmail);
        localStorage.setItem("address", newAddress);
    }
}


// localStorage.clear();