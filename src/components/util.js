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
        const spanName = isRow ? 'rowSpan' : 'colSpan';
        const staticIndexName = isRow ? 'y' : 'x';
        const dynamicIndexName = isRow ? 'x' : 'y';
        const lines = [];
        function tryAddLine(i, j, start) {
            if (j <= start) {
                return;
            }

            let line = {
                type,
                span: j - start,    // crossed cell count
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
                const afterCell = isRow ? cellMap[i][j + 1] : cellMap[j + 1][i];
                if (beforeCell.name === afterCell.name) {
                    tryAddLine(i, j, start);
                    start += areas[beforeCell.name][spanName];
                }
            }
            tryAddLine(i, j, start);
        }
        return lines;
    },

    layout(cellMap, areas, rowFirst) {
        const maxY = cellMap.length;
        const maxX = cellMap[0].length;
        const rowLines = this.calcLines(cellMap, areas, true);
        const colLines = this.calcLines(cellMap, areas, false);
        const allLines = (rowFirst ? rowLines.concat(colLines) : colLines.concat(rowLines))
            .sort((a, b) => b.span - a.span);
        // Must be two cells.
        const longestLines = allLines[0];
        console.log(longestLines);
    }
};
