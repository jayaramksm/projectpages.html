export {
jaya26,
ram26
}
    class jaya26 {
        name:string;
        city:string;
      constructor(name:string,city:string){
          this.name=name,
          this.city=city
      };

    getcity=()=>{
        console.log(this.city)
    }
    }

class ram26 {
    id:number=101;
    name:string="jayaram";
fname:string;
lname:string;
age:number;
address:string;
constructor(fname:string,lname:string,age:number,address:string){
this.fname=fname;
this.lname=lname;
this.age=age;
this.address=address;

};
getfullname(){
    console.log(this.fname+this.lname)
}

}



