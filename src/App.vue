<template>
  <div id="app">
    <router-view/>
    <main-tab-bar/>
  </div>
</template>

<script>
  import MainTabBar from './components/content/mainTabbar/MainTabBar'
  import NavBar from './components/common/navbar/NavBar'
 

  export default {
    name: 'app',
    components: {
      MainTabBar,
      NavBar
    }
  }
</script>

<style>
  @import "assets/css/base.css";

  #app {
    position: relative;
  }
</style>
