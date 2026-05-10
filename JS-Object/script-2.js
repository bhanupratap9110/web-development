// .....................Find keys & values
let bhanu = {
    name: "bhanu",
    dob: "05-03-2005",
    phone: 9263395471,
    city: "bhopal",
    profession: "Engineer",
};

console.log(Object.keys(bhanu));
console.log(Object.values(bhanu));

// ...........Find Greater than
let unar = [12, 23, 34, 45,56, 67, 78, 89, 90];
console.log(unar.find((val) => val > 10));
console.log(unar.find);

// .................Filter
let arr2 = [84, 20, 56, 72, 85, 72, 90];
console.log(arr2.filter((val) => val > 30));

// ................... Find
let arr3 = [14, 20, 56, 72, 85, 72, 10]
console.log(arr3.find((val) => val > 50));

// object Find
let ar  = [22,43,6,74,8,91,5,23,32,6,9,4,7,92,45];

console.log(ar.find((val)=> val  === 32));
console.log(ar.findIndex((val)=> val  === 6));
console.log(ar.findLastIndex((val)=> val  === 6));


// Slice
let arr4 = [12, 23, 34, 45,56, 67, 78, 89, 90];
console.log(arr4.slice(0,3));

// split
let abc1 = "This is a Web Devlopment"
console.log(abc1.split("  "));

let abc = "This is a Web-Devlopment"
console.log(abc.split("-"));