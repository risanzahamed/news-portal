const newsCategoryShow = () => {
    fetch("https://openapi.programming-hero.com/api/news/categories")
        .then(res => res.json())
        .then(data => displayCategories(data.data.news_category))
}

const displayCategories = (newsportal) => {
    const categoriesContainer = document.getElementById("categories")
    newsportal.forEach(news => {
        console.log(news)
        const categoryDiv = document.createElement("div")

        categoryDiv.innerHTML = `
        <button onclick="newDetail()"  class=" p-4 ">${news.category_name}</button>
    `
        categoriesContainer.appendChild(categoryDiv)
    });

}

newsCategoryShow()

const newDetail = (_id) => {
    const url = (`https://openapi.programming-hero.com/api/news/category/08`)
    fetch(url)
        .then(res => res.json())
        .then(data => displayNewsCard(data.data))
}

const displayNewsCard = (newsDisplay) => {
    const newsdetailsContainer = document.getElementById("news-card")
    newsDisplay.forEach(newsDetails => {
        console.log(newsDetails)
        const newsportalDiv = document.createElement("div")
        newsportalDiv.innerHTML = `
        <div class="card">
            <img src="${newsDetails.image_url} ? ${newsDetails.image_url} : No Image " class="card-img-top" alt="...">
            <div class="card-body">
            <h1 class="card-title">News Title : ${newsDetails.title.slice(0,55)} </h1>
            <p class="card-text">${newsDetails.details.slice(0,250)}</p>
            
            <div class="d-flex justify-content-between align-middle mt-2">
            <h1 class="card-title p-1">Author: ${newsDetails.author.name}, </h1> <p class="p-1 ps-5 mt-1">View: ${newsDetails.total_view}k</p>
            <p class="ps- mt-2"">Rating: ${newsDetails.rating.number}</p></div>
            
            </div>
        </div>          
        `
        newsdetailsContainer.appendChild(newsportalDiv)
    });
}



newDetail()
