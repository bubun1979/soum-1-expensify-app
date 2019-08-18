import React from 'react'
import DatePicker from 'react-date-picker'
import moment from 'moment'

export default class ExpenseForm extends React.Component {
    constructor (props) {
        super (props)

        this.onDescriptionChange = this.onDescriptionChange.bind(this)
        this.onNoteChange = this.onNoteChange.bind(this)
        this.onAmountChange = this.onAmountChange.bind(this)
        this.onDateChange = this.onDateChange.bind(this)
        this.onAddExpenseSubmit = this.onAddExpenseSubmit.bind(this)

        let description = (props.expense && props.expense.description) || ''
        let note = (props.expense && props.expense.note) || ''
        let amount = (props.expense && props.expense.amount) || ''
        let createdAt = (props.expense && new Date(props.expense.createdAt)) || new Date()

        this.state = {
            description,
            note,
            amount,
            createdAt,
            error: ''
        }
    }

    onDescriptionChange (e) {
        let description = e.target.value 
        this.setState(() => ({description}))
    }

    onNoteChange (e) {
        let note = e.target.value
        this.setState(() => ({note}))
    }

    onDateChange (createdAt) {
        this.setState(() => ({createdAt}))
    }

    onAmountChange (e) {
        let amount = e.target.value

        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({amount}))
        }
    } 

    onAddExpenseSubmit (e) {
        e.preventDefault()

        if (!this.state.description || !this.state.amount) {
            this.setState(() => ({error: 'Please provide description and amount'}))
        } else {
            this.setState(() => ({error: ''}))
            this.props.onSubmit({
                description: this.state.description,
                note: this.state.note,
                amount: parseFloat(this.state.amount),
                createdAt: parseInt(moment(this.state.createdAt).format('x')) 
            })
        }
    }

    render () {
        return (
            <div>
                {this.state.error && <p><strong>{this.state.error}</strong></p>}
                <form onSubmit={this.onAddExpenseSubmit}>
                    <input 
                        type="text" 
                        placeholder="Add Description"
                        value={this.state.description}
                        onChange={this.onDescriptionChange}
                    />
                    <input
                        type="text"
                        placeholder="Add Note"
                        value={this.state.note}
                        onChange={this.onNoteChange}
                    />
                    <DatePicker 
                        placeholder="Select Date"
                        value={this.state.createdAt}
                        onChange={this.onDateChange}
                    />

                    <input 
                        type="text" 
                        placeholder="Add Amount" 
                        value={this.state.amount}
                        onChange={this.onAmountChange}
                    />
                    <button>{this.props.expense ? 'Edit Expense' : 'Add Expense'}</button>
                </form>
            </div>
        )
    }
}