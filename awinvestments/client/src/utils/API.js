import axios from "axios";

const HEADURL = "https://sandbox.iexapis.com/stable/stock/";
const TAILURL = "/quote?token=Tpk_79d8dcb0426a41b98232eaf609f570d9";

export default {
  search: function (symbol) {
    return axios.get(HEADURL + symbol + TAILURL);
  }
};
