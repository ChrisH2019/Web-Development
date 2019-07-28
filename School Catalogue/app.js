class School {
  constructor(name, level, numberOfStudents) {
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents;
  }
  
  get name() {
    return this._name;
  }
  
  get level() {
    return this._level;
  }
  
  get numberOfStudents() {
    return this._numberOfStudents;
  }
  
  set numberOfStudents(value) {
    if (typeof value !== 'number') {
      console.log('numberOfStudents must be set to a Number.')
    } else {
      this._numberOfStudents = value;
    }
  }
  
  quickFacts() {
    console.log(`${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level.`);
  }
  
  static pickSubstituteTeacher(substituteTeachers) {
    return substituteTeachers[Math.floor(Math.random() * (substituteTeachers.length -1))];
  }
}

class PrimarySchool extends School {
  constructor(name, level, numberOfStudents, pickupPolicy) {
    super(name, level, numberOfStudents);
    this._pickupPolicy = pickupPolicy;
  }
  
  get pickupPolicy() {
    return this._pickupPolicy;
  }
}

class HighSchool extends School {
  constructor(name, level, numberOfStudents, sportsTeam) {
    super(name, level, numberOfStudents);
    this._sportsTeam = sportsTeam;
  }
  
  get sportsTeam() {
    return this._sportsTeam;
  }
}

let pickupPolicy = 'Students must be picked up by a parent, guardian, or a family member over the age of 13.';
let substituteTeachers = ['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli'];
const lorraineHansbury = new PrimarySchool('Lorraine Hansbury', 'Primary', 514, pickupPolicy);
console.log(lorraineHansbury.pickupPolicy);
lorraineHansbury.quickFacts();
console.log(PrimarySchool.pickSubstituteTeacher(substituteTeachers));

let sportsTeam = ['Baseball', 'Basketball', 'Volleyball', 'Track and Field'];
let alSmith = new HighSchool('Al E. Smith', 'High', 415, sportsTeam);
console.log(alSmith.sportsTeam);