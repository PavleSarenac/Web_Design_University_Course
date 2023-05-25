<template>
  <div>
    <h3>{{ book.title }}</h3>
    <hr />
    <img :src="'/images/book' + book.id + '.jpg'" alt="" />
  </div>
</template>

<style scoped>
img {
  width: 100px;
  height: 100px;
}
</style>

<script>
import allBooks from "../data/books.js";

export default {
  name: "BookDetails",
  created() {
    var bookId = Number(this.$route.params.id);
    this.book = this.books.find((book) => book.id == bookId);
  },
  data() {
    return {
      books: allBooks,
      book: {},
    };
  },
};
</script>
