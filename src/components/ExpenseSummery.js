import React from 'react'
import expSelector from '../selectors/expenses'
import totalExpSelector from '../selectors/total-expenses'
import { connect } from 'react-redux'

const ExpenseSummery = (props) => {
    return (
        <div>
            <p>Viewing {props.expenseCount} expenses totalling ${props.expenseTotal}</p>
        </div>
    )
}

const mapStateToProps = (state) => {
    const expenses = expSelector(state.expenses, state.filters)
    const expenseCount = expenses.length
    const expenseTotal = totalExpSelector(expenses)

    return {
        expenseCount,
        expenseTotal
    }
}

export default connect(mapStateToProps)(ExpenseSummery)
