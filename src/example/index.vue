<script>
const req = require.context('raw-loader!./', false, /\.html$/);
const keys = req.keys().filter((key) => key !== './index.vue').sort();
const components = keys.map((key) => {
    const html = req(key);
    const escapedHTML = html.trim()
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
    return `<div class="example">${html}</div>
        <pre class="code"><code class="html">${escapedHTML}</code></pre>`;
});

export default {
    name: 'example',
    template: `
        <div class="examples">
            ${components.join('')}
        </div>
    `
}
</script>

<style>
.examples {

}

.example {
    position: relative;
    margin: 40px 40px 0;
    padding: 40px;
    border: 1px solid #adb5bd;
}
.example:before {
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
.code {
    display: block;
    position: relative;
    margin: 0 40px 40px;
    padding: 20px 40px;
    text-align: left;
    border: 1px solid #adb5bd;
    border-top: none;
}
</style>
