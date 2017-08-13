<script>
import {layout, calcCSS} from './algorithm';
import {mergeClassOrStyle} from './vnode';

/**
 * Render VNodes.
 * if more than one vnode, then wrap it with div.
 * if empty, then return div.
 * @param {Function} h createElement function.
 * @param {Array.<VNode>} vnodes vnodes or null.
 * @param {*=} class class
 * @param {Array<Object>|Object=} style style.
 * @return {VNode} one vnode.
 */
function renderVNodes(h, vnodes, clazz, style) {
    if (vnodes && vnodes.length === 1) {
        // only one node
        const singleNode = vnodes[0];
        singleNode.data = singleNode.data || {};
        if (clazz) {
            singleNode.data.class = mergeClassOrStyle(singleNode.data.class, clazz);
        }
        if (style) {
            singleNode.data.style = mergeClassOrStyle(singleNode.data.style, style);
        }
        return singleNode;
    }

    // 2, 3, ...
    return <div class={clazz} style={style}>
        {vnodes || ''}
    </div>;
}

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
    return renderVNodes(h, usedSlot, clazz, style);
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
