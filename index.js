document.getElementById('submit').addEventListener('click', function() {
    const nameInput = document.getElementById('name');
    const name = nameInput.value;
    if(name === "")
    alert("Please enter your name");
else
{
    const namedisplay = document.getElementById('namedisplay');
    namedisplay.textContent =`${name}`;
    document.getElementById('main').style.display = "block";
    document.getElementById('namedisplay').style.display = "flex";
    document.getElementById('status').style.display = "block";
    document.getElementById('enter').style.display = "none";
start();}
});
const questions = [
    {
        ques: "Who was the king of the gods in Greek mythology?",
        ans: [
            { text: "Apollo", right: false },
            { text: "Zeus", right: true },
            { text: "Mars", right: false },
            { text: "Diana", right: false }
        ]
    },
    {
        ques: "Who was the goddess of love and beauty?",
        ans: [
            { text: "Aphrodite", right: true },
            { text: "Iris", right: false },
            { text: "Zeus", right: false },
            { text: "Ares", right: false }
        ]
    },
    {
        ques: "Who is the Greek god of war?",
        ans: [
            { text: "Cratos", right: false },
            { text: "Cupid", right: false },
            { text: "Ares", right: true },
            { text: "Iris", right: false }
        ]
    },
    {
        ques: "Which god had winged sandals?",
        ans: [
            { text: "Hermes", right: true },
            { text: "Melinoe", right: false },
            { text: "Phobus", right: false },
            { text: "Tyche", right: false }
        ]
    },
    {
        ques: "Who was the Greek god of the Underworld?",
        ans: [
            { text: "Hades", right: true },
            { text: "Diana", right: false },
            { text: "Phobus", right: false },
            { text: "Mars", right: false }
        ]
    },
    {
        ques: "Who was the Greek goddess of wisdom?",
        ans: [
            { text: "Melinoe", right: false },
            { text: "Cratos", right: false },
            { text: "Athena", right: true },
            { text: "Iris", right: false }
        ]
    },
    {
        ques: "Who was the muse of love poetry?",
        ans: [
            { text: "Tyche", right: false },
            { text: "Cupid", right: false },
            { text: "Mars", right: false },
            { text: "Erato", right: true }
        ]
    },
    {
        ques: "Who was the muse of comedy?",
        ans: [
            { text: "Thalia", right: true },
            { text: "Diana", right: false },
            { text: "Melinoe", right: false },
            { text: "Tyche", right: false }
        ]
    },
    {
        ques: "Who was the Greek god of light and the sun?",
        ans: [
            { text: "Diana", right: false },
            { text: "Phobus", right: false },
            { text: "Apollo", right: true },
            { text: "Cratos", right: false }
        ]
    },
    {
        ques: "Who was the muse of music?",
        ans: [
            { text: "Melinoe", right: false },
            { text: "Cupid", right: false },
            { text: "Cratos", right: false },
            { text: "Euterpe", right: true }
        ]
    }
];
const question = document.getElementById("question");
const option = document.getElementById("options");
const next = document.getElementById("next");
const sub = document.getElementById("sub");
const end = document.getElementById("end");
const re= document.getElementById("re");
const time = document.getElementById("time");
let qno = 0;
let score = 0;
let timerInterval;
let selectedAnswers = new Array(questions.length).fill(null);

const buttons = document.querySelectorAll('.n');
buttons.forEach(button => {
    button.addEventListener('click', function() {
        const questionNumber = this.getAttribute('data-question');
        qno = parseInt(questionNumber) - 1;
        showques();
    });
});

function start() {
    qno = 0;
    time.style.display="block";
    next.style.display="block";
    sub.style.display="block";
    end.style.display="block";
    option.style.display="block";
    let timeLeft = 300;
    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes} minutes ${remainingSeconds} seconds`;
    }
    
    time.textContent = "Time left: " + formatTime(timeLeft);
    
    timerInterval = setInterval(() => {
        timeLeft--;
        time.textContent = "Time left: " + formatTime(timeLeft);
        
        if (timeLeft === 0) {
            // clearInterval(timerInterval);
            // time.style.display = "none";
            show();
        }
    }, 1000);
    showques();
}

function showques() {
    reset();
    resetButtonColors();
    next.innerHTML = "Next";
    sub.innerHTML = "Submit";
    end.innerHTML = "End Quiz";
    let q = questions[qno];
    let qnno = qno + 1;
    question.innerHTML = qnno + ". " + q.ques;

    q.ans.forEach((answer, index) => {
        const btn = document.createElement("button");
        btn.innerHTML = answer.text;
        btn.classList.add("opt");
    
        if (selectedAnswers[qno] === index) {
            btn.classList.add("select");
        }

        btn.addEventListener("click", function () {

            selectedAnswers[qno] = index;
            resetButtonColors();
            this.classList.add("select");
        });

        option.appendChild(btn);
    });
}


function reset() {
    while (option.firstChild) {
        option.removeChild(option.firstChild);
    }
}

function resetButtonColors() {
    const buttons = document.querySelectorAll('.opt');
    buttons.forEach(button => {
        button.classList.remove("select");
    });
}

function resetNavigationButtons() {
    const buttons = document.querySelectorAll('.n');
    buttons.forEach(button => {
        button.style.backgroundColor = ""; // Reset button color
    });
}

next.addEventListener("click", function () {
    // if (!submitted) {
        if (qno < questions.length - 1) {
            qno++;
            showques();
        } else {
          next.style.display="none";
        }
    // }
    const nextButtonId = `q${qno}`;
    const nextButton = document.getElementById(nextButtonId);
    nextButton.style.backgroundColor = "purple";
});

sub.addEventListener("click", function () {
    // if (!submitted) {
        if (qno < questions.length - 1) {
            qno++;
            showques();
        } else {
            showques();
        }
    // }
    calculate();
    const nextButtonId = `q${qno}`;
    const nextButton = document.getElementById(nextButtonId);
    nextButton.style.backgroundColor = "green";
});

function calculate() {
    const currentQuestion = questions[qno];
    const selectedAnswerIndex = selectedAnswers[qno];
    if (selectedAnswerIndex !== null) {
        const selectedAnswer = currentQuestion.ans[selectedAnswerIndex];
        if (selectedAnswer.right) {
            score += 4;
        } else{
            score -= 1;
        }
    }
}

end.addEventListener("click",show);

function show() {
    clearInterval(timerInterval);
    calculate();
    question.innerHTML = `Quiz Over! Your Score: ${score} out of ${questions.length * 4}`;
    next.style.display = "none";
    time.style.display = "none";
    sub.style.display = "none";
    end.style.display = "none";
    option.style.display = "none";
    re.style.display = "block";
    re.addEventListener("click",function(){
        location.reload();
    });
}