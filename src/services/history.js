import axios from "axios";
const baseUrl = "https://qconq5.api.cloudendpoint.cn/history";

let needToFetch = true;

function needToFetchHistory() {
  return needToFetch;
}

async function getAll() {
  const resp = await axios.get(baseUrl);
  console.log(resp);
  if (resp.status !== 200) throw new Error();
  needToFetch = false;
  return resp.data;
}

async function addOne(articleId) {
  const resp = await axios.post(baseUrl, {articleId: articleId});
  console.log(resp);
  if (resp.status !== 200) throw new Error();
  needToFetch = true;
  return resp.data;
}

const historyService = {
  needToFetchHistory,
  getAll,
  addOne,
}

export default historyService;
