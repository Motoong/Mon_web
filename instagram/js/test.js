document.addEventListener("DOMContentLoaded", function (e) {
  let btn = document.querySelector("#mybtn");
  let colors = [
    "#FF0000",
    "#FFA500",
    "#FFFF00",
    "#008000",
    "#0000FF",
    "#4B0082",
    "#EE82EE",
  ];

  function changeColor() {
    let rand = Math.floor(Math.random() * colors.length);
    btn.style.boxShadow = `0 0 20px ${colors[rand]}`;
    //btn.style.backgroundColor = colors[rand];
    //btn.sttle.color = colors[rand];
  }

  let intervalId;
  btn.addEventListener("mouseover", function () {
    intervalId = setInterval(changeColor, 80);
  });

  btn.addEventListener("mouseout", function () {
    clearInterval(intervalId);
    btn.style.boxShadow = "none";
  });
});
