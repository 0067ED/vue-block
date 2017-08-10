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
    typedLengths.fixedString = getFixedLength(typedLengths.fixed, true);
    typedLengths.baseFr = typedLengths.fr.reduce((count, len) => count + parseInt(len, 10), 0);
    typedLengths.baseAuto = typedLengths.auto.length;
    return typedLengths;
}

function getFixedLength(fixedLengths, isRaw) {
    if (!isRaw) {
        fixedLengths = fixedLengths.map((len) => len.raw);
    }
    return fixedLengths.length ? `(100% - ${fixedLengths.join(' - ')})` : '100%';
}

function calcCSSLength(lengths, base) {
    let calcStr = lengths.fixed.join(' + ');
    if (base.baseFr > 0) {
        // if has `fr` unit, then `auto` === `0`
        // lengths.auto.length = 0;
        // lengths.baseAuto = 0;
        calcStr += `${calcStr ? ' + ' : ''}${base.fixedString}`;
        calcStr += (base.baseFr === lengths.baseFr ? '' : `*${lengths.baseFr}/${base.baseFr}`);
    }
    else if (base.baseAuto > 0 && lengths.baseAuto > 0) {
        calcStr += `${calcStr ? ' + ' : ''}${base.fixedString}`;
        calcStr += (base.baseAuto === lengths.baseAuto ? '' : `*${lengths.baseAuto}/${base.baseAuto}`);
    }
    return calcStr;
}

/**
 * parse length.
 * @param {string} length length in string.
 * @return {Object} length format.
 */
export function parse(length) {
    const r = /^([0-9\.]+)?([a-zA-Z]+)?/.exec(length);
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

export function calcCSSWidthOrHeight(div, widthOrHeight) {
    const baseLengths = div[widthOrHeight].map(parse);
    const typedBaseLengths = divideLengthByType(baseLengths);
    div.split.forEach((d) => {
        const typedLengths = divideLengthByType(d[widthOrHeight].map(parse));
        const cssStr = calcCSSLength(typedLengths, typedBaseLengths);
        d['css' + widthOrHeight] = cssStr;
    });
}
