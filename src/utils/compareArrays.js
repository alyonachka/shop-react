
export const compareArrays = (arr1, arr2) => {
    if (arr1.length === arr2.length) {
        return arr1.every(el => arr2.indexOf(el) !== -1);
    }
    return false;
};