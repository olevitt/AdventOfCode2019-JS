import { EOL } from 'os';
import { readFile } from '../common/readFile'

const test1 = (i: Number) => {
    return respectRules(String(i), false);
}

const test2 = (i: Number) => {
    return respectRules(String(i), true);
}

const respectRules = (input: string, isPart2: boolean): boolean => {
    var currentChar = '';
    var hasDouble = false;
    var currentStreak = 0;
    for (var i = 0; i < input.length; i++) {
        if (input[i] === currentChar) {
            currentStreak++;

            if (!isPart2 && currentStreak === 2) {
                hasDouble = true;
            }
        }
        else {
            if (currentStreak === 1) {
                hasDouble = true;
            }
            currentStreak = 0;
        }

        if (Number(input[i]) < Number(currentChar)) {
            return false;
        }
        currentChar = input[i];
    }


    if (currentStreak === 1) {
        hasDouble = true;
    }

    return hasDouble;
}

export const part1 = (fileName: string) => {
    const input = readFile(fileName).split('-');
    var nbTotal = 0;
    for (var i = Number(input[0]); i <= Number(input[1]); i++) {
        if (test1(i)) {
            nbTotal++;
        }
    }
    return nbTotal;
}

export const part2 = (fileName: string) => {
    const input = readFile(fileName).split('-');
    var nbTotal = 0;
    for (var i = Number(input[0]); i <= Number(input[1]); i++) {
        if (test2(i)) {
            nbTotal++;
        }
    }
    return nbTotal;
}