

let price=0;

class uber{

    constructor(km)
    {
        this.km=km;
        if(km>0)
        {

        if(km<=5)
        {
        price =50;  
        }

        if(km>5 || km<=10)
        {
        price =100;
        }

        if(km>10)
        {
            price =100+((km-10)*20);
        }
        
        }
    }
        get cost()
        {
            return Math.floor(price);
        }
    
}


let a = new uber(100);

console.log(" Your Price is ₹",a.cost);
