let userData;
fetch("../data.json")
  .then(res => res.json())
  .then(res => userData = res)


let menuBtns = document.querySelectorAll('.menu-btn')

menuBtns.forEach( elm => console.log(elm.innerText))
console.log(menuBtns);

const updateTimeFrameDisplay = timeFrame => {
  console.log(userData)
  console.log(userData[0].timeframes[`${timeFrame.toLowerCase()}`]) 
  console.log(timeFrame)
}

const updateActiveButton = val => {
  document.querySelectorAll('.menu-btn').forEach(elm => {
    if (elm.classList.contains('active')) {
      elm.classList.remove('active');
    } 

    if(elm.innerText == val) {
      elm.classList.add('active')
    }
  })

  updateTimeFrameDisplay(val);
}

const menuButtonClicked = e => {
  updateActiveButton(e.target.innerText);
}

menuBtns.forEach( menuButton => menuButton.addEventListener('click', menuButtonClicked))