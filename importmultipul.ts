import {jaya26,ram26} from "./exportmultipil"
// class student25{
//     // age:number=22
//     m1:number;
//     m2:number
//  constructor(m1:number,m2:number,public xyz = new jaya26("jayaram kasim","amalapuram") ,public abc=new ram26("jayaram","kasim",22,"mokkalathippa")  ){
//      this.m1=m1;
//      this.m2=m2
// }
// etname(){
//     // console.log(this.age)
//     console.log(this.xyz.name,this.xyz.city)
//  console.log(  this.abc.id)
// //  console.log(this.abc.getfullname())
//  console.log(this.m1+this.m2)
//  }
// }
// var jr=new student25(56,70);
// jr.etname()
// jr.abc.getfullname()
// jr.xyz.getcity()


class jayaram{
    m1:number;
     m2:number
      constructor(m1:number,m2:number,public xyz:jaya26,private abc:ram26){
        this.m1=m1;
        this.m2=m2
      };
      getmarks=()=>{
          console.log(this.m1+this.m2)
      }
      getname(){
          console.log(this.abc.age+this.abc.address)
        this.abc. getfullname()
      };
      getcity(){
          console.log(this.xyz.city)
      }

}

var jay = new jayaram (96,86,new jaya26("jayaram kasim","amalapuram") ,new ram26("jayaram","kasim",22,"mokkalathippa") )

jay.getname();
jay.getcity()
jay.getmarks()