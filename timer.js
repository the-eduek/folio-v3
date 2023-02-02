export function setUpTimer(hourElement, minuteElement, meridiemElement) {
  const setTime = () => {
    const date = new Date();
    const hour = date.getHours();
    const minute = date.getMinutes();

    // let hourDisplay = 

    hourElement.innerHTML = hour < 10 ? `0${hour}` : `0${hour - 12}`;
    minuteElement.innerHTML =  minute < 10 ? `0${minute}` : minute;
    meridiemElement.innerHTML =  hour < 12 ? `AM` : `PM`;
  };
  
  setTime();
  setInterval(setTime, 1000);
};
