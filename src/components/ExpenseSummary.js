import React from "react";
import {connect} from 'react-redux';
import selectExpenses from "../selectors/expenses";
import expensesTotal from "../selectors/expenses-total";
import {Link} from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';


export const ExpenseSummary = ({expenseCount, expensesTotal}) => {
    const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
    const formattedExpensesTotal = numeral(expensesTotal / 100).format('$0,0.00');
    return(
        <div>
        <p>Expense Summary</p>
        <p>Viewing {expenseCount} {expenseWord} totalling {formattedExpensesTotal}.</p>
        </div>
    )
}

const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters)
    return {
        expensesTotal: expensesTotal(visibleExpenses),
        expenseCount:visibleExpenses.length
    }
}
export default connect(mapStateToProps)(ExpenseSummary);