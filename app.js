var correct = 0;
var Question = (function () {
    function Question() {
    }
    return Question;
}());
///Question 1
var question1 = new Question();
question1.answer1 = 'Irving';
question1.answer2 = 'Austin';
question1.answer3 = 'Dallas';
question1.answer4 = 'Fortworth';
function myFunction1() {
    var person = prompt("Q1 - What is the capital of Texas : Type (A) for " + question1.answer1 + ", (B) for " + question1.answer2 + ",(C) for\n    " + question1.answer3 + ", and (D) for " + question1.answer4, "Answer here");
    var greeting1;
    if (person = "B" || "b") {
        greeting1 = "Correct!";
        correct++;
    }
    else {
        greeting1 = "Incorrect";
        document.getElementById("myButton1").value = "Try Again";
    }
    document.getElementById("result1").innerHTML = greeting1;
}
///Question 2
var question2 = new Question();
question2.answer1 = 'Irving';
question2.answer2 = 'Austin';
question2.answer3 = 'Dallas';
question2.answer4 = 'Fortworth';
function myFunction2() {
    var person = prompt("Q1 - What is the capital of Texas : Type (A) for " + question2.answer1 + ", (B) for " + question2.answer2 + ",(C) for\n    " + question2.answer3 + ", and (D) for " + question2.answer4, "Answer here");
    var greeting2;
    if (person = "C" || "c") {
        greeting2 = "Correct!";
        correct++;
    }
    else {
        greeting2 = "Incorrect";
        document.getElementById("myButton2").value = "Try Again";
    }
    document.getElementById("result2").innerHTML = greeting2;
}
///Question 3
var question3 = new Question();
question3.answer1 = 'Irving';
question3.answer2 = 'Austin';
question3.answer3 = 'Dallas';
question3.answer4 = 'Fortworth';
function myFunction3() {
    var person = prompt("Q1 - What is the capital of Texas : Type (A) for " + question3.answer1 + ", (B) for " + question3.answer2 + ",(C) for\n    " + question3.answer3 + ", and (D) for " + question3.answer4, "Answer here");
    var greeting3;
    if (person = "C" || "c") {
        greeting3 = "Correct!";
        correct++;
    }
    else {
        greeting3 = "Incorrect";
        document.getElementById("myButton3").value = "Try Again";
    }
    document.getElementById("result3").innerHTML = greeting3;
}
///Question 4
var question4 = new Question();
question4.answer1 = 'Irving';
question4.answer2 = 'Austin';
question4.answer3 = 'Dallas';
question4.answer4 = 'Fortworth';
function myFunction4() {
    var person = prompt("Q1 - What is the capital of Texas : Type (A) for " + question4.answer1 + ", (B) for " + question4.answer2 + ",(C) for\n    " + question4.answer3 + ", and (D) for " + question4.answer4, "Answer here");
    var greeting4;
    if (person = "B" || "b") {
        greeting4 = "Correct!";
        correct++;
    }
    else {
        greeting4 = "Incorrect";
        document.getElementById("myButton4").value = "Try Again";
    }
    document.getElementById("result4").innerHTML = greeting4;
}
///Question 5
var question5 = new Question();
question5.answer1 = 'Irving';
question5.answer2 = 'Austin';
question5.answer3 = 'Dallas';
question5.answer4 = 'Fortworth';
function myFunction5() {
    var person = prompt("Q1 - What is the capital of Texas : Type (A) for " + question5.answer1 + ", (B) for " + question5.answer2 + ",(C) for\n    " + question5.answer3 + ", and (D) for " + question5.answer4, "Answer here");
    var greeting5;
    if (person = "D" || "d") {
        greeting5 = "Correct!";
        correct++;
    }
    else {
        greeting5 = "Incorrect";
        document.getElementById("myButton5").value = "Try Again";
    }
    document.getElementById("result5").innerHTML = greeting5;
}
var score;
if (correct < 60) {
    score = "F";
}
if (correct < 70 && correct > 59.9) {
    score = "D";
}
if (correct < 80 && correct > 69.9) {
    score = "C";
}
if (correct < 90 && correct > 79.9) {
    score = "B";
}
if (correct > 90) {
    score = "A";
}
function myFunctionFin() {
    alert(document.getElementById("result5").innerHTML = "you have recieved the grade of (" + score + ")");
}
