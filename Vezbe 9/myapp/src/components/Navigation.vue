<template>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
</template>

<style scoped>
    nav {
        padding: 30px;
        background-color: lightgray;
    }

    nav a {
        font-weight: bold;
        color: #2c3e50;
    }

    nav a.router-link-exact-active {
        color: #42b983;
    }
</style>

<script>
    export default {
        name: "Navigation"
    }
</script>
