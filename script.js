let responses = {};

fetch("answers.json")
    .then(res => res.json())
    .then(data => {
        responses = data;
        console.log("Answers loaded:", responses);
    })
    .catch(err => {
        console.error("Failed to load answers.json", err);
    });

function handleInput() {
    const inputField = document.getElementById("commandInput");

    const input = inputField.value.toLowerCase().trim();
    inputField.value = "";

    const text = responses[input] || responses.default;
    setTimeout(() => showText(text), 400);
}

let fadeTimeout = null;

function showText(text) {
    const output = document.getElementById("output");

    // Instantly cancel fade
    if (fadeTimeout) {
        clearTimeout(fadeTimeout);
        fadeTimeout = null;
    }

    // Reset instantly
    output.style.transition = "none";
    output.style.opacity = "1";
    output.textContent = text;

    // Force reflow so transition reset applies
    void output.offsetWidth;

    // Restore transition
    output.style.transition = "opacity 1s ease";

    // Start fade after delay
    fadeTimeout = setTimeout(() => {
        output.style.opacity = "0";
    }, 3000); // visible for 3 seconds
}


document.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        handleInput();
    }
});