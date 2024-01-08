// makes cards appear dissappear, but if you open several cards all of them are going to be shown

for (let i = 0; i < photos.length; i++) {
  photos[i].addEventListener("click", () => {
    for (let j = 0; j < cards.length; j++) {
      if (i === j) {
        cards[j].classList.add("show");
        cards[j].classList.remove("hide");
      } else {
        cards[j].classList.remove("show");
        cards[j].classList.add("hide");
      }
    }
  });
}

function myFunc(index) {
  for (let i = 0; i < cards.length; i++) {
    if (i === index) {
      cards[i].style.display = "block";
    } else {
      cards[i].style.display = "none";
    }
  }
}

photos[i].addEventListener("click", myFunc(i));
