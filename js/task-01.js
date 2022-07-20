const categoriesEl = document.querySelectorAll('li.item');
console.log(`Number of categories: ${categoriesEl.length}\n\n`);
const categoriesArray = [...categoriesEl]
    .map(
        category => `Category: ${category.children[0].textContent}
Elements: ${category.children[1].children.length}`
)
.join("\n\n");
    console.log(categoriesArray);