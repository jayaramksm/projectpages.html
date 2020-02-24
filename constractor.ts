class Stud{
    id:number;
    name:string
    m1:number;
    m2:number;
    m3:number
    marks:Number=478;
    fname:String="jay";
    lname:String="ram";
   
    constructor(id:number,name:string,m1:number,m2:number,m3:number){
        this.id=id;
        this.name=name
        this.m1=m1;
        this.m2=m2;
        this.m3=m3

    };
    getname(){
        console.log(this.name)
        // console.log(this.fname+this.lname)
    };
    getmarks(){
        console.log(this.m1+this.m2+this.m3)
    }
    getfullname(){
        console.log(this.fname+""+this.lname)
    }
    

}

var jay= new Stud(101,"ram",50,78,70)
console.log(jay)
jay.getname()
jay.getfullname();
jay.getmarks()