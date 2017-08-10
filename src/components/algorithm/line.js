/*

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


/**
 * calculate row or col lines
 * @param {Array.<Array.<Object>>} cellMap cell map.
 * @param {Object} all areas.
 *          `{ areaName: area, areaName2: area }`
 * @param {boolean} isRow is row or col
 * @return {Array.<Object>} lines
 */
export function calcLines(cellMap, areas, isRow) {
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
        while (j < maxCellCount) {
            const beforeCell = isRow ? cellMap[i][j] : cellMap[j][i];
            const afterCell = isRow ? cellMap[i + 1][j] : cellMap[j][i + 1];
            if (beforeCell.name === afterCell.name) {
                tryAddLine(i, j, start);
                j = start = j + areas[beforeCell.name][spanName];
            }
            else {
                j++;
            }
        }
        tryAddLine(i, j, start);
    }
    return lines;
}
