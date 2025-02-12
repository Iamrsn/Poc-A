document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form"),
          nextBtn = document.querySelector(".nextBtn"),
          backBtn = document.querySelector(".backBtn"),
          submitBtn = document.querySelector(".sumbit"),
          allInputs = document.querySelectorAll("input, select");

    // Function to check if all required fields in a section are filled
    function areFieldsFilled(inputs) {
        return [...inputs].every(input => input.value.trim() !== "");
    }

    // Load stored data from localStorage
    function loadStoredData() {
        allInputs.forEach(input => {
            const storedValue = localStorage.getItem(input.name);
            if (storedValue) input.value = storedValue;
        });
    }

    // Store input values in localStorage on input change
    function storeData() {
        allInputs.forEach(input => {
            input.addEventListener("input", () => {
                localStorage.setItem(input.name, input.value);
            });
        });
    }

    // Handle "Next" button click (validate before moving)
    nextBtn.addEventListener("click", (e) => {
        e.preventDefault();
        const firstInputs = document.querySelectorAll(".first input, .first select");

        if (areFieldsFilled(firstInputs)) {
            form.classList.add('secActive'); // Move to the second form step
        } else {
            alert("Please fill out all fields before proceeding.");
        }
    });

    // Handle "Back" button click (navigate back)
    backBtn.addEventListener("click", (e) => {
        e.preventDefault();
        form.classList.remove('secActive'); // Move back to the first form step
    });

    // Handle form submission
    submitBtn.addEventListener("click", (e) => {
        e.preventDefault();
        const secondInputs = document.querySelectorAll(".second input");

        if (areFieldsFilled(secondInputs)) {
            alert("Form submitted successfully!");
            localStorage.clear(); // Clear localStorage after submission
            form.reset(); // Reset form fields
        } else {
            alert("Please fill out all fields before submitting.");
        }
    });

    // Initialize localStorage handlers
    loadStoredData();
    storeData();
});
