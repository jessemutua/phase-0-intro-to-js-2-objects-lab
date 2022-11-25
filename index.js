// Write your solution in this file!
const employee = {
    Name: "Jesse",
    streetAddress: "1234",
}

function beforeEach() {
    for (const key in employee) {
        delete employee[key];
    }
    employee.employeeName = "Sam";

}

beforeEach();

function updateEmployeeWithKeyAndValue(employee, streetAddress, value) {
    employee = {
        ...employee,
        streetAddress: value
    }
    return employee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, streetAddress, value) {
    employee[streetAddress] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    employee = {
        ...employee,
    }
    delete employee[key]
    return employee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}