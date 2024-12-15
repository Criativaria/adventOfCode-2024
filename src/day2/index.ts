
export function Day2Pt1() {
    /*
            7 6 4 2 1
            1 2 7 8 9
            9 7 6 2 1
            1 3 2 4 5
            8 6 4 4 1
            1 3 6 7 9
    
        This example data contains six reports each containing five levels.
        
        The engineers are trying to figure out which reports are safe.The Red - Nosed reactor safety systems can only tolerate levels that are either gradually increasing or gradually decreasing.So, a report only counts as safe if both of the following are true:
        
        The levels are either all increasing or all decreasing.
        Any two adjacent levels differ by at least one and at most three.
    
        In the example above, the reports can be found safe or unsafe by checking those rules:
        
            7 6 4 2 1: Safe because the levels are all decreasing by 1 or 2.
            1 2 7 8 9: Unsafe because 2 7 is an increase of 5.
            9 7 6 2 1: Unsafe because 6 2 is a decrease of 4.
            1 3 2 4 5: Unsafe because 1 3 is increasing but 3 2 is decreasing.
            8 6 4 4 1: Unsafe because 4 4 is neither an increase or a decrease.
            1 3 6 7 9: Safe because the levels are all increasing by 1, 2, or 3.
            So, in this example, 2 reports are safe.
        
        Analyze the unusual data from the engineers. How many reports are safe ?

        */



    const fs = require("fs")
    fs.readFile('../adventofcode-2024/src/day2/input.txt', 'utf8', function (err: any, data: any) { // ler o txt
        if (err) { return console.log(err); }

        const inputTratment = data.split("\r\n"); //fez uma array, e cada linha virou uma string

        const reportsTreatment = inputTratment.map((reports: string) => {
            const stringToArray = reports.split(" "); //transformou cada string em uma array propria

            const levelTransform = stringToArray.map((level: string) => { //transformou as strings em numeros
                const stringToNumber = parseInt(level)
                return stringToNumber
            })

            return levelTransform;
        })

        let safeReports = 0;


        reportsTreatment.map((report: number[]) => {

            for (let index = 0; index < report.length - 1; index++) {

                const diference = Math.abs(report[index] - report[index + 1]);

                if (diference > 3 || report[index] == report[index + 1]) {
                    return;
                }
                if (report[index] > report[index + 1]) {

                    const decrease = decreaseArray(report);
                    if (decrease == false) {
                        return;
                    }
                }
                if (report[index] < report[index + 1]) {
                    const increase = increaseArray(report);
                    if (increase == false) {
                        return;
                    }
                }
            }
            safeReports++;
        })

        console.log(safeReports);

        function decreaseArray(report: number[]) {
            const original = [...report];
            const decrease = report.sort((a, b) => b - a);

            if (decrease.toString() === original.toString()) {
                return true;
            } else {
                return false;
            }
        }
        function increaseArray(report: number[]) {
            const original = [...report];
            const increase = report.sort((a, b) => a - b);

            if (increase.toString() === original.toString()) {
                return true;
            } else {
                return false;
            }
        }
    });


}

export function Day2Pt2() {
    //retornando um valor mais alto do que deveria :|

    /*
        Now, the same rules apply as before, except if removing a single level from an unsafe report would make it safe, the report instead counts as safe.

        More of the above example's reports are now safe:

        7 6 4 2 1: Safe without removing any level.
        1 2 7 8 9: Unsafe regardless of which level is removed.
        9 7 6 2 1: Unsafe regardless of which level is removed.
        1 3 2 4 5: Safe by removing the second level, 3.
        8 6 4 4 1: Safe by removing the third level, 4.
        1 3 6 7 9: Safe without removing any level.
        Thanks to the Problem Dampener, 4 reports are actually safe!

        Update your analysis by handling situations where the Problem Dampener can remove a single level from unsafe reports. How many reports are now safe?

    */

    const example = [
        [7, 6, 4, 2, 1],
        [1, 2, 7, 8, 9],
        [9, 7, 6, 2, 1],
        [1, 3, 2, 4, 5],
        [8, 6, 4, 4, 1],
        [1, 3, 6, 7, 9]
    ]

    const fs = require("fs")
    fs.readFile('../adventofcode-2024/src/day2/input.txt', 'utf8', function (err: any, data: any) { // ler o txt
        if (err) { return console.log(err); }

        const inputTratment = data.split("\r\n"); //fez uma array, e cada linha virou uma string

        const reportsTreatment = inputTratment.map((reports: string) => {
            const stringToArray = reports.split(" "); //transformou cada string em uma array propria

            const levelTransform = stringToArray.map((level: string) => { //transformou as strings em numeros
                const stringToNumber = parseInt(level)
                return stringToNumber
            })

            return levelTransform;
        })

        let safeReports = 0;

        function oneByOne(data: number[][]) {

            data.map((report: number[]) => {


                if (isSafe(report) == false) {

                    for (let i = 0; i < report.length; i++) {

                        console.log(report, "-> false")

                        const inseraqeoretorno = report.filter((level: number, index: number) => index !== i);

                        if (isSafe(inseraqeoretorno)) {
                            console.log(inseraqeoretorno + " -> true")
                            return safeReports++;
                        }
                    }

                } else {
                    console.log(report + " -> true")
                    return safeReports++;
                }
            })

            console.log(safeReports);

        }

        // oneByOne(example);
        oneByOne(reportsTreatment);

        function isSafe(report: number[]) {

            for (let index = 0; index < report.length - 1; index++) {

                const diference = Math.abs(report[index] - report[index + 1]);

                if (diference > 3 || report[index] == report[index + 1]) {
                    return false;
                }
                if (report[index] > report[index + 1]) {

                    const decrease = decreaseArray(report);
                    if (decrease == false) {
                        return false;
                    }
                }
                if (report[index] < report[index + 1]) {
                    const increase = increaseArray(report);
                    if (increase == false) {
                        return false;
                    }
                }
            }
            return true;
        }

        function decreaseArray(report: number[]) {
            const original = [...report];
            const decrease = report.sort((a, b) => b - a);

            if (decrease.toString() === original.toString()) {
                return true;
            } else {
                return false;
            }
        }
        function increaseArray(report: number[]) {
            const original = [...report];
            const increase = report.sort((a, b) => a - b);

            if (increase.toString() === original.toString()) {
                return true;
            } else {
                return false;
            }
        }
    });


}