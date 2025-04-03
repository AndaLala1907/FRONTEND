document.addEventListener("DOMContentLoaded", () => {
   // DOM elements
    const studyDurationInput = document.getElementById("studyDuration");
    const breakDurationInput = document.getElementById("breakDuration");
    const startButton = document.getElementById("startButton");
    const progressBar = document.getElementById("progressBar");
    const historyList = document.getElementById("historyList");
  
    let studyDuration = 0;
    let breakDuration = 0;
    let totalDuration = 0;
    let sessionDuration = 0; 
    let startTime = 0;
    let timerInterval;

    // Format time in 12-hour AM/PM format
    function formatTimeWithAMPM(date) {
      const hours = date.getHours();
      const minutes = date.getMinutes();
      const seconds = date.getSeconds();
      const ampm = hours >= 12 ? 'PM' : 'AM';
      const hour = hours % 12 || 12; 
      const minute = minutes < 10 ? '0' + minutes : minutes;
      const second = seconds < 10 ? '0' + seconds : seconds;
      return `${hour}:${minute}:${second} ${ampm}`;
    }

    // Start the timer
    function startTimer() {
      studyDuration = parseInt(studyDurationInput.value) || 0;
      breakDuration = parseInt(breakDurationInput.value) || 0;
  
      // Validate input
      if (isNaN(studyDuration) || studyDuration <= 0 || isNaN(breakDuration) || breakDuration < 0) {
        alert("Please enter valid positive numbers for study and break durations.");
        return;
      }
  
      
      sessionDuration = (studyDuration + breakDuration) * 60 * 1000;
      totalDuration = studyDuration * 60 * 1000; 
      startTime = Date.now();
      progressBar.style.width = '0%';
      historyList.innerHTML = '';
  
      if (timerInterval) {
        clearInterval(timerInterval);
      }
  
       // Start a new timer
      timerInterval = setInterval(updateProgress, 1000);
    }
  
    function updateProgress() {
      const elapsed = Date.now() - startTime;
      const remaining = totalDuration - (elapsed % totalDuration); 
      const progress = ((elapsed % sessionDuration) / sessionDuration) * 100; 
  
       // Check if the session is complete
      if (elapsed >= sessionDuration) {
        clearInterval(timerInterval);
        logSession('Study');
        alert('Session Complete!');
  
        // Start break period
        setTimeout(() => {
          logSession('Break');
          startTime = Date.now();
          totalDuration = studyDuration * 60 * 1000; 
          timerInterval = setInterval(updateProgress, 1000);
        }, breakDuration * 60 * 1000);
  
        return;
      }
  
      progressBar.style.width = `${Math.min(progress, 100)}%`; 
    }
  
     // Log session details to history
    function logSession(type) {
      const now = new Date();
      const formattedTime = formatTimeWithAMPM(now);
      const sessionItem = document.createElement('div');
      sessionItem.className = 'session-item';
      sessionItem.innerHTML = `Date: ${now.toLocaleDateString()}, Time: ${formattedTime}, ${type} Duration: ${studyDuration} minutes, Break Duration: ${breakDuration} minutes`;
      historyList.appendChild(sessionItem);
    }
    
    // Add click event listener to the start button
    startButton.addEventListener("click", startTimer);
  });
  