import { importInput } from '../util';

// Input is array with strings. convert to numbers
const input = importInput('./src/day_1/input').map(Number);

console.log('Part One:');

input.some((firstDigit) => {
    for (let b = 0; b < input.length; b++) {
        const secondDigit = input[b];
        if (firstDigit + secondDigit === 2020) {
            console.log('Solution: ', firstDigit * secondDigit);
            return true;
        }
    }
});

console.log('Part Two:');
input.some((firstDigit) => {
    for (let b = 0; b < input.length; b++) {
        const secondDigit = input[b];
        if (firstDigit + secondDigit < 2020) {
            for (let h = 0; h < input.length; h++) {
                const thirdDigit = input[h];
                if (firstDigit + secondDigit + thirdDigit === 2020) {
                    console.log('Solution: ', firstDigit * secondDigit * thirdDigit);
                    return true;
                }
            }
        }
    }
});
