import categories from '../data/products.json' assert {type: 'json'};

//global variables
var data = categories;
var loggedInCustomer = 'allClients'


function categorySearch(searchCategory) {

  var resCategory = {};
  var categories = [];
  var results = [];
  var resCategory = data.categories[searchCategory.toString()?.toLowerCase()];

  //find the keys/subcategories, check the rules/customerType and then display the items within that category 
  if (resCategory !== undefined && resCategory !== null) {

    categories = Object.values(resCategory);
    categories.forEach(c => {
      if (c.customerType === loggedInCustomer && c.items.length !== 0) {
        c.items.forEach(item => {
          console.log(`Item name = ${item.name} || item price = ${item.price} `);
          return results;

        })
      }

    })

  }else{
    console.log('Invalid category...');
  }

};


function main(searchCategory) {
  if (data !== undefined && data !== null) {
    //list items per category
    categorySearch(searchCategory);
  } else {
    console.log('there is no data to display')
    return;
  }

}

document.getElementById("btn-search").onclick = function (event) {
  var item = document.getElementById("search-input").value;
  if (item)
    main(item);
  else
    return;
}

