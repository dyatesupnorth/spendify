import React from "react";
import { removeExpense } from "../actions/expenses";
import {Link} from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';
numeral.register('locale', 'en-gb', {
    delimiters: {
        thousands: ',',
        decimal: '.'
    },
    abbreviations: {
        thousand: 'th',
        million: 'm',
        billion: 'b',
        trillion: 't'
    },
    ordinal : function (number) {
        return number === 1 ? 'pound' : 'pounds';
    },
    currency: {
        symbol: '£'
    }
});
numeral.locale('en-gb');
export const ExpenseListItem = ({id, description, amount,createdAt}) => (
    <div>
        <Link to={`/edit/${id}`}>
            <h3>{description}</h3>
        </Link>
        <p>
        {numeral(amount / 100).format('$0,0.00')}
        - 
        {moment(createdAt).format('MMMM Do, YYYY')}</p>
    </div>
)

export default ExpenseListItem
