/*
    Cell format
    ```
    {
        // pattern name
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

    Cell map
    ```
    [
        [cell00, cell01, cell02],
        [cell10, cell11, cell12],
        [cell20, cell21, cell22]
    ]
    ```
*/
import {splitBySpace} from './helper';

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
    items = splitBySpace(items);
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

/**
 * calculate cell map.
 * @param {string} inputRows rows.
 * @param {string} inputCols cols.
 * @return {Array.<Array.<Object>>} cell map.
 */
export function calcCellMap(inputRows, inputCols) {
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
}
