export class person25{
    id:number=101;
    name:string="jayaram"
fname:string;
lname:string;
age:number;
address:string;
constructor(fname:string,lname:string,age:number,address:string){
this.fname=fname;
this.lname=lname;
this.age=age;
this.address=address;

}
getfullname(){
    console.log(this.fname+this.lname)
}

}
// var jay=new person25()
// var per=new person25("jayaram","kasim",22,"mokkalathippa");
// per.getfullname();
// console.log(jay)