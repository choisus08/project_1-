const $searchForm = $('form')

$searchForm.on("submit", event => {
    event.preventDefault();
    // console.log(event.target);

    const formData = new FormData(event.target)
    console.log(formData);

    // input can use upper or lowercase - won't affect search
    const makeupInput = formData.get("makeupInput").toLowerCase();

    // link makeupInput search to url
    const url = `https://makeup-api.herokuapp.com/api/v1/products.json${makeupInput}`

    $.ajax('https://makeup-api.herokuapp.com/api/v1/products.json')
    .then((data) => {
        console.log(data);
        // retrieve brand,category, img_link
  
    
    })  
})



// results:
// Display brand, img_link, name & description,