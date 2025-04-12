function sendToAI() {
    const inputText = document.getElementById('inputText').value;
    document.getElementById('response').innerText = "AI Response: " + inputText;
}

function generateImage() {
    const imageDescription = document.getElementById('imageInput').value;
    document.getElementById('imageResult').innerText = "Generated Image for: " + imageDescription;
}
