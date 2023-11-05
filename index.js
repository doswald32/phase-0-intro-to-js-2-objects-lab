const employee = {
    name: "Dan Oswald",
    streetAddress: "2876 W. 53rd Ave.",
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmployee = {
        ...employee };
    newEmployee[key] = value;
    return newEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}