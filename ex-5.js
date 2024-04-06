function calculateStudentGrade(score) {
  // Start coding here
  if (score <= 100 && score >=90){
    score = "A";
  }else if (score < 90 && score >= 80){
   score = "B";
  }else if (score < 80 && score >= 70){
    score = "C";
  }else if (score < 70 && score >= 60){
    score = "D"
  }else{
    score = "F";
  }
  return score;
}

// Example case
let johnGrade = calculateStudentGrade(30);
let lisaGrade = calculateStudentGrade(73);
let janeGrade = calculateStudentGrade(80);
let jjGrade = calculateStudentGrade(60);
let alexGrade = calculateStudentGrade(90);

console.log(`John grade is ${johnGrade}`);
console.log(`Lisa grade is ${lisaGrade}`);
console.log(`Jane grade is ${janeGrade}`);
console.log(`JJ grade is ${jjGrade}`);
console.log(`Alex grade is ${alexGrade}`);
