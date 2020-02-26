var obj:object={
    id:101,
    fname:"jayaram",
    age:22,

}
var {id,fname,age}:any=obj;
console.log(id);
console.log(fname);
console.log(age);

var obje:{
    sid:number;
    sname:string;
    sage:number
}={
    sid:102,
    sname:"jayaram",
    sage:22

};
var {sid,sname,sage}:any=obje;
console.log(sid);
console.log(sname);
console.log(sage);

// console.log(obje.sid);
// console.log(obje.sname);
// console.log(obje.sage);
