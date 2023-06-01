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

    const $ul = $("ul.list")


    $.ajax(url)
    .then((data) => {
        console.log(data.length)
        // create variable that will render the data after passing as a parameter
        let str = ""; 
        // loop through data (array) to console.log targeted objects at index [i]
        for (let i=0; i<data.length; i++) {
            // console.log(item, item.name, item.brand, item.image_link)
            const item = data[i];

          
            // onerror executes when uncaught js errors are detected 
            // add data rendering to str
           str += `
<li>
    <img class="product_pic" src=${item.image_link} alt="Image not found" onerror="this.onerror=null;this.src='../img/error_img.png';" />
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
        // attach str to <ul</ul> tag
        $ul.html(str)

    });

});
