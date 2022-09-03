const newsShow = () => {
    fetch("https://openapi.programming-hero.com/api/news/categories")
        .then(res => res.json())
        .then(data => displayCategories(data.data.news_category))
}

const displayCategories = (product) => {
    const categoriesContainer = document.getElementById("categories")
    product.forEach(news => {
        console.log(news)
        const categoryDiv = document.createElement("div")

        categoryDiv.innerHTML = `
        <h1 class=" p-5 ">${news.category_name}</h1>
    `
        categoriesContainer.appendChild(categoryDiv)
    });

}

newsShow()