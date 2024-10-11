// 1. Define a class called Person with properties like name, age, and gender.
// 2. Create an object, using the Person class and assign it to a variable.
// 3. Add methods to the Person class such as greet() to log a greeting.
// 4. Access and log the properties of an object created in task2.
// 5. Update the values of class properties in a new object.
// 6. Create multiple objects, using the Person class and assign them to variables.
// 7. Define a getter method in a class that returns a specific property value.
// 8. Use a getter method to create a computed property that generates its value based on certain conditions or calculations.
// 9. Define a setter method in a class that sets the value of a specific property.
// 10. Define a private property inside a class using the # prefix.


// 1

// class Person {
//     constructor(name,age,gender){
//         this.name = name;
//         this.age = age;
//         this.gender = gender;
//     }

//     displayInfo(){
//         return this.name
//     }

// }

// const personInfo = new Person("atuka",15,"Male");

// console.log(personInfo.displayInfo())

// 2

class Person {
    #password
    constructor(name,age,gender,password){
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.password = password;
    }

    displayInfo(){
        console.log(`Name: ${this.name}, Age: ${this.age}, Gender: ${this.gender}`)
    }

    greet(){
        return "name:" + " " +  this.name
    }

    changeName(newName){
        this.name = newName;
    }

    changeAge(newAge){
        this.age = newAge;
    }

    changeGender(newGender){
        this.gender = newGender;
    }
    getPassword(){
        return this.password;
    }
}

const info = new Person("atuka",15,"male","Xuskia110269")

info.displayInfo()


console.log(info.greet())

info.changeName = "Gela";
console.log(info);
info.changeAge = "16";
console.log(info.changeAge);
info.changeGender = "female";
console.log(info.changeGender);
console.log(info.getPassword())
