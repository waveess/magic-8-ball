var answers = ["The answer is yes",
              "The answer is no",
              "I would advice against it",
              "Go for it!",
              "It is unclear",
              "Things are looking nice",
              "Ask again later"
            ];

window.onload = function magic(){
var eight = document.getElementById("eight");
var answer = document.getElementById("answer");
var eightball = document.getElementById("eight-ball");
var question = document.getElementById("question");

eightball.addEventListener("click", function() {
   if(question.value.length < 1) {
       alert('What would you like to know?');
   } else {
    eight.innerText = "";
    var num = Math.floor(Math.random() * Math.floor(answers.length));
    answer.innerText = answers[num];
   }
})
}