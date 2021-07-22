export const formatMoney = n => (Math.round(n * 100) / 100).toLocaleString();

export const onClickAlert = message => alert(message);
