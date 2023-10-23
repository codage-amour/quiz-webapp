document.getElementById('submit').addEventListener('click', function() {
    const nameInput = document.getElementById('name');
    const name = nameInput.value;
    const namedisplay = document.getElementById('namedisplay');
    namedisplay.textContent =`${name}`;
    document.getElementById('main').style.display = "block";
    document.getElementById('namedisplay').style.display = "flex";
    document.getElementById('status').style.display = "block";
    document.getElementById('enter').style.display = "none";
    start();
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
const time = document.getElementById("time");
let qno = 0;
let score = 0;
let timerInterval;
//let selectedOption = [];
//let submitted = false;



function start() {
    qno = 0;
    //let totalScore = 0;
    //selectedOptions = Array(questions.length).fill(-1);
    //submitted = false; 
    showques();
    time.style.display="block";
    sub.style.display="block";
    end.style.display="block";
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
            clearInterval(timerInterval);
            time.style.display = "none";
            showscore();
        }
    }, 1000);
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
        option.appendChild(btn);
        if (answer.right) {
            btn.dataset.right = "true";
        }
        
    //     if (!submitted) {
    //         btn.addEventListener("click", () => select(index));
    //     }
        
    //     if (selectedOption === index) {
    //         btn.classList.add("select");
    //     }
});
}

function reset() {
    while (option.firstChild) {
        option.removeChild(option.firstChild);
    }
}

// function select(selectedIndex) {
//     if (!submitted) {
//         if (selectedOptions[qno] !== -1) {
//             option.children[selectedOptions[qno]].classList.remove("select");
//         }
//         selectedOptions[qno] = selectedIndex;
//         const selectedBtn = option.children[selectedIndex];
//         selectedBtn.classList.add("select");
//     }
// }


// function calculateScore() {
//     for (let i = 0; i < questions.length; i++) {
//         if (selectedOptions[i] !== -1) {
//             if (questions[i].ans[selectedOptions[i]].right) {
//                 totalScore += 4; 
//             } else {
//                 totalScore -= 1; // Incorrect answer
//             }
//         }
//     }
// }

// function show() {
//     clearInterval(timerInterval); // Stop the timer
//     resetButtonColors();
//     resetNavigationButtons();
//     submitted = false; // Reset the submitted flag
//     qno = 0; // Reset the question number
//     calculateScore(); // Calculate the user's score
//     question.innerHTML = `Quiz Over! Your Score: ${totalScore} out of ${questions.length * 4}`;
//     next.innerHTML = "Re-Attempt";
//     time.style.display = "none";
//     sub.style.display = "none";
//     end.style.display = "none";
//     // Handle the "Re-Attempt" button to restart the quiz
//     next.addEventListener("click", function () {
//         start();
//     });
// }


next.addEventListener("click", function () {
    if (!submitted) {
        if (qno < questions.length - 1) {
            qno++;
            showques();
        } else {
            showques();
        }
    }
    const nextButtonId = `q${qno}`;
    const nextButton = document.getElementById(nextButtonId);
    nextButton.style.backgroundColor = "purple";
});

// sub.addEventListener("click",function(){
//     if (!submitted) {
//         submitted = true; // Mark the quiz as submitted
//             calculateScore();
//         }
//     const nextButtonId = `q${qno}`;
//     const nextButton = document.getElementById(nextButtonId);
//     nextButton.style.backgroundColor = "green";
// })

// end.addEventListener("click",show);
start();