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
  if (!firstload) {
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
      }
    }
    localStorage.setItem("ListSaveFile", d)
    findInfos()
  }
}

function restoreDefault() {
  if (listSaves == {}) {
    listSaves = original
  }
}

window.onload = function() {
  let firstload = listSaves.firstload
  if (!firstload) {
    loadCode()
    listSaves.firstload = false;
  }
}

window.onunload = function() {
  saveCode()
}

if (firstload) {
  listSaves = original
}
