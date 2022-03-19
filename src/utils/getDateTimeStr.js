function getDateTimeStr(time) {
  const datetime = new Date(parseInt(time) * 1000);
  return `\
${datetime.getFullYear()}年\
${String(datetime.getMonth()).padStart(2, '0')}月\
${String(datetime.getDay()).padStart(2, '0')}日 \
${String(datetime.getHours()).padStart(2, '0')}:\
${String(datetime.getMinutes()).padStart(2, '0')}
`;
}

export default getDateTimeStr;
