<template>
  <div id="showBooks">
    <table>
      <tr v-for="book in books" :key="book.id">
        <td>
          <Book :myBook="book"></Book>
        </td>
      </tr>
    </table>
  </div>
</template>

<style scoped>
#showBooks {
  display: flex;
  justify-content: center;
}

#showBooks table {
  align-self: center;
}
</style>

<script>
import Book from "./Book.vue";
import allBooks from "../data/books.js";

export default {
  name: "ShowBooks",
  components: {
    Book,
  },
  data() {
    return {
      books: allBooks,
    };
  },
};
</script>
