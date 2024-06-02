const questions= [
    {
        question: "which is the largest animal",
        answers : [
            
                {text: "shark",correct:"false"},
                {text: "elephent",correct:"true"},
                {text: "cow",correct:"false"},
                {text: "gorila",correct:"false"},

            
        ]
    },
    {
        question: " Which country has the largest population in the world?",
        answers : [
            
                {text: "china",correct:"true"},
                {text: "india",correct:"false"},
                {text: "usa",correct:"false"},
                {text: "russia",correct:"false"},

            
        ]
    },
    {
        question: " What is the chemical symbol for water?",
        answers : [
            
                {text: "h2o",correct:"true"},
                {text: "so2",correct:"false"},
                {text: "o2",correct:"false"},
                {text: "co2",correct:"false"},

            
        ]
    },
    {
        question: " What is the capital city of France?",
        answers : [
            
                {text: "delhi",correct:"false"},
                {text: "paris",correct:"true"},
                {text: "hong kong",correct:"false"},
                {text: "london",correct:"false"},

            
        ]
    },
    {
        question: " What is the largest planet in our Solar System",
        answers : [
            
                {text: "pluto",correct:"false"},
                {text: "earth",correct:"true"},
                {text: "jupitar",correct:"false"},
                {text: "saturn",correct:"false"},

            
        ]
    }
  
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentIndexscore = 0;
let Score = 0;

function startQuiz(){
    currentIndexscore  = 0;
    Score = 0;
    nextButton.innerHTML = "Next"
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQustion = questions[currentIndexscore];
    let questionNo = currentIndexscore +1;
    questionElement.innerHTML = questionNo + " ." + currentQustion.question;


    currentQustion.answers.forEach(answer =>{
        const button = document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click",selectAnswer);

    });
}



function resetState(){
    nextButton.style.display="none";
   while (answerButton.firstChild){
    answerButton.removeChild(answerButton.firstChild);
   }
}

function selectAnswer(e){
    const selectedBtn= e.target;
    const isCorrect = selectedBtn.dataset.correct==="true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        Score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }

    Array.from(answerButton.children).forEach(button =>{
        if(button.dataset.correct ==="true"){
            button.classList.add("correct");
        }
        button.disabled = "true"
    });
    nextButton.style.display = "block";

}

function showScore(){
    resetState();
    questionElement.innerHTML = ` you scored ${Score} out of ${questions.length}!`;
    nextButton.innerHTML = "play again";
    nextButton.style.display = "block";
}
function handleNextButton(){
    currentIndexscore++;
    if(currentIndexscore < questions.length){
        showQuestion();
    }else {
        showScore();
    }
}

nextButton.addEventListener("click", () =>{
    if(currentIndexscore < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})
startQuiz();