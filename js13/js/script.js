//1

function Person(firstName, lastName, course, mark) {
     this.student = {
        firstName: firstName,
        lastName: lastName,
    },
        this.course = course,
        this.mark = mark
        
    }

    let student = new Person("Kate", "Maisak", 1, 9);


    Person.prototype.greetings = function() {
        console.log("Hello from prototype");
    }

    console.log(student);


//2


let car = {
    door: 4,
    transmission: "automatic",
    isColor() {
        console.log("Black");
   }
}

let priceOfCar = {
    price: 5000,
    carMileage: 115000,
    isExpensive() {
        console.log("No");
    },
    __proto__: car,
}


let carForSale = {
    isbooking() {
        console.log(false);
    },
    __proto__: car,
}

console.log(carForSale);


//3

const animal = new Object({
    name: "Barsik",
    age: 5,
    color: "red"
    })
    
const cat = Object.create(animal);
    
console.log(Object.getPrototypeOf(cat));





   