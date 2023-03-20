const data = {
  title: "qcm",
  questions: [
    {
      text: "question 1",
      answers: ["choice 1", "choice 2", "choice 3"],
      correct: ["choice 1"],
    },
    {
      text: "question 2",
      answers: ["choice 1", "choice 2"],
      correct: ["choice 2"],
    },
    {
      text: "question 3",
      answers: ["choice 1", "choice 2", "choice 3"],
      correct: ["choice 3"],
    },
    {
      text: "question 4",
      answers: ["choice 1", "choice 2", "choice 3", "choice 4"],
      correct: ["choice 4"],
    },
    {
      text: "question 4",
      answers: ["choice 1", "choice 2", "choice 3", "choice 4"],
      correct: ["choice 4"],
    },
  ],
};
const qcm = document.getElementById("qcm");
const question_template = document.getElementById("question");
const choice = document.getElementById("choice");

function init() {
  data.questions.forEach((ele, index) => {
    const new_element = question_template.cloneNode(true);

    new_element.style = "display: block";
    new_element.setAttribute("id", "q" + index);
    qcm.appendChild(new_element);
    new_element.children.title.innerHTML = ele.text;
    ele.answers.forEach((c, i) => {
      const new_choice = choice.cloneNode(true);
      new_choice.children.input.setAttribute("name", "c" + index);
      new_choice.children.input.setAttribute("id", "c" + index + i);

      new_choice.style = "display: block";
      new_choice.children.label.innerHTML = c;
      new_element.children.choices.appendChild(new_choice);
    });
  });
}

addEventListener("submit", submit);

function submit() {}

init();
