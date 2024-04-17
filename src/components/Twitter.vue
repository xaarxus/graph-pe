<template>
  <div class="container">
    <div class="channels">
      <h3>Channels</h3>
    </div>
    <hr class="hr" />
    <div class="feeds">
      <h3>Feeds</h3>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-content: center;
  min-height: 1000px;
  border-bottom: 1px solid #646464;

  .hr {
    background-color: #646464;
    width: 2px;
    border: none;
  }

  .channels {
    width: 25%;
    padding: 15px 10px;

    h3 {
      text-align: center;
    }
  }

  .feeds {
    width: 75%;
    padding: 15px 10px;

    h3 {
      text-align: center;
    }
  }
}
</style>
