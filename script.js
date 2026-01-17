let responses = {};

fetch("answers.json")
    .then(res => res.json())
    .then(data => responses = data)
    .catch(() => {
        console.error("Failed to load answers.json");
    });

function handleInput() {
    const inputField = document.getElementById("commandInput");
    const output = document.getElementById("output");

    const input = inputField.value.toLowerCase().trim();
    inputField.value = "";

    if (!responses.default) {
        output.textContent = "bruh.";
        return;
    }

    output.textContent = responses[input] || responses.default;
}

// Press Enter to submit
document.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        handleInput();
    }
});