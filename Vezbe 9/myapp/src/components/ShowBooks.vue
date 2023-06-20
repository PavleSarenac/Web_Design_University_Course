<template>
    <div id="showBooks">
        <table>
            <tr v-for="book in books" :key="book.id">
                <td>
                    <router-link :to="'/bookDetails/' + book.id">
                        <Book :mybook="book"></Book>
                    </router-link>
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
    import Book from "@/components/Book.vue"
    import allBooks from "@/data/books.js"

    export default {
        name: "ShowBooks",
        components: {
            Book
        },
        data() {
            return {
                books: allBooks
            }
        }
    }
</script>
