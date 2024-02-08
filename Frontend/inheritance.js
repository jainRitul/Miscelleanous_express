class Person {
    constructor(name,age){
        console.log("Person class constructor");
        this.name = name;
        this.age = age;
    }
    talk() {
        console.log(`Hi my name is ${this.name}`);
    }
}

class Student extends Person {
    constructor(name,age,marks){
        console.log("Student class constructor");
        super(name,age); // parent class construtor is being called
        this.marks = marks;
    }
}
class Teacher extends Person {
    constructor(name,age,subject){
        console.log("Teacher class constructor");
        super(name,age); // parent class construtor is being called
        this.subject = subject;
    }
}



//example of mammal
class Mammal{
    constructor(name){
        this.name = name;
        this.type = "warm-blooded"
       
    }
    eat(){
        console.log("I am eating");
    }
}
class Dog extends Mammal{
    constructor(name){
        super(name);
    }
    bark(){
        console.log("woowww....");
    }
    eat(){
        console.log("Dog is eating");
    }
}
class Cat extends Mammal{
    constructor(name){
        super(name);
    }
    meow(){
        console.log("meowwwwww....");
    }
}