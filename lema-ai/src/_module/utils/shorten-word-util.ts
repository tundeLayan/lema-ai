/**
 *
 * @param {*} word
 * @param {*} length
 * @description - it returns a word with ellipsis if the length
 * of the word is more than length passed
 * @returns - string
 */
export const shortenWord = (word = '', length = word.length) => {
    if (!word) return;
    if (word?.length <= length) {
        return word;
    } else {
        return `${word?.slice(0, length)}...`;
    }
};
