//console.log("this my first node practical....");
//************************** */
//variables
// var a = 10;
// var b = 20;

//primitive and refrence
//primitive : number,string,boolean,
//refrence object, array

// var name = "TOPS";
// var b = false;

// var student = {
//     name: "Kaushal",
//     email: "kaushal@gmail.com"
// }

//console.log(student.name);
//var arr = [10, 20, 30, 40, 50, "tops"];
//console.log(arr);

//****arithmatic oprator */
// var n1 = 100;
// var n2 = 10;

// console.log("result pf n1 + n2 : " + (n1 + n2));
// console.log("result pf n1 - n2 : " + (n1 - n2));
// console.log("result pf n1 * n2 : " + (n1 * n2));
// console.log("result pf n1 / n2 : " + (n1 / n2));

//relatinal
//console.log((n1 > n2));

//assignemtn oprator
//var c = n1;
//c = c + 2;
//c += 2;
///console.log(c);
//logical oprator
// console.log(true && true);
// console.log(true && false);
// console.log(false && true);
// console.log(false && false);

// console.log(true || true);
// console.log(true || false);
// console.log(false || true);
// console.log(false || false);

// console.log(!true);
// console.log(!false);

//conditional statement :
// var age = 20;
// if (age > 18) {
//     console.log("elegeble for voting...");
// }
// else {
//     console.log("not elegeble for voting...");
// }

//looping for,while, dowhile
//var arr1 = [10, 20, 30, 40, 50, 60];

// for (var i = 0; i < arr1.length; i++) {
//     console.log(arr1[i]);
// }

// arr1.forEach(function (i) {
//     console.log(i);
// })

// var j = 0;
// while (j < 0) {
//     console.log(arr1[j]);
//     j++;
// }

// var j = 0;
// do {
//     console.log(arr1[j]);
//     j++;
// } while (j < 0);


// function square(num) {
//     console.log(num * num);
// }

// square(5);
// square(10);

// function avg(n1, n2) {
//     return (n1 + n2) / 2;
// }

//var result = avg(10, 30);
//console.log(result);

// const fname = "tops";
// fname = "tech";
// console.log(fname);

// var str = "hello java hello tops";

// console.log(str.length)
// console.log(str.charAt(1));
// console.log(str.indexOf('j'));
// console.log(str.lastIndexOf('h'));
// console.log(str.slice(2, 7))

// var ar = [10, 20, 30, "Java", "Node"];
// console.log(ar);
//ar.pop();
//ar.push("Tech");
//ar.shift();
//ar.shift();
// ar.unshift(20);
// console.log(ar);

// var mydate = new Date();
// console.log(mydate);
// console.log(mydate.getDate());
// console.log(mydate.getDay());
// console.log(mydate.getFullYear())
// console.log(mydate.getMonth())

// var fname;
// class base {

//     constructor(name) {
//         fname = name;
//     }

//     static display() {
//         console.log(fname);
//     }
// }

// var myDemo = new base("Tops");
// //myDemo.display();
// base.display();


// function display() {
//     console.log("calling function...")
// }
// display();

// var display = ()=>{
//     console.log("calling function...");
// }

var person = {
    fullname: function (city, country) {
        return this.fname + " " + this.lname + " " + city + " " + country;
    }
}
var person1 = {
    fname: "Kaushal",
    lname: "sojitra"
}

var person2 = {
    fname: "Milan",
    lname: "bhadani"
}

//console.log(person.fullname.call(person2, "surat", "India"));
//console.log(person.fullname.apply(person2, ["surat", "India"]));

var bound = person.fullname.bind(person1);
console.log(bound("surat", "India"));