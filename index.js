/*const employee = {
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
}*/

const employee = {
    name: "Dan Oswald",
    streetAddress: "1540 Morgan Ave.",
}

function updateEmployeeWithKeyAndValue(object, key, value) {
    let newEmployee = {...object}
    newEmployee[key] = value;
    return newEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(object, key, value) {
    object[key] = value;
    return object;
}

function deleteFromEmployeeByKey(object, key) {
    let newObject = {...object};
    delete(newObject[key]);
    return newObject;
}

function destructivelyDeleteFromEmployeeByKey(object, key) {
    delete(object[key]);
    return object;
}