<template>
  <div id="app">
    <img src="./assets/logo.png">
    <block
        rows="[start] 400px [second] 200px [third] 100px [end]"
        cols="500px auto"
        pattern="header header, side main, side main">
        <block area="header"></block>
        <block area="side"></block>
        <block area="main"></block>
    </block>
  </div>
</template>

<script>
import Block from './components/Block';

export default {
    name: 'app',
    components: {
        Block
    }
}
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
