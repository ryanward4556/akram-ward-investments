const axios = require("axios");
const router = require("express").Router();

const alpaca = new Alpaca({
    keyId: 'AKFZXJH121U18SHHDRFO',
    secretKey: 'pnq4YHlpMF3LhfLyOvmdfLmlz6BnASrTPQIASeiU',
    paper: true,
})



//  get user account
router.get("/myaccount", (req, res) => {
    alpaca.getAccount().then((account) => {
        console.log('Current Account:', account)
    })
        .catch(err => res.status(422).json(err));
});

module.exports = router;
