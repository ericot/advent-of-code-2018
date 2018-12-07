import * as fs from "fs";

const lines: string[] = fs.readFileSync("input.txt", "utf-8").split("\n").filter(Boolean);

let doubles: number = 0;
let triples: number = 0;

for (const line of lines) {
    const charCounts = [...line].reduce(countChars, new Map());
    doubles += [...charCounts.values()].find((value: number) => value === 2) ? 1 : 0;
    triples += [...charCounts.values()].find((value: number) => value === 3) ? 1 : 0;
}

function countChars(acc: Map<string, number>, curr: string): Map<string, number> {
    return acc.set(curr, (acc.get(curr) || 0) + 1);
}

console.log(doubles * triples); // tslint:disable-line
