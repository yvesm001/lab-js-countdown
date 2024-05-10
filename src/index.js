const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

// Your code goes here ...
let startButton = document.getElementById('start-btn');
startButton.addEventListener('click', () => {
  startCountdown();
})



// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");


  // Your code goes here ...
  startButton.disabled = true;
  let count = DURATION;
  let time = document.getElementById('time');
  let intervalId = setInterval(function() {
    count--;
    remainingTime -= 1;
    time.innerText = remainingTime;
    if (count === 0) {
      clearInterval(intervalId);
      showToast();
    }
    }, 1000);

}




// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");
  
  let i = 0;
  document.querySelector('#toast').classList.add('show');
  const intervalId = setInterval(function () {
    if (i < 3) {
      
    } else {
      document.querySelector('#toast').classList.remove('show');
      clearInterval(intervalId);
    }
  
    i++;
  }, 1000);
  
  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...
  const closeButton = document.querySelector('#close-toast');
  closeButton.addEventListener('click', () => {
    document.querySelector('#toast').classList.remove('show');
  })
}