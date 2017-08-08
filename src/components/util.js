console.log(`
┌──────────┐
│┌───┐┌───┐│
││   ││   ││
│└───┘└───┘│
└──────────┘`);

/**
 * Parse input
 * @param {string} items like
 *                  `100px auto 30%`
 *                  `[start] 100px [second] auto [third] 30% [end]`
 *                  `100px auto [center] 30% [end]`
 * @return {Array.<Object>}
 *                  `[{start: 'start', end: 'second' length: '100px'}, ...]`
 */
function parseRowsOrCols(items) {
    items = items.split(' ').filter((item) => !!item);
    const lastItemIndex = items.length - 1;
    return items.reduce(function (results, item, index) {
        const r = item.match(/^\[([^\]]+)\]$/);
        const lineName = r ? r[1] : '';
        const lastResult = results[results.length - 1];
        if (lineName) {
            // is line name, like `[first]`.
            if ((lastResult && (lastResult.length == null))     // no length before line name.
                || (!lastResult && (index == lastItemIndex))) { // only have one line name.
                throw new Error(`[JIMU] Wrong format: ${items}`);
            }
            if (lastResult) {
                lastResult.end = lineName;
            }
            if (index < lastItemIndex) {
                results.push({
                    start: lineName
                });
            }
        }
        else {
            // is length, like `auto`, `100px`, `100%`.
            const needNewResult = !lastResult || lastResult.length != null;
            const res = needNewResult ? {} : lastResult;
            res.length = item;
            if (needNewResult) {
                results.push(res);
            }
        }
        return results;
    }, []);
}

function isInside(x, xStart, xEnd) {
    return (x >= xStart) && (x <= xEnd);
}

/**
 * Add one cell into area.
 * @param {Object} area area info.
 * @param {Object} cell cell info.
 * @param {number} x cell x position.
 * @param {number} y cell y position.
 */
function addCellIntoArea(area, cell, x, y) {
    const xStart = area.x;
    const xEnd = xStart + area.colSpan - 1;
    const yStart = area.y;
    const yEnd = yStart + area.rowSpan - 1;

    const xInside = isInside(x, xStart, xEnd);
    const yInside = isInside(y, yStart, yEnd);
    if (xInside && yInside) {
        // area is 1.
        // cell is x.
        // 1, 1, 1,
        // 1, x, 0,
        // cell is already inside area.
        return;
    }

    if (!isInside(x, xStart - 1, xEnd + 1)
        || !isInside(y, yStart - 1, yEnd + 1)) {
        // area is 1.
        // cell is x.
        // 1, 1, 1, 0, x
        // 1, 1, 1, 0, 0
        // drop this cell.
        return;
    }

    if (!xInside) {
        area.width.push(cell.width);
        area.colSpan++;
        area.x = (area.x > x) ? x : area.x;
    }
    if (!yInside) {
        // isYInside
        area.height.push(cell.height);
        area.rowSpan++;
        area.y = (area.y > y) ? y : area.y;
    }
}

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
        const xStart = Math.max(div.x, line.x);
        const xEnd = Math.min(div.x + div.colSpan, line.x + line.span);
        const crossedSpan = xEnd - xStart;
        return crossedSpan > 0 ? {type: line.type, span: crossedSpan, x: xStart, y: line.y} : null;
    }
    else {
        const yStart = Math.max(div.y, line.y);
        const yEnd = Math.min(div.y + div.rowSpan, line.y + line.span);
        const crossedSpan = yEnd - yStart;
        return crossedSpan > 0 ? {type: line.type, span: crossedSpan, x: line.x, y: yStart} : null;
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
            type: line.type,
            span: sStart - lStart
        };
        line[isRow ? 'x' : 'y'] = lStart;
        line[isRow ? 'y' : 'x'] = isRow ? long.y : long.x;
        lines.push(line);
    }

    if (sEnd < lEnd) {
        const line = {
            type: line.type,
            span: lXEnd - sXEnd
        };
        line[isRow ? 'x' : 'y'] = sXEnd;
        line[isRow ? 'y' : 'x'] = isRow ? long.y : long.x;
        lines.push(line);
    }
    return lines;
}

/**
 * Calculate longest crossed line inside div.
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

        const notLonger = (result.span / getBaseSpan(result)) > (crossedLine.span / getBaseSpan(crossedLine));
        if (!notLonger) {
            index = i;
        }
        return notLonger ? result : crossedLine;
    }, null);

    if (!crossedLine) {
        return;
    }

    // remove and split the old line.
    // then push the new splitted line.
    lines.push.apply(lines, splitLine(lines.splice(index, 1), crossedLine));
    return crossedLine;
}

/**
 * Split div by line.
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

    console.log(line, div);
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

function flatDiv(div) {
    if (!div.split || !div.split.length) {
        return;
    }

    const before = div.split[0];
    const after = div.split[1];
    flatDiv(before);
    flatDiv(after);

    if (div.type === before.type) {
        div.split.shift();
        div.split.unshift.call(div.split, before.split);
    }

    if (div.type === after.type) {
        div.split.pop();
        div.split.push.call(div.split, after.split);
    }
}

/*

    Cell format
    ```
    {
        name: 'xxxx',
        // row info
        height: '200px',
        rowStart: 'vstart',
        rowEnd: 'vend',
        // col info
        width: '200px',
        colStart: 'hstart',
        colEnd: 'hend'
    }
    ```
    Cell map format
    ```
    [
        [ cell00, cell01, cell02 ],
        [ cell10, cell11, cell12 ]
    ]
    ```

    Area format
    ```
    {
        name: 'xxx',
        // row info
        y: 0,
        rowSpan: 1,
        height: ['100px', '200px'],
        // col info
        x: 0,
        colSpan: 1,
        width: ['100px', 'auto']
    ```

    Line format
    ```
    {
        type: 'row',        // row | col
        span: 2,            // crossed cell count
        x: 0,
        y: 0
    }
    ```

    Div format
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
        // if only has one area, then it is.
        area: someArea
    }
    ```
*/

