import moment from 'moment';

moment.updateLocale('en', {
  meridiem: (hour) => {
    if (hour < 12) {
      return 'a.m.';
    }
    return 'p.m.';
  },
  monthsShort: [
    'Jan.',
    'Feb.',
    'Mar.',
    'Apr.',
    'May',
    'June',
    'July',
    'Aug.',
    'Sept.',
    'Oct.',
    'Nov.',
    'Dec.'
  ]
});

export default moment;
