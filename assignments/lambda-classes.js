// CODE here for your Lambda Classes

class Person {
    constructor(attr) {
        this.name = attr.name;
        this.age = attr.age;
        this.location = attr.location;
    }

    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`)
    }
}

class Instructor extends Person {
    constructor(instrAttr) {
        super(instrAttr);
        this.specialty = instrAttr.specialty;
        this.favLanguage = instrAttr.favLanguage;
        this.catchPhrase = instrAttr.catchPhrase;
    }

    demo(subject) {
        console.log(`Today we are learning about ${subject}`)
    }

    grade(stuObj, subject) {
        console.log(`${stuObj.name} receives a perfect score on ${subject}`)
    }
}

class Student extends Person {
    constructor(stuAttr) {
        super(stuAttr);
        this.previousBackground = stuAttr.previousBackground;
        this.className = stuAttr.className;
        this.favSubjects = stuAttr.favSubjects;
    }

    listsSubjects() {
        console.log(`${this.name}'s Favorite Subjects.`)
        for(let i = 0;i < this.favSubjects.length;i++) {
            console.log(this.favSubjects[i])
        }
    }

    PRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}`)
    }

    sprintChallenge(subject) {
        console.log(`${this.name} has begun sprint challenge on ${subject}`)
    }
}

class ProjectManager extends Instructor {
    constructor(pmAttr) {
        super(pmAttr);
        this.gradClassName = pmAttr.gradClassName;
        this.favInstructor = pmAttr.favInstructor;
    }

    standUp(channel) {
        console.log(`${this.name} announces to ${channel}, @channel standy times!`)
    }

    debugsCode(stuObj, subject) {
        console.log(`${this.name} debugs ${stuObj.name}'s code on ${subject}`)
    }
}



const dan = new Instructor({
    name: 'Dan',
    age: 'Infinity',
    location: 'Denver',
    specialty: 'Relentless Debugger',
    favLanguage: 'JavaScript, Python, Elm, ReasonML, SmallTalk, Haskell, C#, Java, Rust, Go, Ruby, Crystal, Elixir, Lua, and Julia',
    catchPhrase: 'If you can do the thing, you can get paid to do the thing!',
});

const andrew = new Student({
    name: 'Andrew',
    age: 18,
    location: 'Texas',
    previousBackground: 'High School Comp Sci',
    className: 'Web21',
    favSubjects: ['Angular', 'Javascript', 'CSS'],
});

const brandon = new ProjectManager({
    name: 'Brandon',
    age: '34',
    gradClassName: 'WEB18',
    favInstructor: 'Professor Lambda',
    location: 'Maine',
    specialty: 'Redux',
    favLanguage: 'JavaScript, C++, Python.',
    catchPhrase: "You shall not pass!",
});

dan.demo('Javascript');
dan.grade(andrew, 'JS');

andrew.listsSubjects();
andrew.PRAssignment('JS');
andrew.sprintChallenge('Javascript');

brandon.standUp('web21_brandon')
brandon.debugsCode(andrew, 'Javascript')