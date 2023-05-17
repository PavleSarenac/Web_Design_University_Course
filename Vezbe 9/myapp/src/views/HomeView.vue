<template>
  <div class="home">
    <h1 :class="h1class">Welcome to our online bookstore {{bookStoreName}}</h1>
    <br>
    <button class="btn btn-success">Sign in</button>
  </div>
</template>

<style>
  .extraClass {
    color: darkgreen
  }
</style>

<script>
  export default {
    name: "Home",
    data() {
      return {
        bookStoreName: "Booka",
        h1class: "extraClass"
      }
    }
  }
</script>
