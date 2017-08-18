export function splitBySpace(input) {
    return input.trim().split(/[\n\r\s\uFEFF\xA0]+/);
}
