const quizDB = [{
    question: "Q1: Full Form Of HTML?",
    a: "Hello To My Land",
    b: "Hyper Text Markup Language",
    c: "Hyper Team Manual Language",
    d: "Hi Techno My Language",
    ans: "opt2"
}, {
    question: "Q2: Who Invented HTML?",
    a: "Tim Berner Lee",
    b: "Charles Babbege",
    c: "Bill Gates",
    d: "Sundar Pichai",
    ans: "opt1"
}, {
    question: "Q3 When Was JavaScript is Invented?",
    a: "1991",
    b: "1995",
    c: "1993",
    d: "1994",
    ans: "opt2"
}, {
    question: "Q5: Who Invented JavaScript?",
    a: "Omkar Jha",
    b: "Guido Van Rossum",
    c: "Brendan Eich",
    d: "Tim Berner Lee",
    ans: "opt3"
}, {
    question: "Q5: HTML is what type of language?",
    a: "Scripting Language",
    b: "Markup Language",
    c: "Programming Language",
    d: "Network Protocol",
    ans: "opt2"
}, {
    question: "Q6: HTML uses?",
    a: "User defined tags",
    b: "Pre-specified tags",
    c: "Fixed tags defined by the language",
    d: "Tags only for linking",
    ans: "opt3"
}, {
    question: "Q7: Who is Known as the father of World Wide Web (WWW)?",
    a: "Robert Cailliau",
    b: "Tim Thompson",
    c: "Tim Berners-Lee",
    d: "Charles Darwin",
    ans: "opt3"
}, {
    question: "Q8: What tag is used to display a picture in a HTML page?",
    a: "Picture",
    b: "Img",
    c: "Image",
    d: "src",
    ans: "opt2"
}, {
    question: "Q9: What is the full form of API?",
    a: "Aplication Programming Interface",
    b: "Any Protocol Interface",
    c: "Apart Protocol Invented",
    d: "America Pakistan India",
    ans: "opt1"
}, {
    question: "Q10: Which of the following is not a browser?",
    a: "Microsofts Bing",
    b: "Netscape Navigator",
    c: "Mozilla Firefox",
    d: "Opera",
    ans: "opt1"
}]




const loadquestion = () => {
    var quizindex = 0;
    let score = 0;
    var question = document.querySelector(".question");
    var option1 = document.querySelector("#option1")
    var option2 = document.querySelector("#option2")
    var option3 = document.querySelector("#option3")
    var option4 = document.querySelector("#option4")
    var btn = document.querySelector("#btn")
    var answers = document.querySelectorAll(".answer")
    var finalscore = document.querySelector("#score")

    const loadquestionother = () => {
        question.innerHTML = quizDB[quizindex].question;
        option1.innerHTML = quizDB[quizindex].a;
        option2.innerHTML = quizDB[quizindex].b;
        option3.innerHTML = quizDB[quizindex].c;
        option4.innerHTML = quizDB[quizindex].d;
    }
    loadquestionother();

    const getcheckanswer = () => {
        let answer;
        answers.forEach(element => {
            if (element.checked) {
                answer = element.id
            }
        });
        return answer;
    }
    const deselectall = () => {
        answers.forEach((element) => element.checked = false);
    }


    btn.addEventListener('click', () => {
        const checkanswer = getcheckanswer();
        console.log(checkanswer);
        if (checkanswer == quizDB[quizindex].ans) {
            score++
        };
        quizindex++;
        if (quizindex < quizDB.length) {
            loadquestionother()
            deselectall();
        } else {
            finalscore.innerHTML = `<h3 class="head">Your Score Is ${score}/${quizDB.length}<br><button class="btn" onclick="location.reload()">Play Again</button><h3>`;
            finalscore.classList.remove("points");
            deselectall();
        }
    })




}
loadquestion();