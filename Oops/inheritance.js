//Inheritance Example

class User {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }       

    logMe(){
        console.log(`Username: ${this.username}, Email: ${this.email}`);
    }
}


class Teacher extends User {
    constructor(username, email, password, subject) {
        super(username, email, password);
        this.subject = subject;
    }

    addCourse() {
      console.log(`A course was added by ${this.username} on ${this.subject}`);  
}   

}


const teacher1 = new Teacher('john_doe', 'john@fb.com', '123', 'Mathematics');
teacher1.logMe();
teacher1.addCourse();


const internTeaccher = new User("intern_rock")
internTeaccher.logMe();
// internTeaccher.addCourse(); // This will throw an error since addCourse is not a method of User class
console.log(teacher1 === internTeaccher); // false
console.log(teacher1 === Teacher) // false
console.log(teacher1 instanceof Teacher); // true
console.log(teacher1 instanceof User); // true  