class Person {
    constructor(pAttrs) {
        this.name = pAttrs.name;
        this.age = pAttrs.age;
        this.location = pAttrs.location;
    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    }



}

class Instructor extends Person {
    constructor(inAttrs) {
        super(inAttrs);
        this.speciality = inAttrs.speciality;
        this.favLanguage = inAttrs.favLanguage;
        this.catchPhrase = inAttrs.catchPhrase;
    }

    demo(subject) {
        return `Today we are learning about ${subject}`;
    }

    grade(student, subject) {
        return ` ${student.name} receives a perfect score on ${subject} `;
    }

}

class Student extends Person {
    constructor(stuAttrs) {
        super(stuAttrs);
        this.previousBackground = stuAttrs.previousBackground;
        this.favSubjects = stuAttrs.favSubjects;
        this.className = stuAttrs.className;
    }
    listSubject() {
        this.favSubjects.map(item => console.log(item));

    }
    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}`;

    }
    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}`;
    }

}

class ProjectManager extends Instructor {
    constructor(pmAttrs) {
        super(pmAttrs);
        this.gradClassName = pmAttrs.gradClassName;
        this.favInstructor = pmAttrs.favSubjects;
    }
    standUp(channel) {
        return `${this.name} announces to ${channel}, @channel standy times!`;

    }

    debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}`;
    }
}

const Will = new Instructor({
    name: "Will",
    age: 32,
    location: "Manchester",
    speciality: "javascript",
    favLanguage: "python",
    catchPhrase: "big up",
})

const Steve = new Student({
    name: "Steve",
    age: 30,
    location: "Liverpool",
    previousBackground: "Manager",
    className: "CS2222",
    favSubjects: ["html", "css"],
})

const Linda = new ProjectManager({
    name: "Linda",
    age: 40,
    location: "London",
    gradClassName: "CS2",
    favInstructor: "Bob",
})
console.log(Will.demo("Node"));
console.log(Will.grade(Steve, "Html"));
console.log(Steve.listSubject());
console.log(Steve.PRAssignment("HTML"));
console.log(Steve.sprintChallenge("Javascript IV"));
console.log(Linda.standUp("Webeu4slack"));
console.log(Linda.debugsCode(Steve, "CSS"));
