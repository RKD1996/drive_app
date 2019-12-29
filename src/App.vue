<template>
  <div id="app">
    <Nav class="app-nav"></Nav>
    <home/>
  </div>
</template>
<script>
import Nav from '@/components/Navbar'
import home from '@/views/Home'
export default {
  name: 'App',
  components: {
    Nav,
    home
  },
  data () {
    return {
      //
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Oswald&display=swap');
  body{
    margin: 0;
    padding: 0;
    font-family: 'Oswald', sans-serif !important;
  }
  .app-nav {
    z-index: 1;
  }
</style>
