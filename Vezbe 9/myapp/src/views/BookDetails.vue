<template>
    <div>
        <h3>{{book.title}}</h3>
        <hr>
        <img :src="'/images/book' + book.id + '.png'" alt="">
    </div>
</template>

<style scoped>
    img {
        width: 25vw;
        height: 25vw;
    }
</style>

<script>
    import allBooks from "../data/books.js"

    export default {
        name: "BookDetails",
        created() {
            let bookId = Number(this.$route.params.id);
            this.book = this.books.find(book => book.id == bookId)
        },
        data() {
            return {
                books: allBooks,
                book: {}
            }
        }
    }
</script>
