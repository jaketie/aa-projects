const Employee = require('./employee')

class Manager extends Employee {
    constructor(name, salary, title, manager=null, employees=[]) {
        super(name, salary, title, manager)
        this.employees = employees;

    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    calculateBonus(multiplier) {
        let bonus = (this.salary + this._totalSubSalary()) * multiplier;
        return bonus;
    }
    _totalSubSalary() {
        let sum = 0;
        let employees = this.employees;
        employees.forEach(function (employee) {
            if (employee instanceof Manager) {
                sum += employee.salary + employee._totalSubSalary(employee.employees);
            } else if (employee instanceof Employee) {
                sum += employee.salary;
            }
        });
        return sum;
    }
}

module.exports = Manager;
