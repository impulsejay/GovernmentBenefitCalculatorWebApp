class Person {
    constructor(age, isCitizen, floor, unit, postalCode, incomePerMonth) {
        this.age = age;
        this.isCitizen = isCitizen;
        this.floor = floor;
        this.unit = unit;
        this.postalCode = postalCode;
        this.incomePerMonth = incomePerMonth;
    }
    getAge() {
        return this.age;
    }
    setAge(age) {
        this.age = age;
    }
    getIsCitizen() {
        return this.isCitizen;
    }
    setIsCitizen(isCitizen) {
        this.isCitizen = isCitizen;
    }
    getFloor() {
        return this.floor;
    }
    setFloor(floor) {
        this.floor = floor;
    }
    getUnit() {
        return this.unit;
    }
    setUnit(unit) {
        this.unit = unit;
    }
    getPostalCode() {
        return this.postalCode;
    }
    setPostalCode(postalCode) {
        this.postalCode = postalCode;
    }
    getIncomePerMonth() {
        return this.incomePerMonth;
    }
    setIncomePerMonth(incomePerMonth) {
        this.incomePerMonth = incomePerMonth;
    }
}
module.exports = Person;