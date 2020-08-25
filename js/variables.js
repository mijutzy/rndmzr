var qG = false;
var oL = false;

const input = document.getElementById('answer')
const submit = document.getElementById('submit')
const question = document.getElementById('question')
const sq = document.getElementById('skipQuestion')
const gq = document.getElementById('generateQuestion')
const createList = document.getElementById('NewListButton')
const deleteList = document.getElementById('deleteList')
const openList = document.getElementById('openList')
const deleteAllList = document.getElementById('deleteAllList')
const n = document.getElementById('newListName')
const listName =  document.getElementById('listName')
const questionValue = document.getElementById('questionValue')
const answerKey = document.getElementById('answerKey')
const addItemList = document.getElementById('addItemList')
const remItemList = document.getElementById('remItemList')
const buttonLS = document.getElementsByClassName('buttonLS')
const info1 = document.getElementById('info1')
const info2 = document.getElementById('info2')
const info3 = document.getElementById('info3')
const info4 = document.getElementById('info4')
const info5 = document.getElementById('info5')
const info6 = document.getElementById('info6')
const verdict = document.getElementById('verdict')
const currentSession = document.getElementById('currentSession')
const rd = document.getElementById('restoreDefault')

var original =  {
  PresetSave: {
    "2":"What is 1+1?",
    "10e30": "Write the scientific notation of a number with a mantissa of 10 and an exponent of 30.",
    "addition" : "The process of getting the sum of two values.",
    "iteration" : "This process means going through something one by one.",
    "MijuTzy" : "Who is the creator of this website?",
    "English" : "What language am I currently using (literal language, not programming language)?",
    "yes" : "Just say yes to move on to the next question."
  },
  selectedList: "",
  questionGen: false,
  totalCorrect: 0,
  totalMistakes: 0,
  currentScore: 0,
}
