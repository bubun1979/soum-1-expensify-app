import React from 'react'
import { connect } from 'react-redux'
import ExpenseForm from './ExpenseForm'
import { editExpense } from '../action/expenses'

const EditExpensePage = (props) => (
    <div>
        <ExpenseForm 
            expense={props.expense}
            onSubmit={(expenseToUpdate) => {
                props.dispatch(editExpense(props.expense.id, expenseToUpdate))
                props.history.push('/')
            }}
        />
    </div>
)

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => {
            return expense.id == props.match.params.id
        })
    }
}


export default connect(mapStateToProps)(EditExpensePage)


