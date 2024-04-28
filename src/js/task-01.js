const HTMLItem = document.querySelectorAll("#categories .item");

console.log("Number of categories: " + HTMLItem.length);

// console.log(document.querySelectorAll('.item > ul > li').length);

console.log();


HTMLItem.forEach(element => {
    const h2Name = element.querySelector('h2').textContent;
    console.log("Category: " + h2Name);
    const liCounter = element.querySelectorAll('li').length;
    console.log("Elements: " + liCounter);
    console.log();
});
