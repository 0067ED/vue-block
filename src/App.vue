<template>
    <div class="container">
        <div class="readme" v-html="readme"></div>
        <example></example>
    </div>
</template>

<script>
import 'highlight.js/styles/github-gist.css';
import hl from 'highlight.js';
import Example from './example';
import readme from '../README.md';

export default {
    name: 'app',
    data() {
        return {
            readme,
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
body {
    margin: 0;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    line-height: 2;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
}
h1 {
    margin: 0;
    line-height: 2;
    font-size: 4em;
}
h2 {
    margin: 0;
    line-height: 2;
    font-size: 2em;
}
.container {
    width: 960px;
    margin: 0 auto;
    padding: 20px;
}
.readme blockquote {
    margin: 0;
    padding: 0 20px;
    border-left: 2px solid #adb5bd;
}
.readme p {
    margin: 0;
}
.readme pre {
    margin: 10px 0;
    padding: 10px;
    border: 1px solid #adb5bd;
}

.area-0 {
    background: #adb5bd;
}
.outline-0 {
    border: 1px solid #adb5bd;
}
.area-1 {
    background: #ff6b6b;
}
.outline-1 {
    border: 1px solid #ff6b6b;
}
.area-2 {
    background: #f06595;
}
.outline-2 {
    border: 1px solid #f06595;
}
.area-3 {
    background: #cc5de8;
}
.outline-3 {
    border: 1px solid #cc5de8;
}
.area-4 {
    background: #845ef7;
}
.outline-4 {
    border: 1px solid #845ef7;
}
.area-5 {
    height: 50%;
    background: #5c7cfa;
}
.outline-5 {
    border: 1px solid #5c7cfa;
}
.area-6 {
    height: 50%;
    background: #e67700;
}
.outline-6 {
    border: 1px solid #adb5bd;
}
.area-7 {
    background: #5c940d;
}
.outline-7 {
    border: 1px solid #adb5bd;
}
.box {
    width: 40px;
    height: 40px;
}

</style>
