<script>
import {layout, calcCSS} from './algorithm';
export default {
    name: 'Block',
    props: {
        rows: {
            type: String,
            default: 'auto'
        },
        cols: {
            type: String,
            default: 'auto'
        },
        pattern: String,
        area: String,
        justifyItems: String,
        alignItems: String
    },
    render(h) {
        const layouts = layout(this.pattern, this.rows, this.cols);
        console.log(layouts);
        return this.renderDiv(h, layouts);
    },
    methods: {
        renderDiv(h, div) {
            // WOW, I love one piece. ^^
            const isOnepiece = !div.type;
            const spClazz = `block-pattern-${div.name}`;
            const clazz = {
                'block': true,
                'block-area': isOnepiece
            };
            clazz[spClazz] = isOnepiece;
            clazz[`block-${div.type}`] = !isOnepiece;
            calcCSS(div);
            const style = {
                width: div.csswidth || '',
                height: div.cssheight || ''
            };
            return (<div class={clazz} style={style}>
                {div.split
                    ? div.split.map(this.renderDiv.bind(this, h))
                    : this.$slots[div.name] || ''}
            </div>)
        }
    }
}
</script>

<style lang="css">
.block {
    display: block;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.block-row > .block-area {
}
.block-col {
    text-align: left;
}
.block-col > .block {
    display: inline-block;
    vertical-align: top;
}
.block-area {

}
</style>
