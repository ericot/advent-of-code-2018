import * as fs from "fs";

const lines: string[] = fs.readFileSync("input.txt", "utf-8").split("\n").filter(Boolean);

let res: number = 0;
let tmp: number | undefined;
const data: Set<number> = new Set();

do {
    tmp = lines.map((line) => parseInt(line, 10)).find((value: number) => {
        return data.size === data.add(res += value).size;
    });
} while (tmp === undefined);

console.log(res); // tslint:disable-line