export default {
    /**
     * calculate cell map.
     * @param {string} inputRows rows.
     * @param {string} inputCols cols.
     * @return {Array.<Array.<Object>>} cell map.
     */
    calcCellMap(inputRows, inputCols) {
        const rows = parseRowsOrCols(inputRows);
        const cols = parseRowsOrCols(inputCols);
        const cellMap = rows.reduce((results, row) => {
            const rowResults = cols.reduce((rowResult, col) => {
                rowResult.push({
                    // row info
                    height: row.length,
                    rowStart: row.start,
                    rowEnd: row.end,
                    // col info
                    width: col.length,
                    colStart: col.start,
                    colEnd: col.end
                });
                return rowResult;
            }, []);
            results.push(rowResults);
            return results;
        }, []);

        if (cellMap.length === 0 || cellMap[0].length === 0) {
            throw new Error(`[JIMU] Wrong format for rows: ${inputRows}`
                + `\ncols: ${inputCols}`);
        }

        return cellMap;
    },

    /**
     * calculate areas by pattern and cell map.
     * and add name for every cell.
     * @param {Array.<Array.<Object>>} cellMap cell map.
     * @param {string} pattern string.
     * @return {Object} all areas.
     *          `{ areaName: area, areaName2: area }`
     */
    calcAreasByPattern(cellMap, pattern) {
        /*
        [
            [ 'head', 'head', 'side' ],
            [ 'body', 'body', 'side' ]
        ]
        */
        pattern = pattern.split(',').map((tmpl) => {
            return tmpl.split(' ').filter((input) => !!input);
        });

        if (cellMap.length !== pattern.length || cellMap[0].length !== pattern[0].length) {
            throw new Error('[BLOCK] `template`, `rows`, `cols` not match. ');
        }

        return pattern.reduce((results, templateNames, rowIndex) => {
            return templateNames.reduce((results, cellName, colIndex) => {
                const cell = cellMap[rowIndex][colIndex];
                // NOTE add name for cell.
                cell.name = cellName;
                const area = results[cellName];
                if (area) {
                    addCellIntoArea(area, cell, colIndex, rowIndex);
                }
                else {
                    results[cellName] = {
                        name: cellName,
                        // row info
                        y: rowIndex,
                        rowSpan: 1,
                        height: [cell.width],
                        // col info
                        x: colIndex,
                        colSpan: 1,
                        width: [cell.height]
                    };
                }
                return results;
            }, results);
        }, {});
    },

    /**
     * calculate row or col lines
     * @param {Array.<Array.<Object>>} cellMap cell map.
     * @param {Object} all areas.
     *          `{ areaName: area, areaName2: area }`
     * @param {boolean} isRow is row or col
     * @return {Array.<Object>} lines
     */
    calcLines(cellMap, areas, isRow) {
        const maxY = cellMap.length;
        const maxX = cellMap[0].length;
        const max = (isRow ? maxY : maxX) - 1;
        const maxCellCount = isRow ? maxX : maxY;
        const type = isRow ? 'row' : 'col';
        const maxSpan = isRow ? maxX : maxY;
        const spanName = isRow ? 'colSpan' : 'rowSpan';
        const staticIndexName = isRow ? 'y' : 'x';
        const dynamicIndexName = isRow ? 'x' : 'y';
        const lines = [];
        function tryAddLine(i, j, start) {
            if (j <= start) {
                return;
            }

            // crossed cell count
            const span = j - start;
            let line = {
                type,
                span
            };
            line[staticIndexName] = i + 1;
            line[dynamicIndexName] = start;
            lines.push(line);
        }

        for (let i = 0; i < max; i++) {
            let start = 0;
            let j = 0;
            for (; j < maxCellCount; j++) {
                const beforeCell = isRow ? cellMap[i][j] : cellMap[j][i];
                const afterCell = isRow ? cellMap[i + 1][j] : cellMap[j][i + 1];
                if (beforeCell.name === afterCell.name) {
                    tryAddLine(i, j, start);
                    start += areas[beforeCell.name][spanName];
                }
            }
            tryAddLine(i, j, start);
        }
        return lines;
    },

    layout(cellMap, areas, colFirst) {
        const maxY = cellMap.length;
        const maxX = cellMap[0].length;
        console.log(cellMap);
        console.log(areas);
        const rowLines = this.calcLines(cellMap, areas, true);
        const colLines = this.calcLines(cellMap, areas, false);
        const allLines = colFirst ? colLines.concat(rowLines) : rowLines.concat(colLines);

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
        // flatDiv(rootDiv);
        return rootDiv;
    }
};
