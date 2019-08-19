import React from 'react'
import { connect } from 'react-redux'
import ExpenseListItem from './ExpenseListItem';
import selector from '../selectors/expenses'

const ExpenseList = (props) => (
    <div>
        <h3>Expense List</h3>
        
        <table>
            <thead>
                <tr>
                    <th>Description</th>
                    <th>Amount</th>
                    <th>Created At</th>
                    <th colSpan="2">Action</th>
                </tr>
            </thead>
            <tbody>
                {props.expenses.map((expense) => (
                    <ExpenseListItem 
                        key={expense.id}
                        expense={expense}
                    />
                ))}
            </tbody>
        </table>
    </div>
)

const mapStateToProps = (state) => {
    return {
        expenses: selector(state.expenses, state.filters) 
    }
}

export default connect(mapStateToProps)(ExpenseList)