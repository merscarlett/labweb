function sendMessage(user) {
    const chatBox = document.getElementById('chatBox');
    let input;
    let userClass;
    if (user === 'User 1') {
        input = document.getElementById('user1Input');
        userClass = 'user1';
    } else {
        input = document.getElementById('user2Input');
        userClass = 'user2';
    }
    const messageText = input.value.trim();

    if (messageText !== '') {
        let messageElem = document.createElement("div");
        messageElem.innerHTML = `<b>${user}:</b><br>${messageText}`;
        messageElem.classList.add(userClass);
        chatBox.appendChild(messageElem);
        input.value = '';
        chatBox.scrollTop = chatBox.scrollHeight;
    }
}
