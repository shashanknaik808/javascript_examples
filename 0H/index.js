// 09 Inheritance in Js 
// Extends Keyword
/*
class Alpha {

    constructor(x, y){
        this.x = x;
        this.y = y;
    }

    showAlpha(){
        console.log("Value of of : " + this.x);
        console.log("Value of of : " + this.y);
    }
}

class Beta extends Alpha {
    constructor(x, y, z){
        super(x, y);
        this.z = z
    }

    showBeta(){
        console.log("\nValue of x : " + this.x);
        console.log("Value of x : " + this.y);
        console.log("Value of x : " + this.z);
    }

    sum(){
        return this.x + this.y + this.z;
    }
}

let a = new Alpha(10, 20);
a.showAlpha();


let b = new Beta(1, 2, 3);
b.showAlpha();
b.showBeta();
console.log(`Sum of object members is ${b.sum()}`);

// a.showBeta();
*/

//  Static methods
// Suppose we do not want to create an instance every time to invoke a method, we mark that
// method as static
// Static methods can be accessed only using class names & not by any reference varibales
/*
// Alpha
class Alpha {

    constructor(x, y){
        this.x = x;
        this.y = y;
    }

    showAlpha(){
        console.log("Value of of : " + this.x);
        console.log("Value of of : " + this.y);
    }

    static sayHello(){
        console.log(`Hello Everyone!!`);
    }
}

// Beta
class Beta extends Alpha {


    static sayNamste(person) {
           console.log(`Namaste ${person}, welcome to india`);
    }

    constructor(x, y, z){
        super(x, y);
        this.z = z
    }

    showBeta(){
        console.log("\nValue of x : " + this.x);
        console.log("Value of x : " + this.y);
        console.log("Value of x : " + this.z);
    }

    sum(){
        return this.x + this.y + this.z;
    }

}

Alpha.sayHello();
Beta.sayNamste('Shama');

let a = new Alpha(10, 20);
let b = new Beta(1, 2, 3);

// a.sayHello();
// b.sayNamste('shama');
*/

