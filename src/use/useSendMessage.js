const messagesBoxes = document.getElementsByClassName('messages-box');

const consoleError = () => {
    // eslint-disable-next-line no-console
    console.error(
        'Needed HTML selectors or data attributes have not been found',
    );
};

export default function sendMessage(e) {
    const form = e.target;
    const message = form['message-text']?.value;
    const userId = form.closest('.chat')?.dataset.id;

    if (!message || !userId) {
        consoleError();
        return;
    }

    for (const messagesBox of messagesBoxes) {
        const chatId = messagesBox.closest('.chat')?.dataset.id;
        const messageElem = document.createElement('p');

        if (!chatId) {
            consoleError();
            return;
        }

        messageElem.classList.add('message');
        messageElem.textContent = message;

        messagesBox.append(messageElem);

        if (chatId === userId) {
            const lastMessage = messagesBox.querySelector(
                '.message:last-of-type',
            );

            messageElem.classList.add('message_mine');

            messagesBox.scrollTo({
                top: lastMessage.offsetTop + lastMessage.offsetHeight,
                behavior: 'smooth',
            });
        }

        form.reset();
    }
}
