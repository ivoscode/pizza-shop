import React, { useReducer } from "react";

const CartContext = React.createContext({
  isCartOpened: () => {},
  setIsCartOpened: () => {},
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
});

export function CartContextProvider(props) {
  const defaultCartState = {
    items: [],
    totalAmount: 0,
    isCartOpened: false,
  };
  const cartReducer = (state, action) => {
    if (action.type === "ADD") {
      const updatedTotalAmount =
        state.totalAmount + action.item.price * action.item.amount;

      const existingCartItemIndex = state.items.findIndex((item) => {
        return item.id === action.item.id;
      });

      const existingCartItem = state.items[existingCartItemIndex];

      let updatedItems;
      if (existingCartItem) {
        let updatedItem = {
          ...existingCartItem,
          amount: existingCartItem.amount + action.item.amount,
        };
        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        updatedItems = state.items.concat(action.item);
      }

      return {
        ...state,
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };
    } else if (action.type === "REMOVE") {
      const existingCartItemIndex = state.items.findIndex((item) => {
        return item.id === action.id;
      });

      const existingItem = state.items[existingCartItemIndex];
      const updatedTotalAmount = state.totalAmount - existingItem.price;
      let updatedItems;

      if (existingItem.amount === 1) {
        updatedItems = state.items.filter((item) => item.id !== action.id);
      } else {
        const updatedItem = {
          ...existingItem,
          amount: existingItem.amount - 1,
        };
        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updatedItem;
      }
      return {
        ...state,
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };
    } else if (action.type === "OPEN_CART") {
      return { ...state, isCartOpened: action.value };
    }

    return defaultCartState;
  };
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const setIsCartOpened = (value) => {
    dispatchCartAction({ type: "OPEN_CART", value: value });
  };
  const addItemToCartHandler = (item) => {
    console.log(item);
    dispatchCartAction({ type: "ADD", item: item });
  };
  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  const cartContext = {
    isCartOpened: cartState.isCartOpened,
    setIsCartOpened: setIsCartOpened,
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
}
export default CartContext;
