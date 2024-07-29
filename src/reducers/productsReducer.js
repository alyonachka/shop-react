import productsJson from '../products.json'

export const initialStateProducts = {
    products: productsJson.products,
    filteredProducts: [...productsJson.products],
    paginatedProducts: [...productsJson.products],
    sort: '',
    search: ''
}

export const productsReducer = (state, action) => {
    switch (action.type) {
        case 'set_products':
            return {
                ...state,
                filteredProducts: action.payload
            }
        case 'reset_products':
            return initialStateProducts
        case 'set_paginated_products':
            return {
                ...state,
                paginatedProducts: action.payload
            }
        case 'set_sort':
            return {
                ...state,
                sort: action.payload
            }
        case 'set_search':
            return {
                ...state,
                search: action.payload
            }
        default:
            throw new Error(`Unknown action type: ${action.type}`)
    }
}