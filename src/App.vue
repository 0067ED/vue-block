<template>
  <div id="app">
    <block class="example example-1"
        rows="100px 200px 100px"
        cols="100px 300px auto 100px"
        pattern="header header test right, side main second right, side main second right">
        <div slot="header" class="area-1" :class="clazz" :style="style"></div>
        <div slot="side" class="area-2"></div>
        <div slot="main" class="area-3"></div>
        <div slot="right" class="area-4"></div>
        <div slot="second" class="area-5"></div>
        <div slot="second" class="area-6"></div>
        <div slot="test" class="area-7"></div>
    </block>
    <pre><code>
</code></pre>

    <block class="example example-2">
        <div slot="left" class="area-1 box"></div>
        <div slot="left" class="area-3 box"></div>
        <div slot="left" class="area-5 box"></div>
        <div slot="left" class="area-2 box"></div>
        <div slot="right" class="area-4 box"></div>
    </block>

    <block class="example example-3">
        <div slot="center" class="area-1 box"></div>
        <div slot="center" class="area-2 box"></div>
        <div slot="center" class="area-3 box"></div>
    </block>

    <block class="example example-2">
        <div slot="left" class="area-1 box"></div>
        <div slot="left" class="area-3 box"></div>
        <div slot="right" class="area-5 box"></div>
        <div slot="center" class="area-2 box"></div>
        <div slot="center" class="area-4 box"></div>
    </block>

    <block class="example example-4">
        <div slot="middle" class="area-1 box"></div>
    </block>
  </div>
</template>

<script>
export default {
    name: 'app',
    data() {
        return {
            clazz: ['header1', 'header2'],
            style: {
                opacity: 0.5
            }
        };
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


#app .example {
    position: relative;
    margin: 40px;
    padding: 40px;
    border: 1px solid #adb5bd;
}
#app .example:before {
    content: 'EXAMPLE';
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100px;
    height: 20px;
    text-align: center;
    color: #adb5bd;
    border-bottom: 1px solid #adb5bd;
    border-right: 1px solid #adb5bd;
    background: #FFF;
}
#app .example-4 {
    height: 300px;
}
#app .example-4 .box {
    width: 200px;
    height: 200px;
}
</style>
