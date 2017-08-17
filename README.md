# vue-block

> Helping you build css grid like layout system with the support of old browser like IE9.

## Install

Install with npm:

```
npm install --save-dev vue-block
```

## Usage

Basicly `vue-block` is a Vue plugin. Also you can use it as a Vue component.

Plugin Usage:

```javascript
import block from 'vue-block';
import Vue from 'vue';
Vue.use(block);

new Vue({
    el: '#app',
    template: `<block>
        <div slot="left"><div>
        <div slot="right"><div>
    </block>`
});
```

Component Usage:

```javascript
import Vue from 'vue';
import block from 'vue-block';

new Vue({
    el: '#app',
    template: `<block>
        <div slot="left"><div>
        <div slot="right"><div>
    </block>`,
    components: { block }
});
```

## API

`vue-block`'s API is provide by all kinds of [vue slot](https://vuejs.org/v2/guide/components.html#Named-Slots). It provide some default slot to handle the basic layout function.

For Example:

```html
<!-- left and right -->
<block>
    <div slot="left">left<div>
    <div slot="right">right<div>
</block>

<!-- horizontal center -->
<block>
    <div slot="center">center 1<div>
    <div slot="center">center 2<div>
</block>

<!-- middle of the block, both vertical and horizontal -->
<block>
    <div slot="middle">middle 1<div>
    <div slot="middle">middle 2<div>
</block>
```

And most excited thing is `vue-block` support css grid like layout system.

For Example:

```html
<block
    cols="100px 2fr 1fr"
    rows="100px 200px 100px"
    pattern="header header right, side main right, side main right">
    <div slot="header"></div>
    <div slot="side"></div>
    <div slot="main"></div>
    <div slot="right"></div>
</block>

```

## Browser support

IE9 and other modern browser support [CSS calc](http://caniuse.com/#search=calc).

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for doc
npm run doc
```
