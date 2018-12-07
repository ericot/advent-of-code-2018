import * as fs from "fs";

const lines: string[] = fs.readFileSync("input.txt", "utf-8").split("\n").filter(Boolean);

function findCommonLetters(): string | undefined {
    for (let i = 0; i < lines.length; i++) {
        for (let j = i + 1; j < lines.length; j++) {
            const val = [...lines[i]].filter((value: string, index: number) => lines[j].charAt(index) === value);
            if (val.length === lines[i].length - 1) {
                return val.join("");
            }
        }
    }
}

console.log(findCommonLetters()); // tslint:disable-line
