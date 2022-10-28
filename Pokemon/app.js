// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

const container = document.querySelector("#container");
const baseURL =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
for (let i = 0; i < 132; i++) {
  const pokemon = document.createElement("div");
  pokemon.classList.add("pokemon"); //add class
  const label = document.createElement("span");
  label.innerText = `#${i}`;
  const newImg = document.createElement("img");
  newImg.src = `${baseURL}${i}.png`;
  pokemon.appendChild(newImg);
  pokemon.appendChild(label);
  container.appendChild(newImg);
  container.appendChild(pokemon);
}

{
  /* <div>
  <img>
    <span></span>
  </img>
</div>; */
}
