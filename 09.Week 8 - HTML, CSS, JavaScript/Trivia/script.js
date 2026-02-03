// Trivia Homepage – CS50 Pset 8

let score = 0;

const questions = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Madrid"],
        answer: "Paris"
    },
    {
        question: "What is 5 + 7?",
        options: ["10", "12", "11", "13"],
        answer: "12"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Mars", "Earth", "Jupiter", "Venus"],
        answer: "Mars"
    }
];

const container = document.getElementById("questions-container");
const scoreSpan = document.getElementById("score");

// Function to render questions
function renderQuestions() {
    questions.forEach((q, index) => {
        const div = document.createElement("div");
        div.classList.add("question");

        const questionTitle = document.createElement("p");
        questionTitle.textContent = `${index + 1}. ${q.question}`;
        div.appendChild(questionTitle);

        q.options.forEach(option => {
            const btn = document.createElement("button");
            btn.textContent = option;
            btn.addEventListener("click", () => checkAnswer(option, q.answer, btn));
            div.appendChild(btn);
        });

        container.appendChild(div);
    });
}

// Function to check answer
function checkAnswer(selected, correct, button) {
    if (selected === correct) {
        score++;
        scoreSpan.textContent = score;
        button.style.backgroundColor = "green";
    } else {
        button.style.backgroundColor = "red";
    }

    // Disable all buttons in this question
    const siblingButtons = button.parentElement.querySelectorAll("button");
    siblingButtons.forEach(btn => btn.disabled = true);
}

// Initialize
renderQuestions();
