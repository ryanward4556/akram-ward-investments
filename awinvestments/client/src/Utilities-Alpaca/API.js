const Alpaca = require("@alpacahq/alpaca-trade-api")

const alpaca = new Alpaca({
  keyId: 'PKNI07BAO6K8Y3JXZT1G',
  secretKey: 'Hl59Yy66hxNBPMCjNJm7bZ/KcE3iz58VQKHfyzRk',
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
      // console.log(res)
      return res;
    })
  }
}

