import React from 'react'
import { connect } from 'react-redux'
import { removeExpense } from '../action/expenses'
import moment from 'moment'
import { Link } from 'react-router-dom'

const ExpenseListItem = (props) => (
    <tr>
        <td>{props.expense.description}</td>
        <td>{props.expense.amount}</td>
        <td>{moment(props.expense.createdAt).format('MMMM Do YYYY hh:mm:ss a') }</td>
        <td>
            <Link to={'/edit-expense/' + props.expense.id}>Edit</Link>
        </td>
        <td>
            <button onClick={(e) => {
                e.preventDefault()
                props.dispatch(removeExpense(props.expense.id))
            }}>Remove</button>
        </td>
    </tr>
)

export default connect()(ExpenseListItem)