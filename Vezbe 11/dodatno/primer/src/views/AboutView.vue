<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button class="ok">OK</button>
    <button class="cancel">CANCEL</button>
  </div>
</template>

<style lang="less" scoped>
  @bg: lightgreen;

  h1 {
    background-color: @bg;
    color: multiply(red, lightgreen);
  }

  .ok {
    font-weight: bold;
  }

  .cancel:extend(.ok) {
    font-style: italic;
  }
</style>