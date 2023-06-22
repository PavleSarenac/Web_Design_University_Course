<template>
    <div>
        <ul>
            <li v-for="book in myBooks" :key="book.id">
                {{book.title}}
            </li>
        </ul>
    </div>
</template>

<script>
    import allBooks from "../data/books.js"

    export default {
        name: "User",
        data() {
            return {
                myBooks: []
            }
        },
        created() {
            const NUMBER_OF_MILLISECONDS_IN_ONE_SECOND = 1000;
            const NUMBER_OF_SECONDS_IN_ONE_MINUTE = 60;
            const NUMBER_OF_MINUTES_IN_ONE_HOUR = 60;
            const NUMBER_OF_HOURS_IN_ONE_DAY = 24;

            for (let i = 0; i < allBooks.length; i++) {
                let today = new Date();

                let bookDateString = allBooks[i].publishYear.split("-");
                let day = parseInt(bookDateString[0]);
                let month = parseInt(bookDateString[1]) - 1;
                let year = parseInt(bookDateString[2]);

                let bookDate = new Date(year, month, day);

                let difference = today.getTime() - bookDate.getTime();  // u milisekundama
                difference = difference / (NUMBER_OF_MILLISECONDS_IN_ONE_SECOND * NUMBER_OF_SECONDS_IN_ONE_MINUTE * NUMBER_OF_MINUTES_IN_ONE_HOUR * NUMBER_OF_HOURS_IN_ONE_DAY);  // pretvaramo milisekunde u dane
                if (difference < 10) {
                    this.myBooks.push(allBooks[i]);
                }
            }
        }
    }
</script>
