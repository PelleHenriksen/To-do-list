const knap = document.querySelector("button");
const slettBtn = document.querySelector(".slett-btn");
const input = document.querySelector("input");
const liste = document.querySelector(".Minliste");

knap.addEventListener("click", () => {
  let lister = document.createElement("li");
  lister.innerHTML = input.value;
  liste.appendChild(lister);
  lister.classList.add("checks");
  test();
});

slettBtn.addEventListener("click", () => {
  const elementer = Array.from(liste.querySelectorAll("li"));

  for (const element of elementer) {
    liste.removeChild(element);
  }
});

function test() {
  const list = document.querySelectorAll(".checks");
  list.forEach((item) => {
    item.addEventListener("click", (e) => {
      e.target.classList.toggle("checked");
    });
  });
}

const list = document.querySelectorAll(".checks");
list.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.target.classList.toggle("checked");
  });
});
