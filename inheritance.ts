class vechical{
    name:string;
    modal:number;
    cost:number;
    constructor(name:string,modal:number,cost:number){
        this.name=name;
        this.modal=modal;
        this.cost=cost
    }
}


class benze extends vechical{
    grtname(){
        console.log(this.name,this.modal)
    }
    color:string="white";
    number:number=1313;
    cites:number=5;
    getcarinfo(){
        console.log(this.color,this.number,this.cites,this.cost)
    }
    
}

var car =new benze("bezec",2015,10000000);
car.grtname()
car.getcarinfo()
console.log( car.color)