function findInfos() {
  // nlc = non list count
  let nlc = 6
  let aL = Object.entries(listSaves).length - nlc
  info2.innerHTML = "Total amount of lists: " + aL
  info4.innerHTML = "Current score: " + listSaves.currentScore
  info5.innerHTML = "Total Correct: " + listSaves.totalCorrect
  info6.innerHTML = "Total Mistakes: " + listSaves.totalMistakes
  saveCode()
}

submit.onclick = function() {
  if (qG == true && oL == true && input.value != "") {
    let i = input.value
    console.log(i)
    input.value = null
    let s = listSaves.selectedList
    let rl = s.slice(5)
    let ia = listSaves[rl]
    console.log(ia, ia[i])
    if (question.textContent == ia[i]) {
      let ok = Object.keys(ia)
      let cap = ok.length
      let rI = getRandomInt(1, cap)
      question.textContent = ia[ok[rI]]
      console.log("Correct")
      listSaves.totalCorrect += 1
      listSaves.currentScore += 1
      verdict.style.background = "green"
      verdict.textContent = "Correct"
      findInfos()
    } else {
      console.log("Incorrect")
      listSaves.totalMistakes += 1
      verdict.style.background = "red"
      verdict.textContent = "Incorrect"
      listSaves.currentScore = 0
      findInfos()
    }
  }
}
createList.onclick = function() {
  let nN = n.value
  if (typeof nN == typeof "string" && nN != "") {
    console.log("Input value is string.")
    listSaves[nN] = {Key: "Value"}
    addListToSelection(n.value)
    n.value = null
    findInfos()
    saveCode()
  }
}

addItemList.onclick = function() {
 if (listName != undefined && listName != "") {
   console.log("listName passed condition")
   if ((questionValue != undefined || questionValue != "") && (answerKey != undefined || answerKey != "")) {
     let l = listName.value
     let q = "" + questionValue.value
     let a = "" + answerKey.value
     listSaves[l][a] = q
     console.log(listSaves[l])
     questionValue.value = null
     answerKey.value = null
     saveCode()
   } else {
     alert("No/wrong input on 2nd and 3rd input box!")
   }
 } else {
   console.log("List name is not in list saves.")
   alert("No/wrong input on list name!")
 }
}

remItemList.onclick = function() {
  if (listName != undefined && listName != "") {
    console.log("listName passed condition")
    if ((addItemList != undefined && addItemList != "") && (remItemList != undefined && remItemList != "")) {
      let l = listName.value
      let a = "" + answerKey.value
      delete listSaves[l][a]
      console.log(listSaves)
      questionValue.value = null
      answerKey.value = null
      saveCode()
    } else {
      alert("No/wrong input on 2nd and 3rd input box!")
    }
  } else {
    console.log("List name is not in list saves.")
    alert("Wrong input on list name!")
  }
}

openList.onclick = function() {
  if (listSaves.selectedList != "") {
    let s = listSaves.selectedList
    let rl = listSaves.selectedList.slice(5)
    let e = 0
    let e2 = Object.entries(listSaves[rl])
    let nl = "\r\n"
    // s = saves, rl = raw list, e = entries, e2 = object entries method
    findInfos()
    if (e2.length != 0) {
      e = e2.length
    } else {
      console.log("No pairs in list!")
    }
    info1.innerHTML = "Selected list name: " + rl
    info3.innerHTML = "Total amount of pairs in list: " + e
    let p = document.getElementById('listcontentp')
    p.textContent = "Contents of " + rl + ": " + nl + nl
    for (const [k, v] of e2) {
      p.textContent += "Q: " + v + nl + "- A: " + k + nl
    }
    oL = true;
  } else {
    console.log('No selected list')
  }
}

currentSession.onclick = function() {
  console.log("Saving...")
  let sf = encode(listSaves)
  localStorage.setItem("ListSaveFile", sf)
  console.log(localStorage["ListSaveFile"].slice(0,30) + "...")
}

deleteList.onclick = function() {
  if (listSaves.selectedList != "") {
    let s = listSaves.selectedList
    let rl = s.slice(5)
    delete listSaves[rl]
    let m = "--"
    info1.innerHTML = m
    info3.innerHTML = m
    let p = document.getElementById('listcontentp')
    p.innerHTML = m
    document.getElementById(s).remove()
    oL = false;
    s = "";
    findInfos()
    saveCode()
  } else {
    console.log('No selected list')
  }
}

generateQuestion.onclick = function() {
  if (listSaves.selectedList != "") {
    if (oL == true) {
      if (qG != true) {
        let s = listSaves.selectedList
        let rl = s.slice(5)
        let f = listSaves[rl]
        let ok = Object.keys(f)
        let cap = ok.length
        let rI = getRandomInt(1, cap)
        console.log(f[ok[rI]])
        question.textContent = f[ok[rI]]
        qG = true
      }
    } else {
      let m = "No opened list!"
      console.log(m)
      question.textContent = m
    }
  } else {
    console.log("No list selected!")
    question.textContent = "No list selected!"
  }
}

skipQuestion.onclick = function() {
  if (qG == true) {
    listSaves.totalMistakes += 1
    verdict.style.background = "orange"
    verdict.textContent = "Skipped (+1 Mistake)"
    findInfos()
    let s = listSaves.selectedList
    let rl = s.slice(5)
    let f = listSaves[rl]
    let ok = Object.keys(f)
    let cap = ok.length
    let rI = getRandomInt(1, cap)
    let q = f[ok[rI]]
    question.textContent = q
  } else {
    let m = "No question is generated to be skipped!"
    console.log(m)
    question.textContent = m
  }
}
