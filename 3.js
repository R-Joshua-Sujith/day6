class Person {
    constructor(firstName, lastName, age, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    getAge() {
        return this.age;
    }

    getEmail() {
        return this.email;
    }

    setFirstName(firstName) {
        this.firstName = firstName;
    }

    setLastName(lastName) {
        this.lastName = lastName;
    }

    setAge(age) {
        this.age = age;
    }

    setEmail(email) {
        this.email = email;
    }
}

const person = new Person('Joshua', 'Sujith', 23, 'rjoshuasujith@gmail.com');
console.log(person.getFullName()); // Output: Joshua Sujith
console.log(person.getAge()); // Output: 23
console.log(person.getEmail()); // Output: rjoshuasujith@gmail.com

person.setLastName('Kumar');
person.setAge(25);

console.log(person.getFullName()); // Output: Joshua Kumar
console.log(person.getAge()); // Output: 25
