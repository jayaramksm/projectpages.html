var Student = /** @class */ (function () {
    function Student() {
        this.id = 101;
        this.fname = "jayaram";
        this.lname = "kasim";
        this.m1 = 80;
        this.m2 = 85;
        this.m3 = 90;
    }
    Student.prototype.getname = function () {
        console.log(this.fname + this.lname);
    };
    ;
    Student.prototype.getmarks = function () {
        console.log(this.m1 + this.m2 + this.m3);
    };
    return Student;
}());
var std1 = new Student();
std1.getname();
std1.getmarks();
var Stud = /** @class */ (function () {
    function Stud() {
        this.id = 101;
        this.fname = "jaya";
        this.lname = "ram";
        this.marks = {
            m1: 96,
            m2: 85,
            m3: 80
        };
    }
    return Stud;
}());
var std = new Stud();
console.log(std.marks.m1 + std.marks.m2 + std.marks.m3);
