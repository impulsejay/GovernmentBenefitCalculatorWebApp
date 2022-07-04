'use strict';
const Person = require('./model/Person.js');
const benefitCalculator = require('./controller/benefitCalculatorLogic.js');
var http = require('http');
var port = process.env.PORT || 8080;
const fs = require("fs");
var expectedTestCaseCount = 0;
var currentTestCaseCount = 1;
var personArray = [];
var familyMembers = [];

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('Test case output' + '\n');

    //read the input test file per line
    try {
        // read contents of the file
        const data = fs.readFileSync('inputTestFiles/Input 1.txt', 'UTF-8');

        // split the contents by new line
        const lines = data.split(/\r?\n/);

        // read line by line to add into Person array
        for (var count = 0; count < lines.length; count++){
            //res.write(lines[count] + '\n');

            if (count === 0) {
                expectedTestCaseCount = lines[count];
            }

            if (count > 1) {
                var age, citizen, floor, unit, postalCode, incomePerMonth;

                if (lines[count] !== '') {
                    var columnDatas = lines[count].split(',');

                    //to not add unnecessary blank lines and remove whitespaces
                    if (columnDatas[0] !== '') {
                        age = columnDatas[0].trim();
                    }
                    if (columnDatas[1] !== '') {
                        citizen = columnDatas[1].trim();
                    }
                    if (columnDatas[2] !== '') {
                        floor = columnDatas[2].trim();
                    }
                    if (columnDatas[3] !== '') {
                        unit = columnDatas[3].trim();
                    }
                    if (columnDatas[4] !== '') {
                        postalCode = columnDatas[4].trim();
                    }
                    if (columnDatas[5] !== '') {
                        incomePerMonth = columnDatas[5].trim();
                    }

                    var person = new Person(age, citizen, floor, unit, postalCode, incomePerMonth);
                    personArray.push(person);
                }
            }
        }

        //loop through the personArray to check whether it fits into any benefits
        for (var count = 0; count < personArray.length; count++) {
            var currentAllowedBenefits = '', totalFamilyIncomePerMonth = 0, floor = '', unit = '', postalCode = '';

            //searches the array first to see if there are family members
            floor = personArray[count].floor;
            unit = personArray[count].unit;
            postalCode = personArray[count].postalCode;
            familyMembers = personArray.filter(item => item.floor == floor && item.unit == unit && item.postalCode == postalCode);
            if (familyMembers.length > 0) {
                for (var member of familyMembers) {
                    totalFamilyIncomePerMonth = Number(totalFamilyIncomePerMonth) + Number(member.incomePerMonth);
                }
            }

            currentAllowedBenefits = benefitCalculator(personArray[count].age, personArray[count].isCitizen, personArray[count].floor, personArray[count].unit, personArray[count].postalCode, personArray[count].incomePerMonth, totalFamilyIncomePerMonth);

            /*//Scenario 1(Children Voucher)
            if (personArray[count].age < 15 && personArray[count].isCitizen == 1) {
                currentAllowedBenefits = 'Children Voucher';
            }

            //Scenario 2(Student Benefit)
            if ((personArray[count].age > 14 && personArray[count].age < 26) && personArray[count].isCitizen == 1 && totalFamilyIncomePerMonth <= 5000) {
                if (currentAllowedBenefits === "") {
                    currentAllowedBenefits = 'Student Benefit';
                }
                else {
                    currentAllowedBenefits += ', Student Benefit';
                }
            }

            //Scenario 3(Unemployment Support)
            if ((personArray[count].age > 29 && personArray[count].age < 46) && personArray[count].isCitizen == 1 && totalFamilyIncomePerMonth <= 4000) {
                if (currentAllowedBenefits === "") {
                    currentAllowedBenefits = 'Unemployment Support';
                }
                else {
                    currentAllowedBenefits += ', Unemployment Support';
                }
            }

            //Scenario 4(Family Support)
            if ((personArray[count].age > 44 && personArray[count].age < 61) && personArray[count].isCitizen == 1 && totalFamilyIncomePerMonth <= 7000) {
                if (currentAllowedBenefits === "") {
                    currentAllowedBenefits = 'Family Support';
                }
                else {
                    currentAllowedBenefits += ', Family Support';
                }
            }

            //Scenario 5(Retirement Benefit)
            if (personArray[count].age > 60 && personArray[count].isCitizen == 1 && personArray[count].incomePerMonth <= 6000) {
                if (currentAllowedBenefits === "") {
                    currentAllowedBenefits = 'Retirement Benefit';
                }
                else {
                    currentAllowedBenefits += ', Retirement Benefit';
                }
            }

            //Scenario 6(Workplace Medical Care)
            if ((personArray[count].age > 24 && personArray[count].age < 61) && personArray[count].incomePerMonth <= 4000) {
                if (currentAllowedBenefits === "") {
                    currentAllowedBenefits = 'Workplace Medical Care';
                }
                else {
                    currentAllowedBenefits += ', Workplace Medical Care';
                }
            }

            if (currentAllowedBenefits === "") {
                currentAllowedBenefits = 'NA';
            }*/

            res.write('Test case ' + currentTestCaseCount + ': ' + currentAllowedBenefits + '\n');

            currentTestCaseCount++;
            if (expectedTestCaseCount == currentTestCaseCount-1) {
                res.write('End');
            }
        }
    } catch (err) {
        console.error(err);
    }

}).listen(port);

//}
//exports.startServer = startServer;