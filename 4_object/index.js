"use strict";
exports.__esModule = true;
var user = {
    name: "sagar",
    email: "sagar@mail.com",
    isActive: true
};
function createUser(_a) {
    var string = _a.name, number = _a.age, boolean = _a.isPaid;
    console.log(arguments);
}
createUser({ name: 'sagar', age: 24, isPaid: true });
//return type is also a object same params
function course(_a) {
    var string = _a.courseName, number = _a.price;
    return { courseName: string, price: number };
}
console.log(course({ courseName: "React Js ", price: 399 }));
