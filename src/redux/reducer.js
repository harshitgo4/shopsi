import { createReducer } from "@reduxjs/toolkit";


export const cartReducer = createReducer({
  cartitems: [],
  subtotal: 0,
  shipping: 0,
  taxes: 0,
  Total: 0,
}, {
  addtocart: (state, action) => {
    const item = action.payload;
    const isItemExist = state.cartitems.find((i) => i.id === item.id);
    if (isItemExist) {
      state.cartitems.forEach((i) => {
        if (i.id === item.id) {
          i.q += 1;
        }
      });
    } else {
      state.cartitems.push(item);
    }

  },
  delete:(state,action)=>{
    const ID=action.payload;
    const Item = state.cartitems.find((i) => i.id === ID);
    if(Item.q>1)
    {
        state.cartitems.forEach((i) => {
            if (i.id === ID) {
              i.q -= 1;
            }})
        }
    },
    deletefromcart:(state,action)=>{
      
         state.cartitems = state.cartitems.filter((i) => i.id !== action.payload)

        },
    calculator:(state)=>{
        let sum=0;
        state.cartitems.forEach((i)=> (
            console.log(i.price),
            console.log(i.q),
            sum+=i.price*i.q));
        console.log(sum)
        state.subtotal=sum;
        state.taxes=+(state.subtotal*0.18).toFixed();
        state.shipping=sum>1000?0:200;
        state.Total=state.subtotal+state.shipping+state.taxes;
    }
});
