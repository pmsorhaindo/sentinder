import moment from 'moment';

export function dateRangeFromNow(days) {
  const now = moment();

  return {
    endDate: now.toISOString(),
    startDate: now.subtract(days, 'days').toISOString(),
  };
}
