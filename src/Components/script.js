const targetDiv = document.getElementById("toggle");
const btn = document.getElementById("third");
btn.onclick = function () {
  if (targetDiv.style.display !== "none") {
    targetDiv.style.display = "none";
  } else {
    targetDiv.style.display = "block";
  }
};
