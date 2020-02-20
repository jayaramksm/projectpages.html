class Studentjay{
    id:number=101;
    fname:string="jayaram";
    lname:string="kasim";
    m1:number=80;
    m2:number=85;
    m3:number=90;
    getname(){

        console.log(this.fname+this.lname)
    };
    getmarks(){
        var m4=80
    console.log(this.m1+this.m2+this.m3+m4)
    }
}
var std1=new Studentjay();
std1.getname()
std1.getmarks();

class Studram{
    id:number=101;
    fname:string="jaya";
    lname:string="ram";
    marks:{
        m1:number
    m2:number
    m3:number;  
    }={
        m1:96,
        m2:85,
        m3:80
    };
}
var std=new Studram();
console.log(std.marks.m1+std.marks.m2+std.marks.m3)

