/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
import { createApp } from 'vue';
import HomePage from './pages/HomePage.vue';
import Navbar from "./components/navbars/Navbar.vue";
/**
 * Next, we will create a fresh Vue application instance. You may then begin
 * registering pages with the application instance so they are ready
 * to use in your application's views. An example is included for you.
 */

const app = createApp({});

app.component('home-page', HomePage);
app.component('navbar', Navbar);

/**
 * The following block of code may be used to automatically register your
 * Vue pages. It will recursively scan this directory for the Vue
 * pages and automatically register them with their "basename".
 *
 * Eg. ./pages/ExampleComponent.vue -> <example-component></example-component>
 */

// Object.entries(import.meta.glob('./**/*.vue', { eager: true })).forEach(([path, definition]) => {
//     app.component(path.split('/').pop().replace(/\.\w+$/, ''), definition.default);
// });

/**
 * Finally, we will attach the application instance to a HTML element with
 * an "id" attribute of "app". This element is included with the "auth"
 * scaffolding. Otherwise, you will need to add an element yourself.
 */

app.mount('#app');
