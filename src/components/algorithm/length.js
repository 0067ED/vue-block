/*
    Length format
    ```
    {
        number: '10',
        unit: 'px',         // 'px', '%', 'auto', 'fr'
        raw: '10px',
        isFlex: false
    }
    ```

    Typed multi-length format
    ```
    {
        fixed: ['100px', '200%'],
        fr: [lengthFormat],
        auto: [lengthFormat],
        fixedString: '(100%-100px-20%})',
        baseFr: 5,          // base count of `fr`
        baseAuto: 1         // base count of `auto`
    }
    ```

    CSS Length format
    ```
    {
        baseFixed: ['100px', '200%'],
        fixed: ['100px'],
        baseFree: 2,
        free: 1
    }
    ```
*/


const UNIT_MAP = Object.create(null);
UNIT_MAP.fr = true;
UNIT_MAP.auto = true;
UNIT_MAP.px = false;
UNIT_MAP['%'] = false;
UNIT_MAP[''] = false;

/**
 * divide length into types
 * @param {Array.<string>} lengths `['100px', '0', '10%', '1fr', 'auto']`
 * @return {Object} Typed lengths format
 */
function divideLengthByType(lengths) {
    let typedLengths = {
        fixed: [],
        fr: [],
        auto: []
    };
    typedLengths = lengths.reduce((results, len) => {
        const type = len.isFlex ? len.unit : 'fixed';
        results[type].push(len.isFlex ? len : len.raw);
        return results;
    }, typedLengths);
    // typedLengths.fixedString = getFixedLength(typedLengths.fixed, true);
    typedLengths.baseFr = typedLengths.fr.reduce((count, len) => count + parseInt(len.number, 10), 0);
    typedLengths.baseAuto = typedLengths.auto.length;
    return typedLengths;
}

/**
 * Remove dumplicate value inside both array.
 * Only remove by pair. And do not modify the input array.
 * @param {Array.<string>} array1 array one.
 * @param {Array.<string>} array2 array two.
 * @return {Array.<Array>} result.
 */
function removeDuplicateValue(array1, array2) {
    array1 = array1.concat();
    array2 = array2.filter((item) => {
        const i = array1.indexOf(item);
        const r = ~i;
        if (r) {
            array1.splice(i, 1);
        }
        return !r;
    });
    return [array1, array2];
}

function _calcFixedCSSLength(fixedLengths) {
    return fixedLengths.length > 1
        ? `calc(${fixedLengths.join(' + ')})`
        : (fixedLengths[0] || '');
}

function calcCSSLength(lengths, base, rounder) {
    const baseFixed = base.fixed;
    const fixed = lengths.fixed;
    // if has `fr` unit, then `auto` === `0`
    const hasFRUnit = base.baseFr > 0;
    const baseFree = hasFRUnit ? base.baseFr : base.baseAuto;
    const free = hasFRUnit ? lengths.baseFr : lengths.baseAuto;
    if (baseFree === 0 || free === 0) {
        // optimise for this case.
        // no free unit or no free unit inside this lengths
        // calc(fixed)
        // calc(100px + 10%)
        // 100px
        return _calcFixedCSSLength(fixed);
    }

    if (baseFree !== free) {
        // calc(fixed + (100% - basedFixed) * 1 / 3 )
        return baseFixed.length
            ? fixed.length
                ? `calc(${fixed.join(' + ')} + (${rounder} - ${baseFixed.join(' - ')}) * ${free} / ${baseFree})`
                : `calc((${rounder} - ${baseFixed.join(' - ')}) * ${free} / ${baseFree})`
            : `calc(${rounder} * ${free} / ${baseFree})`;
    }

    // optimise for this case.
    // all free unit inside this lengths
    // calc(fixed + 100% - basedFixed)
    const clean = removeDuplicateValue(fixed, baseFixed);
    const cleanBaseFixed = clean[1];
    const cleanFixed = clean[0];
    return cleanBaseFixed.length
        ? cleanFixed.length
            // calc(10px + 100% - 100px)
            ? `calc(${cleanFixed.join(' + ')} + 100% - ${cleanBaseFixed.join(' - ')})`
            // calc(100% - 100px)
            : `calc(100% - ${cleanBaseFixed.join(' - ')})`
        // 100%
        : '100%';
}

/**
 * parse length.
 * @param {string} length length in string.
 * @return {Object} length format.
 */
export function parse(length) {
    const r = /^([0-9\.]+)?([a-zA-Z%]+)?/.exec(length);
    if (!r) {
        // illegal format
        // TODO
        return;
    }

    const unit = r[2];
    if (typeof UNIT_MAP[unit] !== 'boolean') {
        // illegal unit
        // TODO
        return;
    }

    const number = r[1];
    if (unit === '' && number !== '0') {
        // for pure number `12` or `67`
        // TODO
        return;
    }

    return {
        number,
        unit,
        raw: length,
        isFlex: UNIT_MAP[unit]
    };
}

export function calcCSSWidthOrHeight(div, widthOrHeight, rounder) {
    const baseLengths = div[widthOrHeight].map(parse);
    const typedBaseLengths = divideLengthByType(baseLengths);
    div['cssmin' + widthOrHeight] = _calcFixedCSSLength(typedBaseLengths.fixed);
    div.split.forEach((d) => {
        const typedLengths = divideLengthByType(d[widthOrHeight].map(parse));
        const cssStr = calcCSSLength(typedLengths, typedBaseLengths, rounder);
        d['css' + widthOrHeight] = cssStr;
    });
}
