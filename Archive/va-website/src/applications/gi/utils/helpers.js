export function formatNumber(value) {
  const str = (+value).toString();
  return `${str.replace(/\d(?=(\d{3})+$)/g, '$&,')}`;
}

export function formatCurrency(value) {
  return `$${formatNumber(Math.round(+value))}`;
}
