
export const compareArrays = (arr1, arr2) => {
    if (arr1.length === arr2.length) {
        return arr1.every((el) => {
            return arr2.indexOf(el) !== -1;
        });
    }
    return false;
};