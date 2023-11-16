

class person{

    constructor(id,name,age,phno,address,pincode,state)
    {
this.id=id;
this.name=name;
this.age=age;
this.phno=phno;
this.address=address;
this.pincode=pincode;
this.state = state;

    }

    get details()
    {
return (
        "Student Id         "+this.id+"\n"+
        "Student Name       "+this.name+"\n"+
        "Student age        "+this.age+"\n"+
        "Student phno       "+this.phno+"\n"+
        "Student address    "+this.address+"\n"+
        "Student Pincode    "+this.pincode+"\n"+
        "Student pincode    "+this.state
    
        )
    }
}

let a = new person(1,"prasanth",24,8056234532,"padur",603103,"tamil nadu");

console.log(a.details);


