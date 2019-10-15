import axios from "axios";

const HEADURL = "https://cloud.iexapis.com/stable/stock/";
const TAILURL = "/quote?token=pk_094d29efa9c74996bf332fac531956e2";


export default {
  search: function (symbol) {
    return axios.get(HEADURL + symbol + TAILURL);
  }
};
