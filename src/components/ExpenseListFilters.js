import React from 'react'
import { connect } from 'react-redux'
import {DateRangePicker} from 'react-dates'
import {setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate} from '../actions/filters';
export class ExpenseListFilters extends React.Component{
    state = {
        calendarFocused: null
    }
    onDatesChange = ({ startDate, endDate }) => {
        this.props.setStartDate(startDate)
        this.props.setEndDate(endDate)
    }
    onFocusChange = (calendarFocused) => {
       this.setState({ calendarFocused })
    }
    onTextChange = (e) => {
        this.props.setTextFilter(e.target.value);
        console.log(e.target.value);
    }
    onSortChange = (e) => {
        if (e.target.value === 'date') {
            this.props.sortByDate();
        }else if(e.target.value === 'amount'){
            this.props.sortByAmount();
        }
    }
    render() {
      return (
        <div className="col-sm-12 col-md-4 p-3">
        <h4>Filter</h4>
        <hr/>
        <div className="form-group">
            <label>Name</label>
            <input className="form-control" type="text" value={this.props.filters.text} onChange={this.onTextChange}/>
        </div>
        <div className="form-group">
            <label>Sort by</label>
            <select className="form-control" value={this.props.filters.sortBy} onChange={this.onSortChange}>
                <option value="date">Date
                </option>
                <option value="amount">Amount
                </option>
            </select>
        </div>
        <div className="form-group">
            <label>Select Date Range</label>
            <DateRangePicker
                startDate={this.props.filters.startDate} // momentPropTypes.momentObj or null,
                startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
                endDate={this.props.filters.endDate} // momentPropTypes.momentObj or null,
                endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
                onDatesChange={this.onDatesChange} // PropTypes.func.isRequired,
                focusedInput={this.state.calendarFocused} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                onFocusChange={this.onFocusChange} // PropTypes.func.isRequired,
                showClearDates={true}
                numberOfMonths={1}
                isOutsideRange={() => false}
            />
        </div>
    </div>
      )
    }
};

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }   
} 
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        setTextFilter: (text) => dispatch(setTextFilter(text)),
        sortByDate : () => dispatch(sortByDate()),
        sortByAmount: () => dispatch(sortByAmount()),
        setStartDate: (startDate) => dispatch(setStartDate(startDate)),
        setEndDate: (endDate) => dispatch(setEndDate(endDate))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters)
