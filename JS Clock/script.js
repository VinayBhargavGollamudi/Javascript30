const minHand = document.querySelector(".minute-hand");
const hourHand = document.querySelector(".hour-hand");
const secHand = document.querySelector(".second-hand");

const setHandsOfClock = () => {
  const date = new Date();
  const secAngle = (date.getSeconds() / 60) * 360;
  const minAngle = ((date.getMinutes() + date.getSeconds() / 60) * 360) / 60;
  const hourAngle = ((date.getHours() + date.getMinutes() / 60) * 360) / 12;
  console.log(minAngle, hourAngle);
  secHand.style.setProperty("--rotate", secAngle);
  minHand.style.setProperty("--rotate", minAngle);
  hourHand.style.setProperty("--rotate", hourAngle);
};

setInterval(setHandsOfClock, 1000);

setHandsOfClock();
