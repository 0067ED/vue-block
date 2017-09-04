<script>
const req = require.context('raw-loader!./', false, /^[^_]+\.html$/);
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
    `,
    data() {
        return {
            selectedCity: 1,
            cityOptions: [
                {text:'L.A.', value:0},
                {text:'New York', value:1},
                {text:'San Francisco', value:2},
                {text:'Chicago', value:3},
                {text:'Washington, D.C.', value:4},
                {text:'Las Vegas', value:5},
                {text:'Atlanta', value:6},
                {text:'Seattle', value:7},
                {text:'Other...', value:8}
            ]
        };
    }
}
</script>

<style>
.examples h1 {
    text-align: left;
}

.example {
    position: relative;
    margin: 20px 0 0 0;
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
    height: 30px;
    text-align: center;
    color: #adb5bd;
    border-bottom: 1px solid #adb5bd;
    border-right: 1px solid #adb5bd;
    background: #FFF;
}
.code {
    display: block;
    position: relative;
    margin: 0 0 20px 0;
    padding: 20px 40px;
    text-align: left;
    border: 1px solid #adb5bd;
    border-top: none;
}

.example-middle {
    height: 400px;
}
.example-middle-txt {
    padding: 20px;
    width: 200px;
    line-height: 20px;
    border: 1px solid #adb5bd;
    box-shadow: 3px 3px 3px #adb5bd;
}

.example-img-board {
    width: 800px;
}
.example-img-board .block-area {
    border: 1px solid #FFF;
}
.example-img-board img {
    width: 100%;
    height: 100%;
}
</style>
