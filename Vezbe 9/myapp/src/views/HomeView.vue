<template>
  <div class="home">
    <h1 :class="h1class">
      Welcome to our online bookstore {{ bookStoreName }}
    </h1>
    <br />
    <button class="btn btn-success">Sign in</button>
    <hr />
    <show-books></show-books>
  </div>
</template>

<style>
.extraClass {
  color: darkgreen;
}
</style>

<script>
import ShowBooks from "../components/ShowBooks.vue";
export default {
  components: { ShowBooks },
  name: "Home",
  data() {
    return {
      bookStoreName: "Booka",
      h1class: "extraClass",
    };
  },
};
</script>
