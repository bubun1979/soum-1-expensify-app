import React from 'react'
import { connect } from 'react-redux'
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../action/filters'
import ExpenseFilterByDates from './ExpenseFilterByDates'
import moment from 'moment'

const ExpenseFilter = (props) => (
    <div>
        <input 
            type="text"
            placeholder="Search by description"
            autoFocus
            value={props.filters.text}
            onChange={(e) => {
                let filterText = e.target.value
                props.dispatch(setTextFilter(filterText))
            }}
        />
        <select
            value={props.filters.sortBy}
            onChange={(e) => {
                let filterSort = e.target.value 
                if (filterSort == 'date') {
                    props.dispatch(sortByDate())
                } else if (filterSort == 'amount') {
                    props.dispatch(sortByAmount())
                }
            }}
        >
            <option value="date">Date</option>
            <option value="amount">Amount</option>
        </select>
        
        <ExpenseFilterByDates 
            onChangeStartDate={(startDate) => {
                startDate = parseInt(moment(startDate).format('x'))
                props.dispatch(setStartDate(startDate))
            }}
            onChangeEndDate={(endDate) => {
                endDate = parseInt(moment(endDate).format('x'))
                props.dispatch(setEndDate(endDate))
            }}
        />

    </div>
)

const mapStateToProps = (state) => ({
    filters: state.filters
})

export default connect(mapStateToProps)(ExpenseFilter)