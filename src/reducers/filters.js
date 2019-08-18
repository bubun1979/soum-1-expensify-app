import moment from 'moment'

const filRedDefState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
}

export default (state = filRedDefState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            }
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            }
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            }
        case 'SET_START_DATE':
            //let startDate = parseInt(moment(action.startDate).format('x'))
            let startDate = action.startDate
            return {
                ...state,
                startDate
            }
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            }
        default:
            return state
    }
}
