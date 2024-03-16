const textAreaEl = document.querySelector(".text-area");
const wordsEl = document.querySelector(".stat__number--words");
const charactersEl = document.querySelector(".stat__number--characters");
const twitterEl = document.querySelector(".stat__number--twitter");
const facebookEl = document.querySelector(".stat__number--facebook");

textAreaEl.addEventListener("input", () => {
  console.log(textAreaEl.value.length);
  charactersEl.textContent = textAreaEl.value.length;
  twitterEl.textContent = 280 - textAreaEl.value.length;

  facebookEl.textContent = 2200 - textAreaEl.value.length;

  if (textAreaEl.value.includes("<script>")) {
    alert("You can't use this!");
    textAreaEl.value = textAreaEl.value.replace("<script>", "");
  }

  const words = textAreaEl.value.split(" ");

  textAreaEl.value.length
    ? (wordsEl.textContent = words.length)
    : (wordsEl.textContent = 0);

  280 - textAreaEl.value.length < 0
    ? twitterEl.classList.add("stat__number--limit")
    : twitterEl.classList.remove("stat__number--limit");

  2200 - textAreaEl.value.length < 0
    ? facebookEl.classList.add("stat__number--limit")
    : facebookEl.classList.remove("stat__number--limit");
});
