import {calcCellMap} from './cell';
import cell from './cell';
import {calcAreasByPattern} from './area';
import {calcDiv} from './div';
import {parse as parseLength, calcCSSWidthOrHeight} from './length';
/**
 * calc layouts.
 * @param {string} pattern `header header header, side main second, side main second`
 * @param {string} rows `[start] 400px [second] 200px [third] 100px [end]`
 * @param {string} cols `100px 500px auto 100px`
 * @return {Object} div format.
 */
export function layout(pattern, rows, cols) {
    const cellMap = calcCellMap(rows, cols);
    const areas = calcAreasByPattern(cellMap, pattern);
    return calcDiv(cellMap, areas);
}

export function calcCSS(div) {
    if (!div.split || !div.split.length) {
        return;
    }
    calcCSSWidthOrHeight(div, 'width');
    calcCSSWidthOrHeight(div, 'height');
};
