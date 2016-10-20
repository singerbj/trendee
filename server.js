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
}());
