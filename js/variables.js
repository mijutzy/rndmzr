var qG = false;
var oL = false;
var firstload = listSaves.firstload;
var helpOpen = true;
var ariOpen = true;
var cnlOpen = true;
var lsOpen = true;
var tresBtnOpen = true;
var patchNotesOpen = false;

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
const lsheader = document.getElementById('listselectionheader')
const cnlHeader = document.getElementById('CNLHeader')
const ariHeader = document.getElementById('ARIHeader')
const helpHeader = document.getElementById('helpHeader')
const displayNoneDiv = document.getElementById('displayNoneDiv')
const btt1 = document.getElementById('btt1')
const btt2 = document.getElementById('btt2')
const btt3 = document.getElementById('btt3')
const btt4 = document.getElementById('btt4')
const helpmodal = document.getElementById('help')
const arimodal = document.getElementById('ARI')
const lsmodal = document.getElementById('listselection')
const cnlmodal = document.getElementById('CNL')
const importSF = document.getElementById('importSF')
const exportSF = document.getElementById('exportSF')
const importexportarea = document.getElementById('importexportarea')
const pNotesBG = document.getElementById('pNotesBG')
const patchNotes = document.getElementById('patchNotes')
const pNoteHeader = document.getElementById('pNoteHeader')
const pNotesExit = document.getElementById('pNotesExit')

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
  firstload: true,
}
