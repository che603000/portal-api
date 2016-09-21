/**
 * Created by alex on 21.09.2016.
 */

var feed = require("feed-read");

feed("https://news.yandex.ru/index.rss", function(err, articles) {
    console.log(articles);
})
