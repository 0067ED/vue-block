/*

    Area format
    ```
    {
        // pattern name
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

    Areas format
    ```
    {
        areaName1: area1,
        areaName2: area2
    }
    ```
*/
import {splitBySpace} from './helper';

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
 * calculate areas by pattern and cell map.
 * and add name for every cell.
 * @param {Array.<Array.<Object>>} cellMap cell map.
 * @param {string} pattern string.
 * @return {Object} all areas.
 *          `{ areaName: area, areaName2: area }`
 */
export function calcAreasByPattern(cellMap, pattern) {
    /*
    [
        [ 'head', 'head', 'side' ],
        [ 'body', 'body', 'side' ]
    ]
    */
    pattern = pattern.split(',').map(splitBySpace);
    console.log(pattern);

    if (cellMap.length !== pattern.length || cellMap[0].length !== pattern[0].length) {
        throw new Error('[BLOCK] `template`, `rows`, `cols` not match. ');
    }

    // console.log(pattern);
    return pattern.reduce((results, patternNames, rowIndex) => {
        return patternNames.reduce((results, cellName, colIndex) => {
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
                    height: [cell.height],
                    // col info
                    x: colIndex,
                    colSpan: 1,
                    width: [cell.width]
                };
            }
            return results;
        }, results);
    }, {});
}
