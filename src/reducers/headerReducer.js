export const initialState = {
    basketCounter: 0,
    favoritesCounter: 0,
}

export const headerReducer = (state, action) => {
    switch (action.type) {
        case 'set_basket':
            return {
                ...state,
                basketCounter: action.payload
            }
        case 'set_favorites':
            return {
                ...state,
                favoritesCounter: action.payload
            }
        default:
            return Error(`Unknown action type: ${action.type}`)
    }
}