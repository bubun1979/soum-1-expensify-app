import React from 'react'
import ExpenseList from './ExpenseList'
import ExpenseFilters from './ExpenseFilters'
import ExpenseSummery from './ExpenseSummery'

const DashboardPage = () => (
    <div>
        <ExpenseFilters />
        <ExpenseSummery />
        <ExpenseList />
    </div>
)

export default DashboardPage