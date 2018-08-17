import React from "react";
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import ExpensesSummary from './ExpenseSummary';

const ExpenseDashboard = () => (
    <div>
        <ExpensesSummary/>
        <div className="container">
            <div className="row">
            <ExpenseList />
            <ExpenseListFilters />
            </div>
        </div>
        
    </div>
)
export default ExpenseDashboard;