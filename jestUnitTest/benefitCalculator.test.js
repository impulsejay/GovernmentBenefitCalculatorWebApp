const benefitCalculator = require('../controller/benefitCalculatorLogic.js');

//Suite to test on the logic of benefitCalulator to get expected result 
describe('Test Suite 1', function () {
    it("Test 1 - Person who should only get Children Voucher", function () {
        expect(benefitCalculator(13, 1, 9, 208, 750348, 0, 0)).toBe('Children Voucher');
    });

    it("Test 2 - Person who should only get Student Benefit", function () {
        expect(benefitCalculator(22, 1, 11, 204, 750347, 5000, 0)).toBe('Student Benefit');
    });

    it("Test 3 - Person who should only get both Unemployment Support and Workplace medical care", function () {
        expect(benefitCalculator(39, 1, 14, 209, 750348, 2000, 4000)).toBe('Unemployment Support, Workplace Medical Care');
    });

    it("Test 4 - Person who should only get Family Support", function () {
        expect(benefitCalculator(45, 1, 2, 204, 750347, 5000, 5000)).toBe('Family Support');
    });

    it("Test 5 - Person who should only get Retirement Benefit", function () {
        expect(benefitCalculator(70, 1, 2, 204, 750347, 5000, 5000)).toBe('Retirement Benefit');
    });

    it("Test 6 - Person who should only get Workplace Medical Care", function () {
        expect(benefitCalculator(39, 1, 14, 209, 750348, 3500, 7000)).toBe('Workplace Medical Care');
    });

    it("Test 7 - Person who should get NA", function () {
        expect(benefitCalculator(41, 1, 10, 203, 750349, 9000)).toBe('NA');
    });
});