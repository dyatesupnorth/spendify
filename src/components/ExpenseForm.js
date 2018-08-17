import React, { Component } from 'react'
import moment from 'moment';

import {SingleDatePicker} from 'react-dates';



const now = moment();
console.log('date: ', now.format('MMM Do, YYYY'));
export class ExpenseForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            description: props.expense? props.expense.description : '',
            note : props.expense? props.expense.note : '',
            amount: props.expense ? (props.expense.amount / 100).toString() : '',
            createdAt : props.expense? moment(props.expense.createdAt) : moment(),
            calendarFocused : false,
            error: false
        }
    }
    
    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(()=>({description}));
    }
    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({note}));
    }
    onAmountChange = (e) =>{
        const amount = e.target.value;
        if (amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(()=>({amount}))
        } 
    }
    onDateChange = (createdAt) => {
        console.log('createdAt: ', createdAt);
        if (createdAt) {
            this.setState(() => ({createdAt}));    
        }
        

    }
    onFocusChange = ({focused}) => {
        this.setState(() => ({calendarFocused: focused}));
    }
    onSubmit = (e) => {
        e.preventDefault();
        if (!this.state.description || !this.state.amount) {
            this.setState(() => ({error: 'Please provide description and amount'}));

        }else{
            this.setState(() => ({error: false}));
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10)*100,
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note

            })
            console.log('submitted');
        }
    }
    render() {

        return (
                <div className="row">
                    <div className="col-sm-12  ml-md-auto">
                        {this.state.error}
                        <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label>Expense Description</label>
                            <input type="text"
                                className="form-control"
                                placeholder="Laptop, Coffee, etc"
                                autoFocus
                                value={this.state.description}
                                onChange={this.onDescriptionChange}
                                />
                        </div>
                        <div className="form-group">
                            <label>Amount</label>
                            <input 
                            className="form-control"
                            type="text"
                            placeholder="Amount" value={this.state.amount} onChange={this.onAmountChange}
                            />
                        </div>
                                <div className="form-group">
                                    <label>Choose Date</label>
                                    <br/>
                                    <SingleDatePicker
                            date={this.state.createdAt}
                            onDateChange={this.onDateChange}
                            focused={this.state.calendarFocused}
                            onFocusChange={this.onFocusChange}
                            numberOfMonths={1}
                            isOutsideRange={() => false}

                            />
                                </div>

                            
                        <div className="form-group">
                            <label>Note (optional)</label>
                            <textarea className="form-control" placeholder="Add note for your expense (optional)" 
                            value={this.state.note} onChange={this.onNoteChange}>
                            </textarea>
                        </div>
                            

                            <button className="btn btn-primary">Save Expense</button>
                        </form>
                    </div>
                </div>
        )
  }
}

export default ExpenseForm
