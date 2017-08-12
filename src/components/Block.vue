<script>
import {layout, calcCSS} from './algorithm';

function renderDiv(h, context, div) {
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

    if (div.split) {
        return <div class={clazz} style={style}>
            {div.split.map(renderDiv.bind(null, h, context))}
        </div>;
    }

    // is area
    const usedSlot = context.slots()[div.name];
    if (usedSlot && usedSlot.length === 1) {
        // only one node
        const singleVNode = usedSlot[0];
        singleVNode.data.class = clazz;
        singleVNode.data.style = style;
        return singleVNode;
    }

    // 2, 3, ...
    return <div class={clazz} style={style}>
        {usedSlot || ''}
    </div>;
}

export default {
    name: 'Block',
    functional: true,
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
    render(h, context) {
        console.log(context.pattern);
        const props = context.props;
        const layouts = layout(props.pattern, props.rows, props.cols);
        console.log(layouts);
        return renderDiv(h, context, layouts);
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
