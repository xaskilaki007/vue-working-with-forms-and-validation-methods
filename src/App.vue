<template>
    <NavBar />
    <router-view />
</template>

<script>
import NavBar from './components/NavBar.vue';
export default {
    name: 'App',
    components: {
        NavBar
    }
}
</script>

<style>
@import "../node_modules/bootstrap/dist/css/bootstrap.css";
body {
    background-color: #e2e3e5;
}
</style>