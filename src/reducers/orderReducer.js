
export const initialState = {
    havePromo: false,
    discount: 0
}

export const orderReducer = (state, action) => {
    switch (action.type) {
        case 'set_discount':
            return {
                havePromo: true,
                discount: action.payload
            }
        case 'reset_discount':
            return initialState
        default:
            return new Error(`Unknown action type: ${action.type}`)
    }
}