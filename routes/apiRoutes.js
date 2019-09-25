const keys = require("../public/js/keys");

const alphaVantageKey = keys.alphaVantageKey.id;
const alpha = require('alphavantage')({ key: "alphaVantageKey" });

module.exports = function (app) {

    app.get("/api/alpha/daily", function (req, res) {

        alpha.crypto.daily('btc', 'usd').then(data => {
            console.log(data);
        })

    });

}
/**
 * Init Alpha Vantage with your API key.
 *
 * @param {alphaVantageKey} key
 *   Your Alpha Vantage API key.
 */

    // Simple examples
    // alpha.data.intraday(`msft`).then(data => {
    //   console.log(data);
    // });

    // alpha.data.batch([`msft`, `aapl`]).then(data => {
    //   console.log(data);
    // });

    // alpha.forex.rate('btc', 'usd').then(data => {
    //   console.log(data);
    // })



    // alpha.technical.sma(`msft`, `daily`, 60, `close`).then(data => {
    //   console.log(data);
    // })

    // alpha.performance.sector().then(data => {
    //   console.log(data);
    // });


