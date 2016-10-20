(function () {
    'use strict';
    var googleTrends = require('google-trends-api');
    var print = require('pretty-print');

    // googleTrends.hotTrendsDetail('US').then(function (results) {
    //     print(results);
    // }).catch(function (err) {
    //     console.log(err);
    // });

    // googleTrends.hotTrends('US').then(function (results) {
    //     console.log(results);
    // }).catch(function (err) {
    //     console.log(err);
    // });

    googleTrends.top30in30().then(function (results) {
        console.log(JSON.stringify(results));
    }).catch(function (err) {
        console.log(err);
    });


    //https://www.buzzfeed.com/api/v2/feeds/trending

    //http://api.whatthetrend.com/#trends.v2

    //http://www.faroo.com/api?q=&start=1&length=10&l=en&src=topics&f=json

    //https://www.reddit.com/r/all.json

    //https://www.googleapis.com/youtube/v3/videos?part=contentDetails&chart=mostPopular&regionCode=IN&maxResults=25&key=API_KEY //http://stackoverflow.com/questions/30475309/get-youtube-trends-v3-country-wise-in-json
}());
