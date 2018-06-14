import React from 'react';
import {connect} from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';
import { sortByDate, sortByAmount } from "../actions/filters";

export const ExpenseList = (props) => (
    <div>
    {
        props.expenses.length === 0 ? (
            <p>No Expenses</p>
        ) : (
            props.expenses.map((expense) => {
                return <ExpenseListItem key={expense.id}
                    {...expense}
                />
            })
        ) 
    }
    <select onChange={e => {
        if (e.target.value === 'date') {
            dispatch(sortByDate({id}))
        }else{
            dispatch(sortByAmount)
        }
        
    }}>
        <option value="date">Date</option>
        <option value="amount">Amount</option>
    </select>
     
       
        
    </div>
)
const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    }
}
export default connect(mapStateToProps)(ExpenseList);
