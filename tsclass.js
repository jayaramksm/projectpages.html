var Employee = /** @class */ (function () {
    function Employee() {
        this.id = 101;
        this.name = "jayaram";
        this.dep = "ui developer";
    }
    Employee.prototype.getsalary = function () {
        var sal = 20000;
        console.log(sal);
    };
    ;
    return Employee;
}());
var emp = new Employee();
emp.getsalary();
