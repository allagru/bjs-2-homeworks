function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = [];
}

Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName;
}

Student.prototype.addMarks = function (...marksToAdd) {
    if (this.marks) {
        this.marks.push(...marksToAdd);
    }
}

Student.prototype.getAverage = function () {
    if (this.marks && this.marks.length !== 0) {
        return this.marks.reduce((acc, mark) => acc + mark / this.marks.length, 0);
    } else {
        return 0;
    }
}

Student.prototype.exclude = function (reason) {
    delete this.subject;
    delete this.marks;
    this.excluded = reason;
}

let student1 = new Student('Roza', 'female', 22);
let student2 = new Student('Roman', 'male', 23);
