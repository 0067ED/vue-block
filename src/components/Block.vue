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
        return (<div>sss</div>);
    }
}
</script>

<style lang="css">
.block {
    display: block;
}
</style>
