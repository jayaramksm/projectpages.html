class set {
    id:number=101;
    name:string="jayaram";
    age:number=22;
    getname(){
        var self = this;
        setTimeout(function(){
            console.log(self.name)
        },5000)
        // setTimeout(()=>{
        //     console.log(this.name)
        // },5000)
    };
    getid(){
    setInterval(()=>{
    console.log(this.id)
    },10000)
    }
    }
    
    var jay =new set();
    jay.getname();
    jay.getid()
    