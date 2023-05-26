const $searchForm = $('form')

$searchForm.on('submit', event => {
    event.preventDefault();
    // console.log(event.target);

    const formData = new FormData(event.target)
    console.log(formData);

    // user's input style doesn't affect the search
    const searchInput = formData.get('search input').toLowerCase();

    // empty out the input between searches
    $("[name='search input']")[0].value = "";

    // link searchInput to url + brand name
    const url = `https://makeup-api.herokuapp.com/api/v1/products.json?brand=${searchInput}`

    const $results = $(".results")

    $.ajax(url)
    .then((data) => {
        console.log(data);
        console.log(data.filter((item, index) => {
            console.log(index, item);
            console.log({brand: item.brand, name: item.name, description: item.description, 
                        category: item.cateogry, image: item.image_link});
        }));
            $results.html(`
            <div>
                ${item.image_link}
            </div>
            <div>
                <b>${item.brand}</b>
            </div>
            <div>
                ${item.name}
            </div>
            <div>
                ${item.description}
            </div>
        `)
     })  
    .fail(() => {
        $results.html(`<div> there was an error...</div>`)
    })
});



// $results.html(`
// <div>
//     ${item.image_link}
// </div>
// <div>
//     <b>${item.brand}</b>
// </div>
// <div>
//     ${item.name}
// </div>
// <div>
//     ${item.description}
// </div>
// `)
// })  
// .fail(() => {
// $results.html(`<div> there was an error...</div>`)
// })



// results:
// Display product that includes: brand, img_link, name & description

// function to display product info