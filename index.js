// Code your solution here
function findMatching(array, driver) {
    const matching = array.filter(element => element.toLowerCase() === driver.toLowerCase());
    return matching;
};

function fuzzyMatch(array, letter) {
    const matching = array.filter(element => element.startsWith(letter));
    return matching;
};

function matchName(array, string) {
    const matching = array.filter(element => {
        if (element.name === string) {
            return element
        };
    });
    return matching;
};