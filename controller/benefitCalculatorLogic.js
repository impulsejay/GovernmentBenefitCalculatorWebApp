function benefitCalculator(age, isCitizen, floor, unit, postalCode, incomePerMonth, totalFamilyIncomePerMonth) {
    var currentAllowedBenefits = '';

    try {
        //Scenario 1(Children Voucher)
        if (age < 15 && isCitizen == 1) {
            currentAllowedBenefits = 'Children Voucher';
        }

        //Scenario 2(Student Benefit)
        if ((age > 14 && age < 26) && isCitizen == 1 && totalFamilyIncomePerMonth <= 5000) {
            if (currentAllowedBenefits === "") {
                currentAllowedBenefits = 'Student Benefit';
            }
            else {
                currentAllowedBenefits += ', Student Benefit';
            }
        }

        //Scenario 3(Unemployment Support)
        if ((age > 29 && age < 46) && isCitizen == 1 && totalFamilyIncomePerMonth <= 4000) {
            if (currentAllowedBenefits === "") {
                currentAllowedBenefits = 'Unemployment Support';
            }
            else {
                currentAllowedBenefits += ', Unemployment Support';
            }
        }

        //Scenario 4(Family Support)
        if ((age > 44 && age < 61) && isCitizen == 1 && totalFamilyIncomePerMonth <= 7000) {
            if (currentAllowedBenefits === "") {
                currentAllowedBenefits = 'Family Support';
            }
            else {
                currentAllowedBenefits += ', Family Support';
            }
        }

        //Scenario 5(Retirement Benefit)
        if (age > 60 && isCitizen == 1 && incomePerMonth <= 6000) {
            if (currentAllowedBenefits === "") {
                currentAllowedBenefits = 'Retirement Benefit';
            }
            else {
                currentAllowedBenefits += ', Retirement Benefit';
            }
        }

        //Scenario 6(Workplace Medical Care)
        if ((age > 24 && age < 61) && incomePerMonth <= 4000) {
            if (currentAllowedBenefits === "") {
                currentAllowedBenefits = 'Workplace Medical Care';
            }
            else {
                currentAllowedBenefits += ', Workplace Medical Care';
            }
        }
    }
    catch (err) {
        console.error("Inside benefitCalculator.js : error - " + err);
    }

    if (currentAllowedBenefits === "") {
        currentAllowedBenefits = 'NA';
    }

    return currentAllowedBenefits;
}
module.exports = benefitCalculator;