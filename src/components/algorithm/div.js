/*

    Div format, it's tree struct. it can be used to render DOM tree.
    ```
    {
        type: 'row',        // row | col
        split: [before, after, last],

        // if not root, then it is row info
        y: 0,
        rowSpan: 1,
        // if not root, then it is col info
        x: 0,
        colSpan: 1,

        height: ['100px', '200px'],
        width: ['100px', 'auto'],

        // if only has no split value.
        name: 'xxxx'                    // pattern name
    }
    ```

*/

import {calcLines} from './line';

/**
 * Calculated crossed part of line and div.
 *
 * @param {Object} div div
 * @param {Object} line line
 * @return {Object} new crossed line.
 */
function calcCrossedLineWithDiv(div, line) {
    const isRow = line.type === 'row';
    if (isRow) {
        if (line.y <= div.y || line.y >= div.y + div.rowSpan) {
            // out of div.
            return;
        }
        const xStart = Math.max(div.x, line.x);
        const xEnd = Math.min(div.x + div.colSpan, line.x + line.span);
        const crossedSpan = xEnd - xStart;
        return crossedSpan > 0
            ? {type: line.type, span: crossedSpan, x: xStart, y: line.y} : null;
    }
    else {
        if (line.x <= div.x || line.x >= div.x + div.colSpan) {
            // out of div.
            return;
        }
        const yStart = Math.max(div.y, line.y);
        const yEnd = Math.min(div.y + div.rowSpan, line.y + line.span);
        const crossedSpan = yEnd - yStart;
        return crossedSpan > 0
            ? {type: line.type, span: crossedSpan, x: line.x, y: yStart} : null;
    }
}

/**
 * Split the long line, and removed the crossed part.
 *
 * @param {Object} long long line
 * @param {Object} short short line
 * @return {Array.<Object>} new splitted line.
 */
function splitLine(long, short) {
    const isRow = long.type === 'row';
    const lines = [];
    const sStart = isRow ? short.x : short.y;
    const sEnd = isRow ? (short.x + short.span) : (short.y + short.span);
    const lStart = isRow ? long.x : long.y;
    const lEnd = isRow ? (long.x + long.span) : (long.y + long.span);
    if (sStart > lStart) {
        const line = {
            type: long.type,
            span: sStart - lStart
        };
        line[isRow ? 'x' : 'y'] = lStart;
        line[isRow ? 'y' : 'x'] = isRow ? long.y : long.x;
        lines.push(line);
    }

    if (sEnd < lEnd) {
        const line = {
            type: long.type,
            span: lEnd - sEnd
        };
        line[isRow ? 'x' : 'y'] = sEnd;
        line[isRow ? 'y' : 'x'] = isRow ? long.y : long.x;
        lines.push(line);
    }
    return lines;
}

/**
 * Calculate longest(in percent) crossed line inside div.
 *
 * @param {Array.<Object>} lines all line
 * @param {Object} div div
 * @return {Object} new crossed line.
 */
function calcLongestLineInsideDiv(lines, div) {
    function getBaseSpan(line) {
        return line.type === 'row' ? div.colSpan : div.rowSpan;
    }

    let index;
    const crossedLine = lines.reduce((result, line, i) => {
        // calculated the crossed line with div.
        const crossedLine = calcCrossedLineWithDiv(div, line);
        if (!crossedLine) {
            // this line is not crossed with div
            return result;
        }

        if (!result) {
            index = i;
            return crossedLine;
        }

        const resultPercent = result.span / getBaseSpan(result);
        const thisPercent = crossedLine.span / getBaseSpan(crossedLine);
        if (thisPercent > resultPercent) {
            index = i;
            return crossedLine;
        }
        return result;
    }, null);

    if (!crossedLine) {
        return;
    }

    // remove and split the old line.
    // then push the new splitted line.
    const splitLines = splitLine(lines.splice(index, 1)[0], crossedLine);
    splitLines.unshift(0);
    splitLines.unshift(index);
    lines.splice.apply(lines, splitLines);
    return crossedLine;
}

/**
 * Fillup div's `split` by line.
 *
 * @param {Object} line line
 * @param {Object} div div
 */
