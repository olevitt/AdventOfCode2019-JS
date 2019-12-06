import { readFile } from '../common/readFile'
import { EOL } from 'os';

const calculateFuel = (mass: number) => {
    return Math.floor(mass / 3) - 2;
}

const fuelNeededPart2 = (mass: number): number => {
    const neededFuel = calculateFuel(mass);
    return neededFuel <= 0 ? 0 : neededFuel + fuelNeededPart2(neededFuel);
}

const fuelNeededPart2Procedural = (mass: number) => {
    var neededFuel = calculateFuel(mass);
    var totalFuel = neededFuel;
    while (neededFuel > 0) {
        neededFuel = Math.max(0, calculateFuel(neededFuel));
        totalFuel += neededFuel;
    }
    return totalFuel;
}

export const part1 = (input: string) => {
    const input1 = readFile(input)
    return input1.split(EOL).map(e => calculateFuel(Number(e))).reduce((acc, value) => acc + value, 0);
}

export const part2 = (input: string) => {
    const input1 = readFile(input)
    return input1.split(EOL).map(e => fuelNeededPart2(Number(e))).reduce((acc, value) => acc + value, 0);
}