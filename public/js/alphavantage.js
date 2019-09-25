const keys = require("./keys");

const alphaVantageKey = keys.alphaVantageKey.key;

/**
 * Init Alpha Vantage with your API key.
 *
 * @param {String} key
 *   Your Alpha Vantage API key.
 */
const alpha = require('alphavantage')({ key: "alphaVantageKey" });

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

alpha.crypto.daily('btc', 'usd').then(data => {
  console.log(data);
})

// alpha.technical.sma(`msft`, `daily`, 60, `close`).then(data => {
//   console.log(data);
// })

// alpha.performance.sector().then(data => {
//   console.log(data);
// });