// var a = 50;
// console.log(a);
// console.log(b);

// var b = 20;
// console.log(a);
// console.log(b);

// GLOBAL VARIABLE
let test = "This is global test variable";
function classA(){
    console.log("classA" , test);
}
function classB(){
    console.log("classB" , test);
}
// LOCAL VARIABLE
function classC(){
    let test2 = "This is local variable"
    console.log("classC" , test);
    console.log("classC" , test2);
}
function classD(){
    console.log("classD" , test);
}
function classE(){
    console.log("classE" , test);
}
function classF(){
    console.log("classF" , test);
}
function classG(){
    console.log("classG" , test);
}

classA();
classB();
classC();
classD();
classE();
classF();
classG();