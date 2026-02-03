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
    }
];

const container = document.getElementById("questions-container");
const scoreSpan = document.getElementById("score");

function renderQuestions() {
    questions.forEach((q, index) => {
        const div = document.createElement("div");
        div.classList.add("question");

        const questionText = document.createElement("p");
        questionText.textContent = `${index + 1}. ${q.question}`;
        div.appendChild(questionText);

        q.options.forEach(option => {
            const btn = document.createElement("button");
            btn.textContent = option;
            btn.addEventListener("click", () => checkAnswer(option, q.answer, btn));
            div.appendChild(btn);
        });

        container.appendChild(div);
    });
}

function checkAnswer(selected, correct, button) {
    if (selected === correct) {
        score++;
        scoreSpan.textContent = score;
        button.style.backgroundColor = "green";
    } else {
        button.style.backgroundColor = "red";
    }

    const buttons = button.parentElement.querySelectorAll("button");
    buttons.forEach(btn => btn.disabled = true);
}

renderQuestions();
