<script>
import util from './util';
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
        const cellMap = util.calcCellMap(this.rows, this.cols);
        const areas = util.calcAreasByPattern(cellMap, this.pattern);
        const layouts = util.layout(cellMap, areas);
        console.log(layouts);
        console.log(this.$slots);
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
            util.calcCSSWidthAndHeight(div);
            const style = {
                width: div.csswidth ? `calc(${div.csswidth})` : '',
                height: div.cssheight ? `calc(${div.cssheight})` : ''
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
