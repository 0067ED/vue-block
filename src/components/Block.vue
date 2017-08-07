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
        console.log(util.calcAreasByPattern(cellMap, this.pattern))
        return (<div>sss</div>);
    }
}
</script>

<style lang="css">
.block {
    display: block;
}
</style>
