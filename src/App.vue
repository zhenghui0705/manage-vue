<template>
  <div id="app">
    <img src="./assets/images/Pacman-1s-200px.gif">
    <router-view/>
  </div>
</template>

<style>
@import url('./assets/css/public.css');
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
