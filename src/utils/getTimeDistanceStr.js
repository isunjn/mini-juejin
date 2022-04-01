function getTimeDistanceStr(time) {
  const ms = Date.now() - parseInt(time) * 1000;
  const mins = Math.floor(ms / 1000 / 60);
  const hours = Math.floor(mins / 60);
  const days = Math.floor(hours / 24);
  const years = Math.floor(days / 365);
  if (years !== 0) {
    return `${years}年前`;
  } else if (days !== 0) {
    return `${days}天前`;
  } else if (hours !== 0) {
    return `${hours}小时前`;
  } else if (mins !== 0) {
    return `${mins}分钟前`;
  } else {
    return "1分钟前";
  }
}

export default getTimeDistanceStr;
