const assert = require('chai').assert;
const User = require('../resources/main.js');
const Student = require('../resources/main.js'); 

describe('User', () => {

	describe('checks if object is an instance of User class', () => {
		it('should return true if user is an instance of User class', () => {
			let user = new User('jane', 'doe', 'janedoe@example.com', 'developers club');
			assert.instanceOf(user, User, 'is an instance of');
		});
	});

	describe('handles change of user Email', () => {
		it('should change email of user', () => {
			let user = new User('jane', 'doe', 'janedoe@example.com');
			assert.equal(user.changeEmail('jane_doe@mail.com'), 'New Email Saved as: jane_doe@mail.com');
		});
	});

	describe('handles displaying user names and score', () => {
		it('should return a string showing user name and score', () => {
			let user = new User('jane', 'doe', 'janedoe@example.com');
			assert.equal(user.showNameAndScores(), 'jane doe score is: 0');
		});
	});

	describe('handles valid output', () => {
		it('showNameAndScores method should return type string', () => {
			let user = new User('jane', 'doe', 'janedoe@example.com');
			let result = user.showNameAndScores()
			assert.typeOf(result, 'string'); 
		});
	});

	describe('checks if object is an instance of Student class', () => {
		it('should return true if student is an instance of Student class', () => {
			let student = new Student('jane', 'doe', 'janedoe@example.com', 'developers club');
			assert.instanceOf(student, Student, 'is an instance of');
		});
	});

	describe('handles displaying students with no club', () => {
		it('should display user does not belong to any club', () => {
			let student = new Student('john', 'doe', 'johndoe@gmail.com');
			assert.equal(student.studentWithNoClub(), 'john doe does not belong to any club');
		});
	});

	describe('handles calculation of user score', () => {
		it('should display a string showing user score', () => {
			let student = new Student('jane', 'doe', 'janedoe@example.com');
			assert.equal(student.addScore(3), 'User score is 15'); 
		});
	});

	describe('handles valid output', () => {
		it('addScore method should return type string', () => {
			let student = new Student('jane', 'doe', 'janedoe@example.com');
			let result = student.addScore(3)
			assert.typeOf(result, 'string'); 
		});
	});

	describe('handles valid input', () => {
		it('should return a string when 3 is passed as argument', () => {
			let student = new Student('jane', 'doe', 'janedoe@example.com');
			let result = student.addScore(3);
			assert.deepEqual(result, 'User score is 15');
		});
	});
})