const btn = document.getElementById("btn");
const joke = document.getElementById("joke");
const url =
  "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

let getJoke = () => {
  joke.classList.remove("fade");
  fetch(url)
    .then((data) => data.json())
    .then((item) => {
      joke.textContent = `${item.joke}`;
      joke.classList.add("fade");
    });
};
btn.addEventListener("click", getJoke);
getJoke();
