// CODE here for your Lambda Classes

console.log(`******************************`)

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

    editGrade(stuObj) {
        const num = Math.floor(Math.random() * 11) + 1;
        const rng = Math.floor(Math.random() * 11) + 1;
        if(num < 5) {
            stuObj.grade = stuObj.grade + (rng * 10);
            if(stuObj.grade > 100){
                stuObj.grade = 100;
            }
            console.log(`${this.name} has raised ${stuObj.name}'a grade`)
            return stuObj.grade
        }
        else {
            stuObj.grade = stuObj.grade - (rng * 10);
            if(stuObj.grade < 0){
                stuObj.grade = 0;
            }
            console.log(`${this.name} has lowered ${stuObj.name}'a grade`)
            return stuObj.grade
        }
    }
}

class Student extends Person {
    constructor(stuAttr) {
        super(stuAttr);
        this.previousBackground = stuAttr.previousBackground;
        this.className = stuAttr.className;
        this.favSubjects = stuAttr.favSubjects;
        this.grade = stuAttr.grade;
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

    graduate() {
        if(this.grade >= 70) {
            console.log(`${this.name} can graduate with a grade of ${this.grade}!`)
        }
        else { 
            console.log(`${this.name} can not graduate with a grade of ${this.grade}. Get back to grading!`)
            dan.editGrade(andrew);
        }
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
    grade: Math.floor(Math.random() * 101) + 1,
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
andrew.graduate();
andrew.graduate();

brandon.standUp('web21_brandon')
brandon.debugsCode(andrew, 'Javascript')