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
    const $ul = $("ul.list")


    $.ajax(url)
    .then((data) => {
        // console.log("hey it's here");
        console.log(data.length)
        let str = ""; 
        for (let i=0; i<data.length; i++) {
            // const item = data[i]
            // console.log(item, item.name, item.brand, item.image_link)
            const item = data[i];
           str += `
<li>
    <img class="product_pic" src="${item.image_link}"/>
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
</li>
`;
             
        }
        // console.log(str);
        $ul.html(str)

    });

});