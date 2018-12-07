import * as fs from "fs";

const lines: string[] = fs.readFileSync("input.txt", "utf-8").split("\n").filter(Boolean);

const res: number = lines.reduce((acc: number, cur: string) => acc + parseInt(cur, 10), 0);
console.log(res); // tslint:disable-line
