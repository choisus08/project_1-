const $searchForm = $('form')

$searchForm.on("submit", event => {
    event.preventDefault();
    // console.log(event.target);

    const formData = new FormData(event.target)
    console.log(formData);

    // input can use upper or lowercase
    const searchInput = formData.get("search input").toLowerCase();

    // link makeupInput search to url
    const url = `https://makeup-api.herokuapp.com/api/v1/products.json${searchInput}`

    $.ajax('https://makeup-api.herokuapp.com/api/v1/products.json')
    .then((data) => {
        console.log(data);
        console.log(data[0].brand)
        // retrieve brand, name, description, category & img_link
        // use .filter()
        // data.filter((item) => {})
        
    
    })  
})




// results:
// Display brand, img_link, name & description,