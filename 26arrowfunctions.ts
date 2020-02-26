class Arrow {
id:number=101;
name:string="jayaram";
age:number=22;
getname(){
    var self = this;
    setTimeout(function(){
        console.log(self.name)
    },5000)
};
getid(){
setInterval(()=>{
console.log(this.id)
},10000)
}
}

var jay =new Arrow();
jay.getname();
jay.getid()