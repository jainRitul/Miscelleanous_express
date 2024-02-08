//consturctor -> doesnot return anything and first letter will be capital
function Person(name,age){
    this.name = name;
    this.age = age;
    console.log(this);
}
Person.prototype.talk = function(){
   console.log(`Hi my name is ${this.name} `);
}
let p1 = new Person("ritul" , 19);
let p2 = new Person("prinjal" , 19);