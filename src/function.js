import {getActivityTimes} from './helpers/getActivityTimes.js'

let userData;
//fetch("../data.json")
fetch("https://jaredmez.github.io/time-dashboard/data.json")
  .then(res => res.json())
  .then(res => userData = res)


let menuBtns = document.querySelectorAll('.menu-btn')

const updateTimeFrameDisplay = timeFrame => {
  let currentElements = document.querySelectorAll('.current-time');
  let previousElements = document.querySelectorAll('.previous-time');
  let activityTimes = getActivityTimes(timeFrame, userData);
  
  currentElements.forEach((elm, index) => {
    elm.innerText = `${activityTimes[index].current}hrs`
  })
  previousElements.forEach((elm, index) => {
    if (timeFrame === 'Daily') {
      elm.innerText = `Yesterday - ${activityTimes[index].previous}hrs`
    }
    else if (timeFrame === 'Weekly') {
      elm.innerText = `Last Week - ${activityTimes[index].previous}hrs`
    } else {
      elm.innerText = `Last Month - ${activityTimes[index].previous}hrs`
    }
    
  })
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