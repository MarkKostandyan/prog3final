var scrapeIt = require("scrape-it");
var jsonfile = require('jsonfile');

var file = 'scraping.json';


scrapeIt("https://www.menu.am/restaurant/type/pizza.html", {
    title: ".logoBlock img"
  , desc: ".header h2"
  , avatar: {
        selector: ".header img"
      , attr: "src"
    }
}).then(function(page) {
    console.log(page);
    jsonfile.writeFile(file,page,{spaces:2},function(err){
        console.error(err)

    });
});