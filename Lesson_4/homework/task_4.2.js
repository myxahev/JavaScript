'use strict'

/**
*  The function splits the number by digits and returns an object with the recorded digits of the number
* @param { int } number in the range[0, 999]
* @return { Object } an object with digits of a number or an empty string
*/
function getDigits(number) {
    if (!Number.isInteger(number) && 999 < number < 0) {
        console.log("invalid value, enter the correct number");
        return {};
    }
    return {
        units: number % 10,
        tens: Math.floor(number / 10) % 10,
        hundreds: Math.floor(number / 100),
    }
}

console.log(getDigits(563));
