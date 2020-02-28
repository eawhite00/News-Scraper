var axios = require("axios");
var cheerio = require("cheerio");

var scrapeCrosscut = function () {

    var url = "https://crosscut.com/"
    return axios.get(url).then(function (response) {
        var results = [];

        var $ = cheerio.load(response.data);

        //We're looking for the "field--name-field-category" class and dancing around to find the data we need.
        $(".field--name-field-category").each(function (i, element) {
            var headline = $(element).next().children().first().attr("title");
            var summary = $(element).next().next().children().first().text();
            var link = "https://crosscut.com" + $(element).next().children().first().attr("href");
            var date = $(element).next().next().next().find(".month-day-year-date").text();

            //If we're missing any of the data we just skip it- not all the front page articles follow the format we need
            if (headline != '' && summary != '' && link != '' && date != '') {
                const articleData = {
                    headline: headline,
                    summary: summary,
                    link: link,
                    date: date
                }
                results.push(articleData);
            }
        });
        return results;
    });

}

module.exports = scrapeCrosscut;
