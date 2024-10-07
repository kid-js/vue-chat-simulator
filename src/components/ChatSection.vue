<script setup>
import useSendMessage from '../use/useSendMessage';

const props = defineProps(['username', 'id']);
</script>

<template>
    <section class="chat" :data-id="props.id">
        <header class="chat__header">
            <h2 class="chat__title"> {{ props.username }} </h2>
        </header>

        <div class="messages-box"></div>

        <form class="chat__form" @submit.prevent="useSendMessage">
            <input id="message-text" type="text" name="message-text" required>
            <button type="submit"> Send </button>
        </form>
    </section>
</template>

<style>
.chat {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr auto;
    gap: 8px;

    height: 90svh;
    padding: 16px;
}

.chat__title {
    margin: 8px 0 12px;
}

.messages-box {
    display: grid;
    align-content: start;
    padding: 4px 0;
    border: 1px solid var(--color-border);
    border-radius: 4px;

    scrollbar-gutter: stable;
    overflow: hidden auto;
}

.messages-box::-webkit-scrollbar {
    width: 8px;
}

.messages-box::-webkit-scrollbar-track,
.messages-box::-webkit-scrollbar-thumb {
    border: solid 2px transparent;
    border-radius: 80px;
}

.messages-box::-webkit-scrollbar-thumb {
    box-shadow: inset 0 0 10px 10px #e4e4e4;
}

@supports not selector(::-webkit-scrollbar) {
    .messages-box {
        scrollbar-width: thin;
    }
}

.chat__form {
    display: grid;
    grid-template-columns: 1.5fr 0.5fr;
    gap: 8px;
    padding: 0 8px;
    margin-top: 20px;
}

.message {
    justify-self: start;
    padding: 8px 16px;
    margin: 4px 36px 4px 16px;
    border-radius: 6px 6px 6px 0;
    background-color: var(--color-message);

    text-wrap: pretty;
    word-break: break-word;
    position: relative;
    animation: message-in 0.2s ease-out;
}

.message.message_mine {
    justify-self: end;
    margin: 4px 16px 4px 36px;
    border-radius: 6px 6px 0 6px;
    background-color: var(--color-message-mine);
}

.message::before {
    --size: 16px;
    --color: var(--color-message);

    content: '';
    width: var(--size);
    height: var(--size);

    background-image: radial-gradient(
        circle at 100% 100%,
        transparent var(--size),
        var(--color) calc(var(--size) + 1px)
    );
    position: absolute;
    left: calc(0px - var(--size));
    bottom: 0;
    rotate: 180deg;
}

.message.message_mine::before {
    --color: var(--color-message-mine);

    left: unset;
    right: calc(0px - var(--size));
    rotate: -90deg;
}

@keyframes message-in {
    from {
        opacity: 0;
        translate: 16px;
    }
    to {
        opacity: 1;
        translate: 0;
    }
}
</style>
