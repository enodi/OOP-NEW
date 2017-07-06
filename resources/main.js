'use strict'

class User{
    constructor(firstName, lastName, email, club){
        this.userFirstName = firstName;
        this.userLastName = lastName;
        this.userEmail = email;
        this.userClub = club;
        this.userScore = 0;
        this.privilege = 1;
    }
    addScore(score){
        this.userScore += score;
        return `User score is ${this.userScore}`;
    }
    showNameAndScores(){
        return `${this.userFirstName} ${this.userLastName} score is: ${this.userScore}`
    }

    // Changes user's email address
    changeEmail(newEmail) {
        this.email = newEmail;
        return `New Email Saved as: ${this.email}`;
    }
}


// Subclass Student inherits from User
class Student extends User {
    constructor (firstName, lastName, email) {
        super(firstName, lastName, email, 0);
    }

    studentWithNoClub () {
        return `${this.userFirstName} ${this.userLastName} does not belong to any club`;
    }

    // This method overrides the addScore method in User by multiplying score by 5
    addScore (score) {
        this.userScore += (score * 5);
        return `User score is ${this.userScore}`;
    }

}

module.exports = User;
module.exports = Student;





