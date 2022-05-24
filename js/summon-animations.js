/**************/
/* ANIMATIONS */
/**************/

randomStoneDelay = () => {
  let stones = document.querySelectorAll(".summon-stone")
  stones.forEach(randomDelay)
}

randomDelay = (item) => {
  let time = Math.random() * -3
  let stone = item
  item.style.setProperty("--delay-time", time + "s")
}

showBackgroundFilter = () => {
  let item = document.querySelector("#summon-filter")
  item.classList.add("active")
}

hideBackgroundFilter = () => {
  let item = document.querySelector("#summon-filter")
  item.classList.remove("active")
}

openLeftPanel = () => {
  let panel = document.querySelector("#panel-left")
  panel.classList.add("open");
  showBackgroundFilter()
}

closeLeftPanel = () => {
  let panel = document.querySelector("#panel-left")
  panel.classList.remove("open");
  hideBackgroundFilter()
}

openRightPanel = () => {
  let panel = document.querySelector("#panel-right")
  panel.classList.add("open");
  showBackgroundFilter()
}

closeRightPanel = () => {
  let panel = document.querySelector("#panel-right")
  panel.classList.remove("open");
  hideBackgroundFilter()
}

closeBothPanels = () => {
  closeLeftPanel()
  closeRightPanel()
}

/********************/
/* BUTTON LISTENERS */
/********************/

startListeners = () => {
  document.querySelector("#summon-button-left").addEventListener("click", openLeftPanel)
  document.querySelector("#summon-button-right").addEventListener("click", openRightPanel)
  document.querySelector("#btn-close-left").addEventListener("click", closeLeftPanel)
  document.querySelector("#btn-close-right").addEventListener("click", closeRightPanel)
  document.querySelector("#summon-filter").addEventListener("click", closeBothPanels)

  let anitosLeft = document.querySelectorAll("#panel-left .anito-list-entry")
  anitosLeft.forEach(anitoLeft => {
    anitoLeft.addEventListener("click", loadAnitoLeft)
  })
  let anitosRight = document.querySelectorAll("#panel-right .anito-list-entry")
  anitosRight.forEach(anitoRight => {
    anitoRight.addEventListener("click", loadAnitoRight)
  })
}

/************/
/* POPULATE */
/************/

createStonesLeft = (count) => {

  let stoneLeft = document.querySelector(".stone-indicator.left")
  let stoneContent = ""
  stoneLeft.innerHTML = stoneContent

  for (let i = 0; i < count; i++) {
    stoneContent += '<img class="summon-stone" src="images/summoning_stone.png">'
  }
  stoneLeft.innerHTML = stoneContent

  randomStoneDelay()
}

createStonesRight = (count) => {
  let stoneRight = document.querySelector(".stone-indicator.right")
  let stoneContent = ""
  stoneRight.innerHTML = stoneContent

  for (let i = 0; i < count; i++) {
    stoneContent += '<img class="summon-stone" src="images/summoning_stone.png">'
  }
  stoneRight.innerHTML = stoneContent

  randomStoneDelay()
}

const loadAnitoLeft = (event) => {
  let anitoData = event.srcElement
  let newAnito = {
    name: anitoData.getAttribute("name"),
    number: anitoData.getAttribute("number"),
    type: anitoData.getAttribute("type"),
    summons: anitoData.getAttribute("summons"),
    image: anitoData.getAttribute("image"),
  } 
  document.querySelector("#summon-button-left").innerHTML = newAnito.name
  createStonesLeft(eval(newAnito.summons) + 1)
  document.querySelector("#anito-image-left").src = "images/anitos/" + newAnito.image
  // console.log(newAnito.number)
  // console.log(newAnito.type)

  closeLeftPanel()
}

const loadAnitoRight = (event) => {
  let anitoData = event.srcElement
  let newAnito = {
    name: anitoData.getAttribute("name"),
    number: anitoData.getAttribute("number"),
    type: anitoData.getAttribute("type"),
    summons: anitoData.getAttribute("summons"),
    image: anitoData.getAttribute("image"),
  } 
  document.querySelector("#summon-button-right").innerHTML = newAnito.name
  createStonesRight(eval(newAnito.summons) + 1)
  document.querySelector("#anito-image-right").src = "images/anitos/" + newAnito.image
  // console.log(newAnito.number)
  // console.log(newAnito.type)
  
  closeRightPanel()
}