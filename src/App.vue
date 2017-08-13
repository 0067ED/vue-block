<template>
  <div id="app">
    <img src="./assets/logo.png">
        <!--
        rows="[start] 400px [second] 200px [third] 100px [end]"
        cols="100px 500px auto 100px"
        pattern="header header header right, side main second right, side main second right">
    -->
    <block
        rows="[start] 100px [second] 200px [third] 100px [end]"
        cols="100px 300px auto 100px"
        pattern="header header test right, side main second right, side main second right">
        <div slot="header" class="header" :class="clazz" :style="style"></div>
        <div slot="side" class="side"></div>
        <div slot="main" class="main"></div>
        <div slot="right" class="right"></div>
        <div slot="second" class="second1"></div>
        <div slot="second" class="second2"></div>
        <div slot="test" class="test"></div>
    </block>


    <block>
        <div slot="left" class="header"></div>
        <div slot="right" class="side"></div>
    </block>
  </div>
</template>

<script>
import Block from './components/Block';

export default {
    name: 'app',
    data() {
        return {
            clazz: ['header1', 'header2'],
            style: {
                opacity: 0.5
            }
        };
    },
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

.header,
.side,
.main,
.right,
.second {
    display: block;
    width: 100%;
    height: 100%;
    padding: 10px;
    box-sizing: border-box;
}
.header:before,
.side:before,
.main:before,
.right:before,
.second:before {
    content: attr(class);
    color: #FFF;
}

.header {
    background: #ff6b6b;
}
.side {
    background: #f06595;
}
.main {
    background: #cc5de8;
}
.right {
    background: #845ef7;
}
.second1 {
    height: 50%;
    background: #5c7cfa;
}
.second2 {
    height: 50%;
    background: #e67700;
}
.test {
    background: #5c940d;
}
</style>
