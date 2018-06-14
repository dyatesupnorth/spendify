import moment from 'moment';

export default [{
    id: '1',
    description: 'Gum',
    note: '',
    amount: 195,
    createdAt: 0
},{
    id: '2',
    description: 'Coffee',
    note: '',
    amount: 1902,
    createdAt: moment(0).subtract(4, 'days').valueOf()
},{
    id: '3',
    description: 'Paper',
    note: '',
    amount: 45,
    createdAt: moment(0).add(4, 'days').valueOf()
}]