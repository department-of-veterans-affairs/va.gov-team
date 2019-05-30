export function isValidDateRange(startDate, endDate) {
  if (!startDate || !endDate) {
    return true;
  }
  return startDate.isBefore(endDate);
}
