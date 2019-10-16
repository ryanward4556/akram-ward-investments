import axios from "axios";

const HEADURL = "https://stocknewsapi.com/api/v1?tickers=";
const TAILURL = "&items=5&token=tmltux6s8dhpuddkz44x6chfba3yic6fshqba71m";


export default {
  search: function (symbol) {
    return axios.get(HEADURL + symbol + TAILURL);
  }
};
