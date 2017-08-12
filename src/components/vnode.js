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
