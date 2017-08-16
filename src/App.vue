<template>
  <div id="app">
    <example></example>
  </div>
</template>

<script>
import 'highlight.js/styles/github-gist.css';
import hl from 'highlight.js';
import Example from './example';
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
    mounted() {
        hl.initHighlightingOnLoad();
    },
    components: {
        Example
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
    width: 960px;
    margin: 0 auto;
}

.area-1 {
    background: #ff6b6b;
}
.area-2 {
    background: #f06595;
}
.area-3 {
    background: #cc5de8;
}
.area-4 {
    background: #845ef7;
}
.area-5 {
    height: 50%;
    background: #5c7cfa;
}
.area-6 {
    height: 50%;
    background: #e67700;
}
.area-7 {
    background: #5c940d;
}
.box {
    width: 40px;
    height: 40px;
}

</style>
