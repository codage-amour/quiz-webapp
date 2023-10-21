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

let qno = 0;
let score = 0;

function start() {
    qno = 0;
    score = 0;
    next.innerHTML = "Next";
    showques();
}

function showques() {
    reset();
    let q = questions[qno];
    let qnno= qno+1;
    question.innerHTML = qnno + ". " + q.ques;
    q.ans.forEach(answers => {
        const btn = document.createElement("button");
        btn.innerHTML = answers.text;
        btn.classList.add("opt");
        option.appendChild(btn);
    });
}

function reset(){
    next.style.display="none";
    while(option.firstChild){
        option.removeChild(option.firstChild);
    }
}
start();


