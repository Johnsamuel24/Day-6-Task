


class Circle
{
    
    constructor(radius,color)
    {
        this.radius=radius;
        this.color=color;
        console.log("Initial Radius of the Circle is :",(this.radius).toFixed(4));
        console.log("Initial Color of the Circle  is :",this.color);
        console.log("\n");
    }
   

circle(radius,color)
{
    this.radius=radius;
    this.color=color;
    console.log("Radius of the Circle is :",(this.radius).toFixed(4));
    console.log("Color of the Circle  is :",this.color);
    console.log("\n");
}

get Radius()
{
    return ((this.radius).toFixed(4));
}

set Radius(r)
{
    this.radius=r;
    console.log("Using set function ",(this.radius).toFixed(4));
    console.log("\n");
}

get Color()
{
    return this.color;
}

set Color(s)
{
    this.color=s;
    console.log("Using set function ",this.color);
    console.log("\n");
}

get Area()
{
    return Math.PI*this.radius*this.radius;
}

get Circumference()
{
    return Math.PI*2*this.radius;
}

toString()
{
    let ra =(this.radius).toFixed().toString();
    console.log("Radius of the Circle in String ",ra);
    console.log("Data Type of the Radius is :",typeof ra);
    console.log("\n");
    console.log("Color of the Circle in String is :",this.color);
    console.log("Data Type of the Color is :",typeof this.color);
    console.log("\n");
}

}


let c1 = new Circle(1.0,"red");


c1.circle(9.0000,"Brown");

console.log("Radius of Circle ",c1.Radius);

c1.Radius=3.0000;

console.log("Color of Circle ",c1.Color);

c1.Color="White";

console.log("Area of a Circle ",c1.Area);

console.log("Circumference of Circle ",c1.Circumference);

console.log("\n");

c1.toString();