class Employe {
id:number=101;
fname:string="jayaram";
lname:string="kasim"
age:number=22;
salary:number=2000;
 getsalary(){
    console.log("slary is L:"+this.salary)
};
getfullname(){
    console.log("name is : "+this.fname+this.lname)
}

}

var emp=new Employe();
emp.getfullname();
emp.getsalary()
   

    // modifiers
class Employe12 {
   protected id:number=101;
    fname:string="jayaram";
    lname:string="kasim"
    age:number=22;
   private salary:number=2000;
    private getsalary(){
        console.log("slary is L:"+this.salary)
        console.log(this.id)
    };
 public   getfullname(){
        console.log("name is : "+this.fname+this.lname);
        this.getsalary()
    }
    
    }
    
    var emp1=new Employe12();
    emp1.getfullname();
    // console.log(emp1.id)
    // emp1.getsalary()