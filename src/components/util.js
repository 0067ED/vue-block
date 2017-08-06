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

function createArea(name, cell) {
    return {
        name,
        width: [cell.width],
        height: [cell.height]
    };
}
function mergeCell2Area(area, cell, newRow) {
    if (newRow) {
        area.height
    }
}
function addCell(areas, name, cell, newRow) {
    if (areas.length === 0) {
        areas.push(createArea(name, cell));
    }
    else if (newRow) {

    }
    else {
        const lastRow = areas[areas.length - 1];
        const lastArea = lastRow[lastRow.length - 1];
        if (lastArea.name === name) {
            lastArea.width
        }
        else {
            lastRow.push(createArea(name, cell));
        }
    }
}

export default {
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

    calcAreaMapByTemplate(cellMap, template) {
        template = template.split(',').map((tmpl) => {
            return tmpl.split(' ').filter((input) => !!input);
        });
        console.log(template);
        const maxY = cellMap.length;
        const maxX = cellMap[0].length;
        let x, y = 0;
        // `[{width, height, name}]`
        const result = [];
        let cell;
        let area;
        while (x < maxX && y < maxY) {
            area = area || {
                width: [],
                height: []
            };
            tmpl = template[y][x];
            cell = cellMap[y][x];
            if (area.name == null || area.name === tmpl.name) {
                // no area or same area
                area.name = tmpl.name;
                area.width.push(cell.width);
                area.height.push(cell.height);
                x++;
            }
            else {

            }
        }
    }
};
