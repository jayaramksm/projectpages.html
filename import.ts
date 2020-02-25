import {person25} from "./export"
class student25{
    // age:number=22
    m1:number;
    m2:number
 constructor(m1:number,m2:number,public abc=new person25("jayaram","kasim",22,"mokkalathippa")  ){
     this.m1=m1;
     this.m2=m2
}
etname(){
    // console.log(this.age)
 console.log(  this.abc.id)
//  console.log(this.abc.getfullname())
 console.log(this.m1+this.m2)
 }
}
var yx=new student25(56,70);
yx.etname()
yx.abc.getfullname()
