const KEY_HISTORY = "user_browsing_history";

let needToFetch = true;

export function needToFetchHistory() {
  return needToFetch;
}

export async function addToHistory(postId) {
  let history = JSON.parse(localStorage.getItem(KEY_HISTORY)) || [];
  history = history.filter((id) => id !== postId);
  history.push(postId);
  if (history.length > 100) {
    history.shift();
  }
  localStorage.setItem(KEY_HISTORY, JSON.stringify(history));
  needToFetch = true;
}

export async function getHistory() {
  needToFetch = false;
  return JSON.parse(localStorage.getItem(KEY_HISTORY));
}
