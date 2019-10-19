const Alpaca = require("@alpacahq/alpaca-trade-api")

const alpaca = new Alpaca({
    keyId: 'PKT9PNDNGPI3DOV8H8BA',
    secretKey: 'jWO5zsiVoAZ0OoTs3f9xmcBC1N6K/fvlB0U0Hycx',
    paper: true,
})

export default {
    submitOrder(quantity, stock, side) {
        alpaca.createOrder({
            symbol: stock,
            qty: quantity,
            side: side,
            type: 'market',
            time_in_force: 'day',
        }).then(res => {
            console.log(res)
            return res;
        }
        )
    }
}

