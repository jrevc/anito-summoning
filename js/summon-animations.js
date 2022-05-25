/********/
/* DATA */
/********/

let anitoData = [
  {
    "name": "Bituin",
    "number": "9151",
    "type": "kiwig",
    "summons": "2",
    "image": "kiwig_04.png"
  },
  {
    "name": "Razzmatazz",
    "number": "2652",
    "type": "tikbalang",
    "summons": "0",
    "image": "tikbalang_12.png"
  },
  {
    "name": "Istarbak",
    "number": "7166",
    "type": "siyokoy",
    "summons": "0",
    "image": "siyokoy_05.png"
  },
  {
    "name": "Sungay",
    "number": "8209",
    "type": "tikbalang",
    "summons": "1",
    "image": "tikbalang_06.png"
  },
  {
    "name": "Sleepy",
    "number": "679",
    "type": "sarangay",
    "summons": "0",
    "image": "sarangay_06.png"
  },
  {
    "name": "Balawis",
    "number": "5862",
    "type": "sarangay",
    "summons": "0",
    "image": "sarangay_03.png"
  },
  {
    "name": "Luntian",
    "number": "112",
    "type": "kiwig",
    "summons": "2",
    "image": "kiwig_05.png"
  },
  {
    "name": "Ysda",
    "number": "2242",
    "type": "siyokoy",
    "summons": "3",
    "image": "siyokoy_09.png"
  }
]

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
  populateListLeft()
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
  populateListRight()
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
  // document.querySelector("#btn-close-left").addEventListener("click", closeLeftPanel)
  // document.querySelector("#btn-close-right").addEventListener("click", closeRightPanel)
  document.querySelector("#summon-filter").addEventListener("click", closeBothPanels)
  document.querySelector("#summon-button").addEventListener("click", startSummonAnim)

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
    let start = count >= 3 ? (i < 2 ? 0 : -120) : 40 - ((count - 1) * 40)
    let offset = count >= 3 ? i * 80 : i * 80
    let vStart = 170
    let vOffset = count >= 3 ? (i < 2 ? -40 : 40) : 0
    stoneContent += '<img class="summon-stone" src="images/summoning_stone.png" style="left:' + (start + offset) + 'px; top: ' + (vStart + vOffset) + 'px">'
  }
  stoneLeft.innerHTML = stoneContent

  randomStoneDelay()
}

createStonesRight = (count) => {
  let stoneRight = document.querySelector(".stone-indicator.right")
  let stoneContent = ""
  stoneRight.innerHTML = stoneContent

  for (let i = 0; i < count; i++) {
    let start = count >= 3 ? (i < 2 ? 400 : 280) : 440 - ((count - 1) * 40)
    let offset = count >= 3 ? i * 80 : i * 80
    let vStart = 170
    let vOffset = count >= 3 ? (i < 2 ? -40 : 40) : 0
    stoneContent += '<img class="summon-stone" src="images/summoning_stone.png" style="left:' + (start + offset) + 'px; top: ' + (vStart + vOffset) + 'px">'
  }
  stoneRight.innerHTML = stoneContent

  randomStoneDelay()
}

const loadAnitoLeft = (event) => {
  let anitoData = event.srcElement
  let newAnito = {
    name: anitoData.dataset.name,
    number: anitoData.dataset.number,
    type: anitoData.dataset.type,
    summons: anitoData.dataset.summons,
    image: anitoData.dataset.image
  } 
  document.querySelector("#summon-button-left").innerHTML = newAnito.name
  createStonesLeft(eval(newAnito.summons) + 1)
  document.querySelector("#anito-image-left").src = "images/anitos/" + newAnito.image

  closeLeftPanel()
}

const loadAnitoRight = (event) => {
  let anitoData = event.srcElement
  let newAnito = {
    name: anitoData.dataset.name,
    number: anitoData.dataset.number,
    type: anitoData.dataset.type,
    summons: anitoData.dataset.summons,
    image: anitoData.dataset.image
  } 
  document.querySelector("#summon-button-right").innerHTML = newAnito.name
  createStonesRight(eval(newAnito.summons) + 1)
  document.querySelector("#anito-image-right").src = "images/anitos/" + newAnito.image
  
  closeRightPanel()
}

