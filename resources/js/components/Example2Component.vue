<template>
    <div class="example2-component">
        <h1>Example2 Component</h1>
        <p>This is an example Vue component.</p>
        <p>It demonstrates the use of the Composition API in Vue 3.</p>
        <button @click="greet">Greet</button>
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    name: 'Example2Component',
    setup() {
        const message = ref('Hello from Example2 Component!');

        const greet = () => {
            alert(message.value);
        };

        return {
            message,
            greet
        };
    }
};
</script>

<style scoped>
.example2-component {
    text-align: center;
    margin-top: 20px;
}
</style>