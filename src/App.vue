<template>
    <div class="container">
        <a href="https://github.com/0067ED/vue-block/" target="_blank">
            <img style="position:fixed;top:0;right:0;z-index:999;border:0;"
                alt="Fork on GitHub"
                src="https://camo.githubusercontent.com/38ef81f8aca64bb9a64448d0d70f1308ef5341ab/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f6461726b626c75655f3132313632312e706e67"
                data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_right_darkblue_121621.png" />
        </a>
        <block class="logo"
            cols="1fr 1fr 1fr"
            rows="1fr 1fr 1fr"
            pattern="a b c, d e f, g h i">
            <span slot="a"></span>
            <span slot="b"></span>
            <span slot="c"></span>
            <span slot="d"></span>
            <span slot="e"></span>
            <span slot="f"></span>
            <span slot="g"></span>
            <span slot="h"></span>
            <span slot="i"></span>
        </block>
        <h1>vue-block</h1>
        <block class="menu">
            <a href="###" slot="center" @click.prevent="switchMenu(0)" :class="selected === 0 ? 'selected' : ''">Document</a>
            <a href="###" slot="center" @click.prevent="switchMenu(1)" :class="selected === 1 ? 'selected' : ''">Example</a>
        </block>
        <div class="readme" v-show="selected === 0" v-html="readme"></div>
        <example v-show="selected === 1"></example>
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
            selected: 0,
            readme: readme.replace(/<h1[^>]*>[^<]+<\/h1>/, ''),
            clazz: ['header1', 'header2'],
            style: {
                opacity: 0.5
            }
        };
    },
    methods: {
        switchMenu(target) {
            this.selected = target;
        }
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
    text-align: center;
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

.logo {
    margin: 100px auto 0 !important;
    width: 150px;
    height: 150px;
}
.logo .block-area {
    border: 1px solid #FFF;
}
.logo .block-pattern-a {
    background: #e8f7ff;
}
.logo .block-pattern-b {
    background: #ccedff;
}
.logo .block-pattern-c {
    background: #a3daff;
}
.logo .block-pattern-d {
    background: #1b6ec2;
}
.logo .block-pattern-e {
    background: #1c7cd6;
}
.logo .block-pattern-f {
    background: #72c3fc;
}
.logo .block-pattern-g {
    background: #228ae6;
}
.logo .block-pattern-h {
    background: #329af0;
}
.logo .block-pattern-i {
    background: #4dadf7;
}

.menu {
    margin-bottom: 50px;
    color: #adb5bd;
    border-bottom: 1px solid #adb5bd;
}
.menu a {
    margin: 0 10px -1px;
    color: inherit;
    text-decoration: none;
    border-bottom: 1px solid #adb5bd;
}
.menu .selected {
    color: #495057;
    border-bottom-color: #495057;
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
    background: #ff8787;
}
.outline-0 {
    border: 1px solid #ff8787;
}
.area-1 {
    background: #f783ac;
}
.outline-1 {
    border: 1px solid #f783ac;
}
.area-2 {
    background: #da77f2;
}
.outline-2 {
    border: 1px solid #da77f2;
}
.area-3 {
    background: #9775fa;
}
.outline-3 {
    border: 1px solid #9775fa;
}
.area-4 {
    background: #364fc7;
}
.outline-4 {
    border: 1px solid #364fc7;
}
.area-5 {
    height: 50%;
    background: #4dadf7;
}
.outline-5 {
    border: 1px solid #4dadf7;
}
.area-6 {
    height: 50%;
    background: #3bc9db;
}
.outline-6 {
    border: 1px solid #3bc9db;
}
.area-7 {
    background: #38d9a9;
}
.outline-7 {
    border: 1px solid #38d9a9;
}
.area-8 {
    background: #69db7c;
}
.outline-8 {
    border: 1px solid #69db7c;
}
.box {
    width: 40px;
    height: 40px;
}

</style>
