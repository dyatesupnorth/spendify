import React from "react";
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { removeExpense, startEditExpense, startRemoveExpense } from "../actions/expenses";

export class EditExpense extends React.Component{
    onSubmit = (expense) => {
        this.props.startEditExpense(this.props.expense.id, expense)
        this.props.history.push('/')
    }
    onRemove = () => {
        this.props.removeExpense({ id: this.props.expense.id })
        this.props.history.push('/')
    }
    render(){
        return(
            <div className="container">
            <ExpenseForm 
            expense={this.props.expense}
                onSubmit={this.onSubmit}
            
            />
            <hr/>
            <div className="row">
                <div className="col-sm-12">
                    <button className="btn btn-danger" onClick={this.onRemove}>Remove</button>

                </div>
            </div>
        
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch, props) => ({
        startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
        removeExpense: (data) => dispatch(removeExpense(data))
})
const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => expense.id === props.match.params.id)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(EditExpense);