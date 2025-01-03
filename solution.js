document.addEventListener("DOMContentLoaded", function () {
  solveTask1();
  solveTask2();
});

function solveTask1() {
  document.getElementById("task1").innerText = "Changed using 'innerText'.";
}

function solveTask2() {
  document.getElementById("task2").innerHTML = "<button>Submit</button>";
}
