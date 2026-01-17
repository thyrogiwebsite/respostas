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
    const output = document.getElementById("output");

    const input = inputField.value.toLowerCase().trim();
    inputField.value = "";

    output.textContent = responses[input] || responses.default;
}

document.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        handleInput();
    }
});