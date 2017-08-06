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
        console.log(this.$slots);
        console.log(util.calcCellMap(this.rows, this.cols));
        return (<div></div>);
    }
}
</script>

<style lang="css">
.block {
    display: block;
}
</style>
