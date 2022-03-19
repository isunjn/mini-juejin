function getTimeDistanceStr(time) {
  const ms = Date.now() - (parseInt(time) * 1000);
  const mins = parseInt(ms / 1000 / 60);
  const hours = parseInt(mins / 60);
  const days = parseInt(hours / 24);
  const years = parseInt(days / 365);
  if (years !== 0) {
    return `${years}年前`;
  } else if (days !== 0) {
    return `${days}天前`;
  } else if (hours !== 0 ) {
    return `${hours}小时前`;
  } else if (mins !== 0) {
    return `${mins}分钟前`;
  } else {
    return "1分钟前";
  }
}

export default getTimeDistanceStr;
