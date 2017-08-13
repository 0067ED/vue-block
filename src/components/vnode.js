export function mergeClassOrStyle(first, second) {
    const firstIsArray = Array.isArray(first);
    const secondIsArray = Array.isArray(second);
    if (firstIsArray) {
        first = first.concat();
        if (secondIsArray) {
            return first.concat(second);
        }

        first.push(second);
        return first;
    }

    if (secondIsArray) {
        second.unshift(first);
        return second;
    }

    return [first, second];
}

function _applyClassOrStyle(vnodes, classOrStyle, value) {
    if (value == null) {
        return;
    }

    if (!Array.isArray(vnodes)) {
        vnodes.data = vnodes.data || {};
        vnodes.data[classOrStyle] = mergeClassOrStyle(vnodes.data[classOrStyle], value);
        return;
    }
    vnodes.forEach((vnode) => {
        vnode.data = vnode.data || {};
        vnode.data[classOrStyle] = mergeClassOrStyle(vnode.data[classOrStyle], value);
    });
}

export function applyClass(vnodes, clazz) {
    _applyClassOrStyle(vnodes, 'class', clazz);
}

export function applyStyle(vnodes, style) {
    _applyClassOrStyle(vnodes, 'style', style);
}
