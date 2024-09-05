
// step 1
const quixData = [
  {
    question:"What does HTML Stands for?",
    options: [
      "Hypertext Markup Language",
      "Hyper Transfer Markup Language",
      "Hypertext Machine Language",
      "Hyperlink and Text Markup Language",
    ],
    correct:0,
  },
  {
    question:"Which CSS property is used to control the spacing between the elements?",
    options: [
      "margin",
      "padding",
      "spacing",
      "border-spacing"
    ],
    correct:1,
  },
  {
    question:"Which javascript function is used to select an HTML element by it's id?",
    options: [
      "document.query",
      "getElementById",
      "selectElement",
      "findElementById"
    ],
    correct:1,
  },
  {
    question:"In React.js,which hook is used to perform side effects in function components?",
    options: [
      "useEffect",
      "useState",
      "useContext",
      "useReducer"
    ],
    correct:0,
  },
  {
    question:"Which HTML tang is used to create order list?",
    options: [
      "<ul>",
      "<li>",
      "<ol>",
      "<dl>"
    ],
    correct:2,
  },
];

// Step 2 Javascript initialization
const quiz = document.querySelector(".quiz");
const answerEle = document.querySelectorAll(".answer");
const questionEle = document.querySelector(".question");
const option_1 = document.querySelector("#option_1");
const option_2 = document.querySelector("#option_2");
const option_3 = document.querySelector("#option_3");
const option_4 = document.querySelector("#option_4");
const submitBtn = document.querySelector("#submit");

let currentQuiz = 0;
let score = 0;

// Load quiz function

const loadQuiz = () => {
 const {question,options} = quixData[currentQuiz];
 console.log(question);
 questionEle.innerText = `${currentQuiz + 1} : ${question}`;
 options.forEach((currOpt,index) => (window[`option_${index +1}`].innerText = currOpt));
}; 


loadQuiz();

// Step 4 Get selected Answer function on button click

const getSelectedOption = () => {
//   let answer_index;
// answerEle.forEach((currOpt,index) =>{
//   if(currOpt.checked) {
//     answer_index = index;
//   }
// });
// return answer_index;
let answerElement = Array.from(answerEle)
return answerElement.findIndex((currOpt) => currOpt.checked);
};


// DeselectedAnser

const deselectedAnswers = () => {
answerEle.forEach((currOpt) => currOpt.checked = false);
};

submitBtn.addEventListener('click', () => {
 const selectedOptionIndex = getSelectedOption();
 console.log(selectedOptionIndex);

if(selectedOptionIndex == quixData[currentQuiz].correct) {
  score = score + 1;
}

 currentQuiz++;
 if(currentQuiz < quixData.length) {
  deselectedAnswers();
  loadQuiz();
 }
 else {
  quiz.innerHTML = `<div class="result"> 
  <h2> Your score: ${score}/${quixData.length} Correct Answer </h2>
  <p> Congratulations on completing the quiz </p>
  <button class= "reload_btn" onclick= "location.reload()"> Play Again</button>
  </div>`;
 }
});