/***************/
/* PANEL LISTS */
/***************/

const populateListLeft = () => {
  let populatePromise = new Promise(function(resolve, reject) {
    let newAnitoData = ""
    for (let i = 0; i < anitoData.length; i++) {
      newAnitoData += `<div class="anito-list-entry"
        data-name=` + anitoData[i].name +
        ` data-number=` + anitoData[i].number +
        ` data-type=` + anitoData[i].type +
        ` data-summons=` + anitoData[i].summons +
        ` data-image=` + anitoData[i].image +
        ` data-left
        >
        <div class="anito-list-info">
          <div class="anito-number">#` + anitoData[i].number + `</div>
          <div class="anito-name">
            <img src="images/symbol_` + anitoData[i].type + `.png"><span>` + anitoData[i].name + `</span>
          </div>
        </div>
        <div class="anito-list-image">
          <img src="images/anitos/` + anitoData[i].image + `">
        </div>
        <div class="anito-list-details">
            
          <div class="anito-summons">Anitos summoned: <span>` + anitoData[i].summons + `/3</span></div>
        </div>
      </div>
      `
    }
    
    document.querySelector("#panel-left .anito-list").innerHTML = newAnitoData
    resolve("OK")
  })

  populatePromise.then(
    function() {
      let anitosLeft = document.querySelectorAll("[data-left]")
      anitosLeft.forEach(anitoLeft => {
        anitoLeft.addEventListener("click", loadAnitoLeft)
      })
    },
    function() {
      console.log("Error populating list!")
    }
  )
}

const populateListRight = () => {
  let populatePromise = new Promise(function(resolve, reject) {
    let newAnitoData = ""
    for (let i = 0; i < anitoData.length; i++) {
      newAnitoData += `<div class="anito-list-entry"
        data-name=` + anitoData[i].name +
        ` data-number=` + anitoData[i].number +
        ` data-type=` + anitoData[i].type +
        ` data-summons=` + anitoData[i].summons +
        ` data-image=` + anitoData[i].image +
        ` data-right
        >
        <div class="anito-list-info">
          <div class="anito-number">#` + anitoData[i].number + `</div>
          <div class="anito-name">
            <img src="images/symbol_` + anitoData[i].type + `.png"><span>` + anitoData[i].name + `</span>
          </div>
        </div>
        <div class="anito-list-image">
          <img src="images/anitos/` + anitoData[i].image + `">
        </div>
        <div class="anito-list-details">
            
          <div class="anito-summons">Anitos summoned: <span>` + anitoData[i].summons + `/3</span></div>
        </div>
      </div>
      `
    }
    
    document.querySelector("#panel-right .anito-list").innerHTML = newAnitoData
    resolve("OK")
  })

  populatePromise.then(
    function() {
      let anitosRight = document.querySelectorAll("[data-right]")
      anitosRight.forEach(anitoRight => {
        anitoRight.addEventListener("click", loadAnitoRight)
      })
    },
    function() {
      console.log("Error populating list!")
    }
  )
}

/***********************/
/* SUMMONING ANIMATION */
/***********************/

const startSummonAnim = () => {
  let stones = document.querySelectorAll(".summon-stone")
  stones.forEach(stone => {
    const rect = stone.getBoundingClientRect()
    // console.log((rect.left + window.scrollX) + " | " + (rect.top + window.scrollY))

    let leftOffset = rect.left + window.scrollX
    let topOffset = rect.top + window.scrollY

    stone.style.position = "absolute"
    document.querySelector("body").appendChild(stone)
    stone.style.left = leftOffset + "px"
    stone.style.top = topOffset + "px"
    stone.style.width = "80px"

    moveStoneToPillar(stone)
  })
}

const moveStoneToPillar = (obj) => {
  randomMovementDelay(obj)
  obj.classList.add("travelling")
}

randomStoneMovementDelay = () => {
  let stones = document.querySelectorAll(".summon-stone")
  stones.forEach(randomDelay)
}

randomMovementDelay = (item) => {
  let speed = 1 + (Math.random() * 0.5)
  let delay = Math.random() * 0.5
  let stone = item
  item.style.setProperty("--stone-speed", speed + "s")
  item.style.setProperty("--stone-delay", delay + "s")
}