export default (expenses) => {
    let total = 0;
    if (expenses.length > 0) {
        expenses.forEach((expense) => {
            total += expense.amount
        })
    }

    return total
}