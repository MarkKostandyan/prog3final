var scrapeIt = require("scrape-it");
var jsonfile = require('jsonfile');

var file = 'scraping.json';


scrapeIt("https://www.menu.am/restaurant/type.html", {
    restaurant: {
        listItem: "div.restaurants_grid > div.item",
        data: {
            name: ".list-title > a",
            url: {
                selector: "a"
              , attr: "href"
            },
            tag: ".list-title > span"
        }
    }
}).then(function (page) {
        console.log(page);
        jsonfile.writeFile(file, page, { spaces: 2 }, function (err) {
            console.error(err);
        });
    });