const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("option"))
let currentQuestion = {};
let score = 0;
let accepting = false;
let questionCounter = 0;
let counter = 0;
let availabelQue = [];
let quistions = [
    {
        quistion: "Jono   : ____________ is your name?Johny : My name is Johny.",
        choice1: "What",
        choice2: "Why",
        choice3: "My",
        choice4: "Where",
        answer: 1
    },
    {
        quistion: "Mr. Zaka    : _________________ are you late?  Sayyaf  : I am late because I woke up late.",
        choice1: "What",
        choice2: "Why",
        choice3: "when",
        choice4: "Where",
        answer: 2
    },
    {
        quistion: "The correct use of capital letters is in the sentence ___________________ .",
        choice1: "My name is Kiko",
        choice2: "My name Is Kiko.",
        choice3: "My Name Is Kiko.",
        choice4: "My Name is kiko.",
        answer: 1
    },
    {
        quistion: "I like playing soccer.What is verb in given sentence?",
        choice1: "like",
        choice2: "I",
        choice3: "playing",
        choice4: "soccer",
        answer: 3
    },
    {
        quistion: "He is sick.The past tense of the sentence above is",
        choice1: "He were sick.",
        choice2: "He are sick.",
        choice3: "He was sick.",
        choice4: "He am sick.",
        answer: 3
    },
    {
        quistion: "The opposite of 'new' is _____________________ .",
        choice1: "Bad",
        choice2: "Old",
        choice3: "Young",
        choice4: "Good",
        answer: 2
    },
    {
        quistion: "I see a falling airplane yesterday.The verb above is incorrect. The correct one is ________________ .",
        choice1: "Saw",
        choice2: "Seed",
        choice3: "Seeing",
        choice4: "Seen",
        answer: 1
    },
    {
        quistion: "The correct order of words on dictionary is ________________________ .",
        choice1: "Bank - ball - bad - Bangkok",
        choice2: "Bangkok - bad - ball - bank",
        choice3: "Bad - ball - Bangkok - bank",
        choice4: "Ball - Bangkok - bad - ball",
        answer: 3
    },
    {
        quistion: "Which one do you choose? Reading book _______ watching TV?The correct joining word is __________________ .",
        choice1: "And",
        choice2: "But",
        choice3: "Because",
        choice4: "Or",
        answer: 4
    },
    {
        quistion: "My teeth are ___ sharp as knife.",
        choice1: "So",
        choice2: "Or",
        choice3: "But",
        choice4: "As",
        answer: 4
    }
];

startGame = () => {
    questionCounter = 0;
    score = 0;
    availabelQue = [...quistions];
    getNew();
};
getNew = () => {
    if (questionCounter >= quistions.length) {
        localStorage.setItem("mostRecentScore",score);
        return window.location.assign("last.html");
    }
    questionCounter++;
    document.getElementById("questionCon").innerText = questionCounter+'/'+quistions.length;
    const queIndex = Math.floor(Math.random() * availabelQue.length);
    currentQuestion = availabelQue[queIndex];
    question.innerText = currentQuestion.quistion;


    choices.forEach(choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number]
    });

    availabelQue.splice(queIndex, 1);
    accepting = true;
};
choices.forEach(choice => {
    choice.addEventListener("click", e => {
        if(!accepting) return;
        accepting = true;
        const selected = e.target;
        const selectedAns = selected.dataset["number"];

        const classApp = selectedAns == currentQuestion.answer ? "correct" : "incorrect";
        selected.parentElement.classList.add(classApp);
        if(classApp == "correct"){
            score = score + 2;
            counter++;
            if(counter%3==0){
                score = score + 5
            }
        }
        else{
            counter = 0;
        }
        document.getElementById("score").innerText = score;
        console.log(score);
        setTimeout(() => {
            selected.parentElement.classList.remove(classApp);
            document.getElementById("bar").style.width = (questionCounter/quistions.length)*100+"%";
            getNew();
        },500);
    });
    
});

startGame();
