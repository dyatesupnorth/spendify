import React from "react";
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';

const ExpenseDashboard = () => (
    <div>
    <p>This is from my dashboard</p>
    <ExpenseList />
    <ExpenseListFilters />
    </div>
)
export default ExpenseDashboard;