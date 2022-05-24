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

startListeners = () => {
  document.querySelector("#summon-button-left").addEventListener("click", openLeftPanel)
  document.querySelector("#summon-button-right").addEventListener("click", openRightPanel)
  document.querySelector("#btn-close-left").addEventListener("click", closeLeftPanel)
  document.querySelector("#btn-close-right").addEventListener("click", closeRightPanel)
  document.querySelector("#summon-filter").addEventListener("click", closeBothPanels)
}