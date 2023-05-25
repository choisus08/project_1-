const $searchForm = $('form')

$searchForm.on("submit", event => {
    event.preventDefault();
    // console.log(event.target);

    const formData = new FormData(event.target)
    console.log(formData);

    // user's input style doesn't affect the search
    const searchInput = formData.get("search input").toLowerCase();

    // link searchInput to url + brand name
    const url = `https://makeup-api.herokuapp.com/api/v1/products.json?brand=${searchInput}`

    $.ajax(url)
    .then((data) => {
        console.log(data);
        console.log(data.filter((item, index) => {
            console.log(index, item);
            console.log({brand: item.brand, name: item.name, description: item.description, 
                        category: item.cateogry, image: item.image_link});
        }))
    })  
});

// function to display product info
render(brandInfo)



// results:
// Display brand, img_link, name & description,