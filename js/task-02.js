const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredient = document.querySelector("ul#ingredients");
const addAllLi = ingredients.map(item => {
  const li = document.createElement("li");
  li.textContent = item;
  li.classList.add("item");
  return li;
});
ingredient.append(...addAllLi);