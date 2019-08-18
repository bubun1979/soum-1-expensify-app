import React from 'react'
import DatePicker from 'react-date-picker'


export default class ExpenseFilterByDates extends React.Component {
    constructor (props) {
        super (props)

        this.onStartDateChange = this.onStartDateChange.bind(this)
        this.onEndDateChange = this.onEndDateChange.bind(this)

        this.state = {
            startDate: new Date(),
            endDate: new Date()
        }
    }

    onStartDateChange (startDate) {
        this.setState(() => ({startDate}))
        this.props.onChangeStartDate(startDate)
    }

    onEndDateChange (endDate) {
        this.setState(() => ({endDate}))
        this.props.onChangeEndDate(endDate)
    }

    render () {
        return (
            <div>
                <DatePicker 
                    value={this.state.startDate}
                    onChange={this.onStartDateChange}
                />

                <DatePicker 
                    value={this.state.endDate}
                    onChange={this.onEndDateChange}
                />

            </div>
        )
    }
}