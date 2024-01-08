document.addEventListener("DOMContentLoaded", function () {
  // cards appear, disappear
  let cards = [
    document.querySelector("#soldier"),
    document.querySelector("#soldier2"),
    document.querySelector("#soldier3"),
    document.querySelector("#soldier4"),
  ];

  for (let i = 0; i < cards.length; i++) {
    cards[i].style.display = "none";
  }

  let photos = [
    document.querySelector("#petra"),
    document.querySelector("#berni"),
    document.querySelector("#istvan"),
    document.querySelector("#pali"),
  ];

  photos[0].addEventListener("click", function () {
    if (cards[0].style.display == "none") {
      cards[0].style.display = "block";
      cards[1].style.display = "none";
      cards[2].style.display = "none";
      cards[3].style.display = "none";
    } else {
      cards[0].style.display = "none";
    }
  });

  photos[1].addEventListener("click", function () {
    if (cards[1].style.display == "none") {
      cards[1].style.display = "block";
      cards[0].style.display = "none";
      cards[2].style.display = "none";
      cards[3].style.display = "none";
    } else {
      cards[1].style.display = "none";
    }
  });

  photos[2].addEventListener("click", function () {
    if (cards[2].style.display == "none") {
      cards[2].style.display = "block";
      cards[0].style.display = "none";
      cards[1].style.display = "none";
      cards[3].style.display = "none";
    } else {
      cards[2].style.display = "none";
    }
  });

  photos[3].addEventListener("click", function () {
    if (cards[3].style.display == "none") {
      cards[3].style.display = "block";
      cards[0].style.display = "none";
      cards[1].style.display = "none";
      cards[2].style.display = "none";
    } else {
      cards[3].style.display = "none";
    }
  });

  //Other Team ask-answer 1st question
  let correct = document.querySelector(".correct");
  let incorrects = document.querySelectorAll(".incorrect");

  correct.addEventListener("click", function () {
    correct.style.backgroundColor = "#51D651"; // zöld
    correct.style.border = 0;
    correct.style.color = "white";

    for (let i = 0; i < incorrects.length; i++) {
      incorrects[i].style.backgroundColor = "#f5f5f5"; // szürke
      incorrects[i].style.border = "2px solid #bbbbbb";
      incorrects[i].style.color = "#2f2f2f";
    }

    document.querySelector("#feedback").innerHTML = "Correct!";
  });

  for (let i = 0; i < incorrects.length; i++) {
    incorrects[i].addEventListener("click", function () {
      incorrects[i].style.backgroundColor = "#CB3939"; // piros
      incorrects[i].style.border = 0;
      incorrects[i].style.color = "white";

      correct.style.backgroundColor = "#f5f5f5"; // szürke
      correct.style.border = "2px solid #bbbbbb";
      correct.style.color = "#2f2f2f";

      for (let j = 0; j < incorrects.length; j++) {
        if (j !== i) {
          incorrects[j].style.backgroundColor = "#f5f5f5"; // szürke
          incorrects[j].style.border = "2px solid #bbbbbb";
          incorrects[j].style.color = "#2f2f2f";
        }
      }

      document.querySelector("#feedback").innerHTML = "Incorrect!";
    });
  }

  //Other Team ask-answer 2nd question
  let correct2 = document.querySelector(".correct2");
  let incorrects2 = document.querySelectorAll(".incorrect2");

  correct2.addEventListener("click", function () {
    correct2.style.backgroundColor = "#51D651";
    correct2.style.border = 0;
    correct2.style.color = "white";

    for (let i = 0; i < incorrects2.length; i++) {
      incorrects2[i].style.backgroundColor = "#f5f5f5";
      incorrects2[i].style.border = "2px solid #bbbbbb";
      incorrects2[i].style.color = "#2f2f2f";
    }

    document.querySelector("#feedback2").innerHTML = "Correct!";
  });

  for (let i = 0; i < incorrects2.length; i++) {
    incorrects2[i].addEventListener("click", function () {
      incorrects2[i].style.backgroundColor = "#CB3939";
      incorrects2[i].style.border = 0;
      incorrects2[i].style.color = "white";

      correct2.style.backgroundColor = "#f5f5f5";
      correct2.style.border = "2px solid #bbbbbb";
      correct2.style.color = "#2f2f2f";

      for (let j = 0; j < incorrects2.length; j++) {
        if (j !== i) {
          incorrects2[j].style.backgroundColor = "#f5f5f5";
          incorrects2[j].style.border = "2px solid #bbbbbb";
          incorrects2[j].style.color = "#2f2f2f";
        }
      }

      document.querySelector("#feedback2").innerHTML = "Incorrect!";
    });
  }

  //Other Team ask-answer 3rd question
  let correct3 = document.querySelector(".correct3");
  let incorrects3 = document.querySelectorAll(".incorrect3");

  correct3.addEventListener("click", function () {
    correct3.style.backgroundColor = "#51D651";
    correct3.style.border = 0;
    correct3.style.color = "white";

    for (let i = 0; i < incorrects3.length; i++) {
      incorrects3[i].style.backgroundColor = "#f5f5f5";
      incorrects3[i].style.border = "2px solid #bbbbbb";
      incorrects3[i].style.color = "#2f2f2f";
    }

    document.querySelector("#feedback3").innerHTML = "Correct!";
  });

  for (let i = 0; i < incorrects3.length; i++) {
    incorrects3[i].addEventListener("click", function () {
      incorrects3[i].style.backgroundColor = "#CB3939";
      incorrects3[i].style.border = 0;
      incorrects3[i].style.color = "white";

      correct3.style.backgroundColor = "#f5f5f5";
      correct3.style.border = "2px solid #bbbbbb";
      correct3.style.color = "#2f2f2f";

      for (let j = 0; j < incorrects3.length; j++) {
        if (j !== i) {
          incorrects3[j].style.backgroundColor = "#f5f5f5";
          incorrects3[j].style.border = "2px solid #bbbbbb";
          incorrects3[j].style.color = "#2f2f2f";
        }
      }

      document.querySelector("#feedback3").innerHTML = "Incorrect!";
    });
  }

  //Other Team ask-answer 4th question
  let correct4 = document.querySelector(".correct4");
  let incorrects4 = document.querySelectorAll(".incorrect4");

  correct4.addEventListener("click", function () {
    correct4.style.backgroundColor = "#51D651";
    correct4.style.border = 0;
    correct4.style.color = "white";

    for (let i = 0; i < incorrects4.length; i++) {
      incorrects4[i].style.backgroundColor = "#f5f5f5";
      incorrects4[i].style.border = "2px solid #bbbbbb";
      incorrects4[i].style.color = "#2f2f2f";
    }

    document.querySelector("#feedback4").innerHTML = "Correct!";
  });

  for (let i = 0; i < incorrects4.length; i++) {
    incorrects4[i].addEventListener("click", function () {
      incorrects4[i].style.backgroundColor = "#CB3939";
      incorrects4[i].style.border = 0;
      incorrects4[i].style.color = "white";

      correct4.style.backgroundColor = "#f5f5f5";
      correct4.style.border = "2px solid #bbbbbb";
      correct4.style.color = "#2f2f2f";

      for (let j = 0; j < incorrects4.length; j++) {
        if (j !== i) {
          incorrects4[j].style.backgroundColor = "#f5f5f5";
          incorrects4[j].style.border = "2px solid #bbbbbb";
          incorrects4[j].style.color = "#2f2f2f";
        }
      }

      document.querySelector("#feedback4").innerHTML = "Incorrect!";
    });
  }
});
