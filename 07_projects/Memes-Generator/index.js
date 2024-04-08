const url = "https://meme-api.com/gimme/wholesomememes";
const memes_button = document.querySelector(".memes_button");

window.onload = () => {
  generate();
};
memes_button.addEventListener("click", generate);

async function generate() {
  try {
    let data = await fetch(url);
    data = await data.json();
    render(data);
  } catch (error) {
    console.log(error.message);
  }
}

function render(data) {
  const { title, url, author } = data;
  let container = document.querySelector(".content_box");
  let heading = document.querySelector(".heading");
  heading.innerText = `Ttitle: ${title}`;
  let image = document.querySelector(".image");
  image.src = `${url}`;
  let authors = document.querySelector(".author");
  authors.innerText = `Created By: ${author}`;
}
