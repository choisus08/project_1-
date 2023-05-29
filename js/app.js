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
    const $ul = $("ul")

    $.ajax(url)
    .then((data) => {
        console.log(data);
        console.log(data.filter((item, index) => {
            console.log(index, item);
            console.log({brand: item.brand, name: item.name, description: item.description, 
                        category: item.cateogry, image: item.image_link});

            // use .filter() to extract img, brand, product, description
                

            $results.html(`
            <div class="contents">
                <img class="product_pic" src=${item.image_link}>
                <div class="info">
                    <div>
                        <b>Brand:</b> ${item.brand}
                    </div>
                    <div>
                        <b>Product:</b> ${item.name}
                    </div>
                    <div>
                        <b>Description:</b> ${item.description}
                    </div>
                </div>
            </div>

            <div class="contents">
                <img class="product_pic" src=${item.image_link}>
                <div class="info">
                    <div>
                        <b>Brand:</b> ${item.brand}
                    </div>
                    <div>
                        <b>Product:</b> ${item.name}
                    </div>
                    <div>
                        <b>Description:</b> ${item.description}
                    </div>
                </div>
            </div>

            <div class="contents">
                <img class="product_pic" src=${item.image_link}>
                <div class="info">
                    <div>
                        <b>Brand:</b> ${item.brand}
                    </div>
                    <div>
                        <b>Product:</b> ${item.name}
                    </div>
                    <div>
                        <b>Description:</b> ${item.description}
                    </div>
                </div>
            </div>
        `)
    }));
    })  
});





// results:
// Display product that includes: brand, img_link, name & description

// function to display product info