<template>
  <div id="app">
    <Nav class="app-nav"></Nav>
    <router-view/>
  </div>
</template>
<script>
import Nav from '@/components/Navbar'
export default {
  name: 'App',
  components: {
    Nav
  },
  data () {
    return {
      //
    }
  }
}
</script>

<style>
  body{
    margin: 0;
    padding: 0;
  }
  .app-nav {
    z-index: 1;
  }
</style>
