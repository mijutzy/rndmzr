function selectList(arg) {
  let listName = arg.id
  let btnarray = buttonLS
  for (i = 0; i < btnarray.length; i++) {
    btnarray[i].style.border = "2px solid white";
  }
  listSaves.selectedList = arg.id
  document.getElementById(listName).style.border = "2px solid green";
}

function addListToSelection(listName) {
  if (listSaves[listName] != undefined) {
    let ls = listSaves[listName]
    let ln = "list_" + listName
    let div = document.createElement('div');
    div.setAttribute('class', 'buttonLS')
    div.setAttribute('id', "list_" + listName)
    div.setAttribute('onclick', 'selectList(this)')
    div.innerHTML = "~"+listName
    if (document.getElementById('list_' + listName) == undefined) {
      document.getElementById('lists').appendChild(div)
      saveCode()
    } else {
      console.log("Duplicate exists")
    }
  } else {
    console.log('List is nonexistent')
  }
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
  //The maximum is exclusive and the minimum is inclusive
}

function decode(i) {
  if (i != undefined && i != null) {
    let code = JSON.parse(window.atob(i))
    return code
  }
}

function encode(i) {
  let code = window.btoa(JSON.stringify(i))
  return code
}

function saveCode() {
  console.log("Saving...")
  let sf = encode(listSaves)
  localStorage.setItem("ListSaveFile", sf)
}

function retrieveCode() {
  let sf = localStorage.getItem("ListSaveFile")
  let d = decode(sf)
  return d
}

function loadCode() {
  let sf = localStorage.getItem("ListSaveFile")
  let d = decode(sf)
  console.log(listSaves)
  listSaves = {}
  for (k in d) {
    listSaves[k] = d[k]
  }
  console.log(listSaves)
  let bts = document.getElementsByClassName('buttonLS')
  for (i = 0; i < bts.length; i++) {
    if (bts[i] != "PresetSave") {
      bts[i].remove()
    }
  }
  for (k in listSaves) {
    if (typeof listSaves[k] == typeof {}) {
      console.log(k, listSaves[k])
      addListToSelection(k)
    } else {
      continue
    }
  }
  localStorage.setItem("ListSaveFile", d)
  findInfos()
}

function restoreDefault() {
  if (listSaves == {}) {
    var listSaves = {
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
  }
}

window.onload = function() {
  loadCode()
}

window.onunload = function() {
  saveCode()
}
