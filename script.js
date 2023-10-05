document.getElementById("survey-form").addEventListener("submit", function (event) {
    // Validate email format using a regular expression
    const emailInput = document.getElementById("email");
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(emailInput.value)) {
        alert("Please enter a valid email address.");
        event.preventDefault(); // Prevent form submission
        return;
    }

    // Validate number input within the specified range
    const numberInput = document.getElementById("number");
    const min = parseInt(numberInput.min, 10);
    const max = parseInt(numberInput.max, 10);
    const enteredNumber = parseInt(numberInput.value, 10);
    if (enteredNumber < min || enteredNumber > max) {
        alert(`Please enter a number between ${min} and ${max}.`);
        event.preventDefault(); // Prevent form submission
        return;
    }

    // You can add more validation logic here if needed

    // Form submission logic (replace with your actual submission code)
    alert("Form submitted successfully!");
});
