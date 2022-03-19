function getCountStr(count) {
  count = parseInt(count);
  if (count >= 10000) {
    return `${(count/10000).toFixed(1)}w`
  }
  return `${count}`;
}

export default getCountStr;
