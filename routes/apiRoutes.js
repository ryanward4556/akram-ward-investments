const keys = require("../public/js/keys");

const alphaVantageKey = keys.alphaVantageKey.id;
const alpha = require('alphavantage')({ key: "alphaVantageKey" });

const polishData = (data) => {
    let polished = alpha.util.polish(data);
    return polished;
}

// Alpaca variables


// API Routes

module.exports = function (app) {


    //  Get Routes --------------------------------------------------

    // searches for a single stock symbol's daily price
    app.get("/api/alpha/data/daily", function (req, res) {

        alpha.data.daily("cmcsa").then(data => {
            let polished = polishData(data);
            console.log(polished);
        })
    });

    // searches for a single stock symbol's intraday price, updates every 1-2 minutes
    // need to figure out how to close connection to api after each minute
    app.get("/api/alpha/data/intraday", function (req, res) {

        alpha.data.intraday("cmcsa").then(data => {
            let polished = polishData(data);
            console.log(polished);
        });
    });

    // searches for a multiple stock symbols' daily price
    app.get("/api/alpha/data/batch", function (req, res) {

        alpha.data.batch([`msft`, `aapl`]).then(data => {
            let polished = polishData(data);
            console.log(polished);
        });
    });

    // searches for a specific stock symbols' Simple Moving Avg
    app.get("/api/alpha/technical/sma", function (req, res) {

        const symbol = "cmcsa"; // will be in req 

        alpha.technical.sma(symbol, `daily`, 60, `close`).then(data => {
            let polished = polishData(data);
            console.log(polished);
        });
    })

    // searches for a specific stock symbols' Relative Strength Index
    app.get("/api/alpha/technical/rsi", function (req, res) {

        const symbol = "cmcsa"; // will be in req 

        alpha.technical.rsi(symbol, `daily`, 60, `close`).then(data => {
            let polished = polishData(data);
            console.log(polished);
        });
    })

    // gets sector performance percentage breakdown for:
    // Realtime, 1 Day, 5 Day, 1 Month, 3 Month, YTD, 1 Year, 5 Year, 10 Year
    app.get("/api/alpha/performance", function (req, res) {

        alpha.performance.sector().then(data => {
            let polished = polishData(data);
            console.log(polished);
        });
    });

    // Post Routes --------------------------------------------------



}






