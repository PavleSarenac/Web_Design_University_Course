<template>
  <div id="book">
    <hr />
    <b>Title:</b> {{ myBook.title }}
    <hr />
    <i>
      Author: {{ myBook.author }} Year: {{ myBook.publishYear }} Desc:
      {{ myBook.description }}
    </i>
  </div>
</template>

<script>
export default {
  name: "Book",
  props: ["myBook"],
};
</script>