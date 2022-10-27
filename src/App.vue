<template>
  <div id="app">
    <h1 class="main-title">
      <router-link to="/">
        Users
      </router-link>
    </h1>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.main-title {
  margin-bottom: 60px;
}
</style>
