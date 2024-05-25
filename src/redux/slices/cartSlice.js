import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cart: [],
    shoppingCart: [],
    historyCart: [],
    searchReducer: " "
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {

            console.log("yeh color : ", action.payload.colors);
            const indexItem = state.cart.findIndex((items) => items.id == action.payload.id)

            if (indexItem >= 0) {
                // state.cart[indexItem].quantity += 1
                alert("Item allready Present in Cart")
            } else {

                state.cart = [...state.cart, action.payload]
                    // const sss = state.cart.map((items) => {
                    //     return items.size
                    // })
                    // console.log("yahi to kabse chahiye tha : ", sss);

                alert("Item added succesfully in Cart")
            }



        },

        incrementQuantity: (state, action) => {

            const indexItem = state.cart.findIndex((items) => items.id == action.payload.id)

            if (indexItem >= 0) {
                state.cart[indexItem].quantity += 1

            }

        },

        decrementQuantity: (state, action) => {

            const indexItem = state.cart.findIndex((items) => items.id == action.payload.id)

            if (indexItem >= 0) {
                state.cart[indexItem].quantity -= 1

            }

        },

        shoping: (state, action) => {
            state.shoppingCart = [action.payload]
        },
        history: (state, action) => {
            state.historyCart = [...state.historyCart, action.payload, ]
        },

        removeFromCart: (state, action) => {
            const data = state.cart.filter((items) => items.id !== action.payload)

            state.cart = data
        },

        searching: (state, action) => {
            const data = action.payload
            state.searchReducer = data

        }





    },
})

// Action creators are generated for each case reducer function
export const { addToCart, shoping, history, incrementQuantity, decrementQuantity, removeFromCart, searching } = cartSlice.actions

export default cartSlice.reducer