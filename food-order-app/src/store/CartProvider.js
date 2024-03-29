import CartContext from "./CartContext";
import { useReducer } from "react";

const defaultCartState = {
    items:  [],
    amount: 0,
}
const cartReducer = (state , action) => {
    
    if(action.type === 'ADD'){
            const updatedItem = state.item.concat(action.item )
            const updatedItemAmount = state.totalAmount + action.item.price * action.item.amount; 
            return{
                items : updatedItem,
                totalAmount : updatedItemAmount
            }   
    }
    return
   defaultCartState;
}


const CartProvider = (props) =>{
  const [cartState,dispatchCartState] = useReducer(cartReducer,defaultCartState);

   const addItemToCartHandler = item => {
    dispatchCartState({ type: 'ADD' , item : item})

    };
  const removeItemFromCartHandler = id => {
    dispatchCartState({ type : 'REMOVE' , id : id})

  }


    const cartContext =  {
        items:cartState.items,
        totalAmount:cartState.totalAmount,
        addItem: addItemToCartHandler ,
        removeItem: removeItemFromCartHandler ,
    };

    return(
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>

    )
}
export default CartProvider;