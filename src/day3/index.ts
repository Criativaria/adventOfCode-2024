import { getInput } from "../../get-input";


export function Day3Pt1() {

    /* 
        It seems like the goal of the program is just to multiply some numbers. It does that with instructions like mul(X,Y), where X and Y are each 1-3 digit numbers. For instance, mul(44,46) multiplies 44 by 46 to get a result of 2024. Similarly, mul(123,4) would multiply 123 by 4.

        However, because the program's memory has been corrupted, there are also many invalid characters that should be ignored, even if they look like part of a mul instruction. Sequences like mul(4*, mul(6,9!, ?(12,34), or mul ( 2 , 4 ) do nothing.

        For example, consider the following section of corrupted memory:

        xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))
        Only the four highlighted sections are real mul instructions. Adding up the result of each instruction produces 161 (2*4 + 5*5 + 11*8 + 8*5).

        Scan the corrupted memory for uncorrupted mul instructions. What do you get if you add up all of the results of the multiplications?
    */

    const input = getInput('../adventofcode-2024/src/day3/input.txt').toString();

    const regex = /(mul\(\d+,\d+\))/gm
    const onlyMul = input.match(regex)

    const allMul = onlyMul.map((mul: string) => {
        const onlyMulNumbers = mul.match(/\d+/gm)!;

        const num1 = parseInt(onlyMulNumbers[0])
        const num2 = parseInt(onlyMulNumbers[1])

        const multiply = num1 * num2;

        return multiply;
    })
    const result = allMul.reduce((total: number, num: number) => {
        return total + num;
    }, 0)

    console.log(result);
}
export function Day3Pt2() {

    /* 
        There are two new instructions you'll need to handle:

        The do() instruction enables future mul instructions.
        The don't() instruction disables future mul instructions.
        Only the most recent do() or don't() instruction applies. At the beginning of the program, mul instructions are enabled.

        For example:

        xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5))
        This corrupted memory is similar to the example from before, but this time the mul(5,5) and mul(11,8) instructions are disabled because there is a don't() instruction before them. The other mul instructions function normally, including the one at the end that gets re-enabled by a do() instruction.

        This time, the sum of the results is 48 (2*4 + 8*5).

        Handle the new instructions; what do you get if you add up all of the results of just the enabled multiplications?  

   */

    const input = getInput('../adventofcode-2024/src/day3/input.txt').toString();

    const regex = /(do\(\)|mul\(\d+,\d+\)|don't\(\))/gm
    const onlyMul = input.match(regex)

    let canMutiply = true;

    const allMul = onlyMul.map((mul: string) => {

        if (mul == "don't()") {
            canMutiply = false;
            return 0
        }
        if (mul == "do()") {
            canMutiply = true;
            return 0;
        }
        if (canMutiply) {


            const onlyMulNumbers = mul.match(/\d+/g)!;

            if (onlyMulNumbers !== null) {

                const num1 = parseInt(onlyMulNumbers[0]);

                const num2 = parseInt(onlyMulNumbers[1]);

                const multiply = num1 * num2;
                return multiply;
            }
        }
        return 0;
    })

    const result = allMul.reduce((total: number, num: number) => {

        return total + num;
    }, 0)


    console.log(result);

}
