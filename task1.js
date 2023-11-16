


class movie
{

    //constructor for the class Movie, which takes  title of the movie,the studio and the rating as its arguments 
    //And sets the respective class properties to these values.
    constructor(title,studio,rating)
    {
        this.title=title;
        this.studio=studio;
        if(rating==null)
        {
        this.rating="PG";
        }
        else{
            this.rating=rating;
        }
    }

    //method getPG, which takes an array of base type Movie as its argument
    getpg(...arr)
    {
        
        let i=0;
arr.forEach(function (obj)
{
    let x;
    
    for(let key in obj)
    {
    if(obj.hasOwnProperty("rating"))
    {
        let y = Object.keys(obj).filter((key) => key.includes("rating")); 
        x = y[0];
    }
}
       //console.log(obj);
        if(obj[x] == "PG")
        {
            arr2[i]=obj;
            i++
            
        }
    

});
//returns a new array of only those movies in the input array with a rating of "PG"
return arr2;


}
    }




// code that creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”
let film = new movie("Casino Royale","Eon Production","PG13");


let obj1 ={title:"Harry Poter",studio:"Eon Production",rating:"PG"};
let obj2 ={title:"cars",studio:"Eon production",rating:"PG"};
let obj3 ={title:"Rocky",studio:"Eon Production",rating:"R"};


let arr = [obj1,obj2,obj3];


let arr2 = [];

//the input array with full of Movie instances
film.getpg(...arr);

console.log("The Movies List  ",arr);

console.log("\n");

//The returned array with movie instances
console.log("The Movies List With Rating PG are ",film.getpg());
