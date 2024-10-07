<script setup>
import { nanoid } from 'nanoid';
import ChatSection from './components/ChatSection.vue';
</script>

<template>
    <div class="wrapper">
        <main class="main">
            <ChatSection :id="nanoid()" username="User 1" />
            <ChatSection :id="nanoid()" username="User 2" />
            <ChatSection :id="nanoid()" username="User 3" />
            <ChatSection :id="nanoid()" username="User 4" />
        </main>
    </div>
</template>

<style>
.wrapper {
    max-width: 1080px;
    margin: 0 auto;
}

.main {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}
</style>