function fillupDiv(lines, div) {
    const line = calcLongestLineInsideDiv(lines, div);
    if (!line) {
        // don't need to split.
        return;
    }

    div.type = line.type;
    // split div.
    const lineIsRow = line.type === 'row';
    div.split = [
        {
            y: div.y,
            rowSpan: lineIsRow ? line.y - div.y : div.rowSpan,
            x: div.x,
            colSpan: lineIsRow ? div.colSpan : line.x - div.x
        },
        {
            y: line.y,
            rowSpan: lineIsRow ? div.y + div.rowSpan - line.y : div.rowSpan,
            x: line.x,
            colSpan: lineIsRow ? div.colSpan : div.x + div.colSpan - line.x
        }
    ];

    // fillup splits.
    fillupDiv(lines, div.split[0]);
    fillupDiv(lines, div.split[1]);
}

/**
 * Flatten div split, and add `width / height / name / dirty`.
 *
 * @param {Array.<Array.<Object>>} cell map.
 * @param {Object} areas areas.
 * @param {Object} div div.
 * @param {Object=} usedAreaNames used area names.
 */
function normalizeDiv(cellMap, areas, div, usedAreaNames) {
    usedAreaNames = usedAreaNames || Object.create(null);
    if (!div.split || !div.split.length) {
        mapDivAndArea(cellMap, areas, div, usedAreaNames);
        return;
    }

    const before = div.split[0];
    const after = div.split[1];
    normalizeDiv(cellMap, areas, before, usedAreaNames);
    normalizeDiv(cellMap, areas, after, usedAreaNames);

    if (div.type === before.type) {
        div.split.shift();
        div.split.unshift.apply(div.split, before.split);
    }

    if (div.type === after.type) {
        div.split.pop();
        div.split.push.apply(div.split, after.split);
    }

    const isRow = div.type === 'row';
    const firstCleanSplit = findFirstCleanSplit(div.split);
    div.width = isRow ? firstCleanSplit.width : sumHeightOrWidth(div.split, 'width');
    div.height = isRow ? sumHeightOrWidth(div.split, 'height') : firstCleanSplit.height;
}

function sumHeightOrWidth(splits, heightOrWidth) {
    const results = [];
    for (let i = 0, l = splits.length; i < l; i++) {
        const split = splits[i];
        if (!split) {
            continue;
        }
        results.push.apply(results, split[heightOrWidth]);
    }
    return results;
}

function findFirstCleanSplit(splits) {
    for (let i = 0, l = splits.length; i < l; i++) {
        const split = splits[i];
        if (!split || split.dirty) {
            continue;
        }
        return split;
    }
}

/**
 * Map area to div, add `width / height / name / dirty`.
 *
 * @param {Array.<Array.<Object>>} cell map.
 * @param {Object} areas areas.
 * @param {Object} div div.
 * @param {Object=} usedAreaNames used area names.
 */
function mapDivAndArea(cellMap, areas, div, usedAreaNames) {
    const x = div.x;
    const y = div.y;
    const cell = cellMap[y][x];
    if (!cell) {
        return;
    }

    const cellName = cell.name;
    const area = areas[cellName];
    if (!area) {
        return;
    }

    if (usedAreaNames[cellName]) {
        // allready used
        div.dirty = true;
        // TODO
    }
    usedAreaNames[cellName] = 1;
    div.name = cellName;
    div.width = area.width;
    div.height = area.height;
}

/**
 * Calculate div
 * @param {Array.<Array.<Object>>} cellMap cell map.
 * @param {Object} areas areas object.
 * @return {Object} div object.
 */
export function calcDiv(cellMap, areas) {
    const maxY = cellMap.length;
    const maxX = cellMap[0].length;
    // console.log(cellMap);
    // console.log(areas);
    const rowLines = calcLines(cellMap, areas, true);
    const colLines = calcLines(cellMap, areas, false);
    const allLines = rowLines.concat(colLines);

    if (!allLines.length) {
        // only one area found.
        // TODO
    }

    // Must be two cells.
    const rootDiv = {
        // if not root, then it is row info
        y: 0,
        rowSpan: maxY,
        // if not root, then it is col info
        x: 0,
        colSpan: maxX
    };
    fillupDiv(allLines, rootDiv);
    normalizeDiv(cellMap, areas, rootDiv);
    return rootDiv;
}
