export const initialState = {
    currentFilter: {
        category: "All",
        price: {
            min: 0,
            max: 999999
        },
        colors: []
    },
    oldFilter: {
        category: "All",
        price: {
            min: 0,
            max: 999999
        },
        colors: []
    }
}

export const filterReducer = (state, action) => {
    switch (action.type) {
        case 'set_current_filter':
            return {
                ...state,
                currentFilter: action.payload
            }
        case 'set_old_filter':
            return {
                ...state,
                oldFilter: action.payload
            }
        case 'reset_filters':
            return initialState
        default:
            return Error(`Unknown action type: ${action.type}`)
    }
}