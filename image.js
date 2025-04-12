function generateImage() {
    const prompt = document.getElementById("image-prompt").value.trim();
    const output = document.getElementById("image-output");
    if (!prompt) return;

    const img = document.createElement("img");
    img.src = "https://via.placeholder.com/512?text=" + encodeURIComponent(prompt);
    img.alt = prompt;
    output.innerHTML = "";
    output.appendChild(img);
}