function Student(name, surname, yearOfBirth, grades) {
    this.name = name;
    this.surname = surname;
    this.yearOfBirth = yearOfBirth;
    this.grades = grades;
    this.attendance = new Array(25);
    this.attendanceIndex = 0;

    this.age = function() {
        const currentYear = new Date().getFullYear();
        return currentYear - this.yearOfBirth;
    };

    this.present = function() {
        if (this.attendanceIndex < this.attendance.length) {
            this.attendance[this.attendanceIndex] = true;
            this.attendanceIndex++;
        } else {
            console.log(`Attendance List is full`);
        }
    };

    this.absent = function() {
        if (this.attendanceIndex < this.attendance.length) {
            this.attendance[this.attendanceIndex] = false;
            this.attendanceIndex++;
        } else {
            console.log(`Attendance List is full`);
        }
    };

    this.summary = function () {
        let averageGrade = 0;
        for (grade of this.grades) {
            averageGrade += grade;
        }
        averageGrade = averageGrade / this.grades.length;

        let attendedLessons = 0;
        let lessons = 0;
        for (lesson of this.attendance) {
            if (lesson === true) {
                attendedLessons++;
            }
        }
        const attendanceRate = attendedLessons / this.attendanceIndex;

        if (averageGrade > 90 && attendanceRate > 0.9) {
            console.log("Молодець!");
        } else if (averageGrade > 90 || attendanceRate > 0.9) {
            console.log("Добре, але можна краще!");
        } else {
            console.log("Редиска!");
        }
    };
}