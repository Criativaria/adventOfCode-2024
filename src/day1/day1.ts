
async function Day1Pt1() {

    //     Pair up the smallest number in the left list with the smallest number in the right list, then the second-smallest left number with the second-smallest right number, and so on.
    // Within each pair, figure out how far apart the two numbers are; you'll need to add up all of those distances. For example, if you pair up a 3 from the left list with a 7 from the right list, the distance apart is 4; if you pair up a 9 with a 3, the distance apart is 6.
    // Your actual left and right lists contain many location IDs. What is the total distance between your lists?

    const fs = require("fs")
    fs.readFile('../adventofcode-2024/src/day1/input.txt', 'utf8', function (err: any, data: any) {
        if (err) { return console.log(err); }

        const inputTratment = data.replaceAll("\r\n", " ").replaceAll("   ", ",").replaceAll("  ", "").split(",") // tira todos os espaços e quebras de linhas, e transforma em virgula

        const list1: number[] = []; //par
        const list2: number[] = []; //impar

        inputTratment.forEach((num: string, index: number) => { //separa as duas listas

            const stringToNumber = parseFloat(num);

            if (index % 2 === 0) {
                list1.push(stringToNumber);
            } else {
                list2.push(stringToNumber);
            }
        });

        //deixou do menor pro maior
        const orderList1 = list1.sort((a, b) => a - b);
        const orderList2 = list2.sort((a, b) => a - b);

        const diference = orderList1.map((num: number, index: number) => { //calcula a diferença dos numeros das listas
            return Math.abs(num - orderList2[index]);
        })

        const result = diference.reduce((total: number, num: number) => { //soma as diferenças
            return total + num;
        }, 0);

        console.log(result)

    });
}

async function Day1Pt2() {
    // Calculate a total similarity score by adding up each number in the left list after multiplying it by the number of times that number appears in the right list.

    const fs = require("fs")
    fs.readFile('../adventofcode-2024/src/day1/input.txt', 'utf8', function (err: any, data: any) {
        if (err) { return console.log(err); }

        const inputTratment = data.replaceAll("\r\n", " ").replaceAll("   ", ",").replaceAll("  ", "").split(",") // tira todos os espaços e quebras de linhas, e transforma em virgula

        const list1: number[] = []; //par
        const list2: number[] = []; //impar

        inputTratment.forEach((num: string, index: number) => { //separa as duas listas

            const stringToNumber = parseFloat(num);

            if (index % 2 === 0) {
                list1.push(stringToNumber);
            } else {
                list2.push(stringToNumber);
            }
        });


        const score = list1.map((num1: number) => {

            let times = 0

            list2.forEach((num2: number) => {
                if (num1 === num2) {
                    return times++
                }
            })
            return num1 * times;
        })

        const result = score.reduce((total: number, num: number) => {
            return total + num;
        }, 0)

        console.log(result);
    })
}

export { Day1Pt1, Day1Pt2 }