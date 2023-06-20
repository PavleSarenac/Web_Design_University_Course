<template>
    <div id="book">
        <hr>
        <b>Title:</b> {{mybook.title}}
        <hr>
        <i>
            Author: {{mybook.author}}
            Year: {{mybook.publishYear}}
            Desc: {{mybook.description}}
        </i>
    </div>
</template>

<script>
    export default {
        name: "Book",
        props: [
            "mybook"
        ]
    }
</script>
