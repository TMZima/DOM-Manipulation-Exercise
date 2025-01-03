document.addEventListener("DOMContentLoaded", function () {
  solveTask1();
  solveTask2();
  solveTask3();
  solveTask4();
  solveTask5();
  solveTask6();
  solveTask7();
  solveTask8();
  solveTask9();
});

function solveTask1() {
  document.getElementById("task1").innerText = "Changed using 'innerText'.";
}

function solveTask2() {
  document.getElementById("task2").innerHTML = "<button>Submit</button>";
}

function solveTask3() {
  document.body.style.backgroundColor = "#232323";
}

function solveTask4() {
  document.querySelectorAll(".item").forEach((item) => {
    item.style.border = "2px solid black";
  });
}

function solveTask5() {
  document.getElementById("task5").href = "https://www.springboard.com/";
}

function solveTask6() {
  document.getElementById("task6").value = "DOM Master";
}

function solveTask7() {}

function solveTask8() {}

function solveTask9() {}
