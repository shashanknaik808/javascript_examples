console.log("This is Tutorial31.js");

class Employee {
    constructor(givenName, givenExperience, givenDivision) {
        this.name = givenName;
        this.givenExperience = givenExperience;
        this.division = givenDivision;
    }

    slogan() {
        return `I am ${this.name} and this company is the best`;
    }

    joiningYear() {
        return 2020 - this.givenExperience;
    }

    static add(a, b) {
        return a + b;
    }
}

class Programmer extends Employee {
    constructor(givenName, givenExperience, givenDivision, language, github) {
        super(givenName, givenExperience, givenDivision);
        this.language = language;
        this.github = github;
    }

    favouriteLanguage() {
        if (this.language == 'python'){
            return 'Python';
        }
        else{
            return 'JavaScript';
        }
    }
}