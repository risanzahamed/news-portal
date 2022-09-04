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
        <button onclick = "newDetail()" class=" p-3 ">${news.category_name}</button>
    `
        categoriesContainer.appendChild(categoryDiv)

    });

}


newsCategoryShow()

const newDetail = () => {
    const url = (`https://openapi.programming-hero.com/api/news/category/08`)
    fetch(url)
        .then(res => res.json())
        .then(data => displayNewsCard(data.data))
}

const displayNewsCard = (newsDisplay) => {
    const newsdetailsContainer = document.getElementById("news-card")
    newsdetailsContainer.textContent = ""
    newsDisplay.forEach(newsDetails => {
        console.log(newsDetails)
        const newsportalDiv = document.createElement("div")
        newsportalDiv.innerHTML = `
        <div class="card">
            <img src="${newsDetails.image_url} ? ${newsDetails.image_url} : No Image " class="card-img-top" alt="...">
            <div class="card-body">
            <h1 class="card-title sm:text-1">News Title : ${newsDetails.title.length > 40 ? newsDetails.title.slice(0, 40) + "..." : newsDetails.title} </h1>
            <p class="card-text">${newsDetails.details.length > 110 ? newsDetails.details.slice(0, 110) + '...' : newsDetails.details}</p>
            
            <div class="d-flex justify-content-between align-middle mt-2">
            <img src="${newsDetails.author.img} ? ${newsDetails.author.img} : No Image " class="card-img-top w-10 h-10 rounded-90" alt="...">
            <h1 class="card-title ps-1 pt-1  text-xs">Author: ${newsDetails.author.name ? newsDetails.author.name : "No Name"}
            </h1> <p class="p-1 ps-5 mt-1">View: ${newsDetails.total_view}k</p>
            <p class="ps- mt-2"">Rating: ${newsDetails.rating.number}</p></div>
            </div>
            </div>
            
        </div>  
                
        `
        newsdetailsContainer.appendChild(newsportalDiv)
    });
}



// newDetail()
