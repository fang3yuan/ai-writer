function sendMessage() {
    const input = document.getElementById("user-input");
    const chatBox = document.getElementById("chat-box");
    const message = input.value.trim();
    if (!message) return;

    const userMsg = document.createElement("p");
    userMsg.textContent = "You: " + message;
    chatBox.appendChild(userMsg);

    const botMsg = document.createElement("p");
    botMsg.textContent = "AI: " + "Thinking... (local model coming soon)";
    chatBox.appendChild(botMsg);

    input.value = "";
}