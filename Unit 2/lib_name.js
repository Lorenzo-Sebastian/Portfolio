class Person {
    constructor(fname, lname){
        this.firstName = fname;
        this.lastName = lname;
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
const p = new Person("Lorenzo", "Sebastian");