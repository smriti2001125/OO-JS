import { randomimage, generaterandomImageSize } from "./picsum.js";

const imgSize = generaterandomImageSize();
const img = randomimage(imgSize);
document.body.append(img);

const person = {
    firstName: "Smriti",
    lastName: "khadka",
    age: 23,
    eyeColor: "brown",
    fullName: function() {
        return this.firstName + ' ' + this.lastName;}
    };


    console.log(person.firstName);
    console.log(person.lastName);
    console.log(person.age);
    console.log(person.eyeColor);
    console.log(person.fullName());

//create object using n ew keyword
const car = new Object();
car.make = "Toyota";
car.model = "Camry";
car.year = 2020;

console.log(car.make);
console.log(car.model);
console.log(car.year);

//using call and bind method
const person1 = {
    fullName: function() {
        return this.firstName + ' ' + this.lastName;
    }
};

const person2 = {
    firstName: "John",
    lastName: "Doe"
};
console.log(person1.fullName.call(person2)); // Output: John Doe
const boundFullName=person1.fullName.bind(person2);
console.log(boundFullName()); // Output: John Doe

function Student(firstName, lastName, age, eyeColor){
this.firstName=firstName,
this.lastName=lastName,
this.age=age,
this.eyeColor=eyeColor;}

const maleStudent = new Student('John','Doe','50','blue');
console.log(maleStudent.firstName);

const femaleStudent = new Student('Smriti','Khadka','23','brown');
console.log(femaleStudent.firstName);

Student.nationality ="Nepali";
console.log(Student.nationality);

Student.prototype.fullName =function(){
return this.firstName +' '+ this.lastName;
};
console.log(femaleStudent.fullName());





