const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const table = [];

ingredients.forEach(element => {
  const ingredient = document.createElement('li');
  ingredient.textContent = element;
  ingredient.classList.add("item");
  table.push(ingredient);
});

const HTMLIngredients = document.querySelector('#ingredients');

HTMLIngredients.append(...table);