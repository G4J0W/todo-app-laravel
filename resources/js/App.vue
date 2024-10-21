<template>
  <div id="app" class="flex flex-col min-h-screen">
    <header class="bg-gray-800 text-white py-4">
      <h1 class="text-3xl font-bold">Moja aplikacja SPA</h1>
      <nav class="mt-4">
        <ul class="flex justify-center space-x-6">
          <li><button @click="goToExample1" class="hover:text-green-400">Example Component</button></li>
          <li><button @click="goToExample2" class="hover:text-green-400">Example 2 Component</button></li>
        </ul>
      </nav>
    </header>

    <main class="flex-grow p-8">
      <!-- Miejsce, gdzie Vue Router wstawi odpowiednie komponenty -->
      <router-view></router-view>
    </main>

    <footer class="bg-gray-800 text-white py-4 text-center">
      <p>&copy; 2024 Moja Aplikacja. Wszystkie prawa zastrzeżone.</p>
    </footer>
  </div>
</template>


<script setup>
import { useRouter } from 'vue-router';

// Inicjujemy router
const router = useRouter();

// Definiujemy funkcje do programowego przekierowania
const goToExample1 = () => {
  router.push('/ExampleComponent');  // Przekierowanie na ExampleComponent
};

const goToExample2 = () => {
  router.push('/ExampleComponent2');  // Przekierowanie na Example2Component
};
</script>


<style scoped>
/* Dodajemy to tylko po to, by min-height: 100vh działał */
html, body {
  height: 100%;
  margin: 0;
}
</style>
