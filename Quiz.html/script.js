const quizData = [
    {
        question: "In which year did Christopher Columbus reach the Americas?",
        options: ["1234", "1492", "6745", "1230"],
        correctAnswer: "1492"
    },
    {
        question: "How many sides does a triangle have?",
        options: ["Three", "Two", "Five", "Six"],
        correctAnswer: "Three"
    },
    {
        question: "What is the square root of 25?",
        options: ["90", "25", "24", "64"],
        correctAnswer: "25"
    }
];

let currentQuestionIndex = 0;
let userScore = 0;

const questionElement = document.getElementById("question");
const optionsContainer = document.getElementById("options");
const resultElement = document.getElementById("result");

function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;

    optionsContainer.innerHTML = "";
    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.setAttribute("data-index", index);
        button.addEventListener("click", selectOption);
        optionsContainer.appendChild(button);
    });
}

function selectOption(event) {
    const selectedOptionIndex = event.target.getAttribute("data-index");
    const selectedOption = quizData[currentQuestionIndex].options[selectedOptionIndex];

    if (selectedOption === quizData[currentQuestionIndex].correctAnswer) {
        userScore++;
        resultElement.textContent = "Correct!";
    } else {
        resultElement.textContent = "Wrong!";
    }

    resultElement.style.display = "block";
    optionsContainer.style.pointerEvents = "none";
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
        resultElement.textContent = "";
        resultElement.style.display = "none";
        optionsContainer.style.pointerEvents = "auto";
    } else {
        showResult();
    }
}

function showResult() {
    questionElement.textContent = `Your Score: ${userScore} out of ${quizData.length}`;
    optionsContainer.innerHTML = "";
    resultElement.style.display = "none";
    document.querySelector("button").style.display = "none";
}

// Initial Load
loadQuestion();
