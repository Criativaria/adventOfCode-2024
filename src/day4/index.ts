import { getInput } from "../../get-input";

/* 
As the search for the Chief continues, a small Elf who lives on the station tugs on your shirt; she'd like to know if you could help her with her word search (your puzzle input). She only has to find one word: XMAS.

This word search allows words to be horizontal, vertical, diagonal, written backwards, or even overlapping other words. It's a little unusual, though, as you don't merely need to find one instance of XMAS - you need to find all of them. Here are a few ways XMAS might appear, where irrelevant characters have been replaced with .:

..X...
.SAMX.
.A..A.
XMAS.S
.X....
The actual word search will be full of letters instead. For example:

MMMSXXMASM
MSAMXMSMSA
AMXSXMAAMM
MSAMASMSMX
XMASAMXAMM
XXAMMXXAMA
SMSMSASXSS
SAXAMASAAA
MAMMMXMMMM
MXMXAXMASX
In this word search, XMAS occurs a total of 18 times; here's the same word search again, but where letters not involved in any XMAS have been replaced with .:

....XXMAS.
.SAMXMS...
...S..A...
..A.A.MS.X
XMASAMX.MM
X.....XA.A
S.S.S.S.SS
.A.A.A.A.A
..M.M.M.MM
.X.X.XMASX
Take a look at the little Elf's word search. How many times does XMAS appear?

*/


export function Day4Pt1() {

    const input = getInput('../adventofcode-2024/src/day4/input.txt');

    const regexXMASHorizontal = /X(MAS)/gs;
    const regexSMAXHorizontal = /S(AMX)/gs;

    const regexXMASVertical = /X(.{140}M.{140}A.{140}S)/gs;
    const regexSMASVertical = /S(.{140}A.{140}M.{140}X)/gs;

    const regexXMASDiagonaltoRight = /X(.{141}M.{141}A.{141}S)/gs;
    const regexSMAXDiagonaltoRight = /S(.{141}A.{141}M.{141}X)/gs;

    const regexXMASDiagonaltoLeft = /X(.{139}M.{139}A.{139}S)/gs;
    const regexSMAXDiagonaltoLeft = /S(.{139}A.{139}M.{139}X)/gs;


    function QuantityRegexReturns(regex: RegExp) {

        let inputCopy: string = input

        for (let index = 0; index < 100; index++) {
            inputCopy = inputCopy.replace(regex, "@$1");
        }

        const quantity = inputCopy.replace(/[^@]/g, "").length;
        return quantity;
    }

    const XMASHorizontal = QuantityRegexReturns(regexXMASHorizontal);
    const SMAXHorizontal = QuantityRegexReturns(regexSMAXHorizontal);

    const XMASVertical = QuantityRegexReturns(regexXMASVertical)
    const SMASVertical = QuantityRegexReturns(regexSMASVertical)

    const XMASDiagonaltoRight = QuantityRegexReturns(regexXMASDiagonaltoRight)
    const SMAXDiagonaltoRight = QuantityRegexReturns(regexSMAXDiagonaltoRight)

    const XMASDiagonaltoLeft = QuantityRegexReturns(regexXMASDiagonaltoLeft)
    const SMAXDiagonaltoLeft = QuantityRegexReturns(regexSMAXDiagonaltoLeft)



    const QuantityReturns = SMASVertical + XMASVertical + XMASDiagonaltoRight + SMAXDiagonaltoRight + XMASDiagonaltoLeft + SMAXDiagonaltoLeft + XMASHorizontal + SMAXHorizontal;

    console.log(QuantityReturns)
}