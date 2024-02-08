function personMaker(name , age){
    const person = {
        name : name,
        age : age,
        talk(){
            console.log(`Hii my name is ${name}`);
        },
    }
    return person;
};
let p1 = personMaker("ritul",19);
let p2 = personMaker("prinjal",19);
let p3 = personMaker("sarvesh",20);


//factory fun use krke bhi hum ko ritul ,prinjal ,sarvesh k liye alg alg copy milegi memory m jo inefficient h isiiye new operator aaya
//    p1.talk === p2.talk gives false; that means new reference created