import { readFile } from '../common/readFile'



export const part1 = (fileName: string) => {
    const input = readFile(fileName);
    var data = input.split(',');
    var position = 0;
    data[1] = '12';
    data[2] = '2';
    while (Number(data[position]) != 99) {
        var newValue = Number(data[position + 1]);
        if (Number(data[position]) === 1) {
            newValue = Number(data[position + 2]) + Number(data[position + 3]);
        }
        else {
            newValue = Number(data[position + 2]) + Number(data[position + 3]);
        }
        data[Number(data[position + 1])] = String(newValue);
        position += 4;
    }
    return Number(data[0]);
}
