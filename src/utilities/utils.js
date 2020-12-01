import moment from 'moment';

export function getDate(days) {
    const duration = moment.duration({'days' : days})
    const date = moment().subtract(duration).format('YYYY-MM-DD');
    return `${date}`;
}
