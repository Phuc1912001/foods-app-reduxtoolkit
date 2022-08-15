import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItem: [],
  totalQuantity: 0,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,

  reducers: {
    // ===== ADD ITEM =========
    addItem(state, action) {
      const newItem = action.payload;
      
      const existingItem = state.cartItem.find(
        (item) => item.id === newItem.id
      );
      
      state.totalQuantity++;

      if (!existingItem) {
        state.cartItem.push({
          id: newItem.id,
          title: newItem.title,
          image01: newItem.image01,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice =
          Number(existingItem.totalPrice) + Number(newItem.price);
      }

      state.totalAmount = state.cartItem.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity),0
      );
    },

    //======Remove Item ============

    removeItem(state,action) {
      const id = action.payload
      const existingItem = state.cartItem.find(item => item.id === id )
      
      state.totalQuantity--;
      
      if(existingItem.quantity === 1){
        state.cartItem = state.cartItem.filter(item => item.id !== id)
      }else {
        existingItem.quantity--;
        existingItem.totalPrice =  Number(existingItem.totalPrice) - Number(existingItem.price);
      }
      state.totalAmount = state.cartItem.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity),
        //giá trị khởi tạo
        0
      );
    },
    
    //=========delete Item =========

    deleteItem(state,action) {
      const id = action.payload
      const existingItem = state.cartItem.find(item => item.id === id)

      if(existingItem){
        state.cartItem = state.cartItem.filter(item => item.id !== id)
        state.totalQuantity = state.totalQuantity - existingItem.quantity
      }
      state.totalAmount = state.cartItem.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity),
        //giá trị khởi tạo
        0
      );
    }

  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
