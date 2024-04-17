<template>
  <nav class="wrapper">
    <a href="#/my-account">My account</a>
    <a href="#/">About</a>
    <a href="#/twitter">Twitter</a>
  </nav>
</template>

<style scoped>
.wrapper {
  display: flex;
  align-content: center;
  justify-content: space-around;
  gap: 10px;

    a {
      text-decoration: none;
      color: #e0e0e0;
      font-size: 20px;
      width: 50%;
      border-bottom: 1px solid #e0e0e0;
      text-align: center;
      padding-bottom: 5px;

      &:hover{
        background-color: #5c5c5c;
        border-radius: 5px;
      }
    }
}
</style>