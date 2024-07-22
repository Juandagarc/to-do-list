<script setup>

</script>

<template>
    <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
        <h1 class="text-4xl font-bold text-gray-800 mb-4">
            Stay on top of your tasks
        </h1>
        <p class="text-lg text-gray-600 mb-8">
            Effortlessly manage your to-do list and boost your productivity with our clean and intuitive app.
        </p>
        <img
            src="https://via.placeholder.com/400x300"
            alt="To-Do List"
            class="w-full max-w-md mb-8 rounded-lg shadow-lg"
        />
        <a
            href="/tasks"
            class="bg-blue-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-600"
        >
            Get started
        </a>
    </div>
</template>

<script>
export default {
    mounted() {
        console.log('Component mounted.')
    }
}
</script>
