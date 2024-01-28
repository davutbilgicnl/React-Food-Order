import { useReducer, createContext } from "react";

const CartContext = createContext({
  cartItems: [],
  addItem: (item) => {},
  removeItem: (id) => {},
});

function cartReducerFn(cartState, action) {
  if (action.type === "ADD_ITEM") {
    const existingCartItemIndex = cartState.cartItems.findIndex(
      (cartItem) => cartItem.id === action.item.id
    );

    const updatedCartItems = [...cartState.cartItems];

    if (existingCartItemIndex > -1) {
      const existingCartItem = cartState.cartItems[existingCartItemIndex];
      const updatedCartItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity + 1,
      };
      updatedCartItems[existingCartItemIndex] = updatedCartItem;
    } else {
      updatedCartItems.push({ ...action.item, quantity: 1 });
    }

    return { ...cartState, cartItems: updatedCartItems };
  }

  if (action.type === "REMOVE_ITEM") {
    const existingCartItemIndex = cartState.cartItems.findIndex(
      (cartItem) => cartItem.id === action.id
    );

    const existingCartItem = cartState.cartItems[existingCartItemIndex];

    const updatedCartItems = [...cartState.cartItems];

    if (existingCartItem.quantity === 1) {
      updatedCartItems.splice(existingCartItemIndex, 1);
    } else {
      const updatedCartItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity - 1,
      };
      updatedCartItems[existingCartItemIndex] = updatedCartItem;
    }

    return { ...cartState, cartItems: updatedCartItems };
  }

  throw new Error("Unknown item action: " + action.type);
}

export function CartContextProvider({ children }) {
  const [cartState, dispatchCartActionFn] = useReducer(cartReducerFn, { cartItems: [] });

  function addItem(item) {
    dispatchCartActionFn({ type: "ADD_ITEM", item: item });
  }

  function removeItem(id) {
    dispatchCartActionFn({ type: "REMOVE_ITEM", id: id });
  }

  const cartContext = {
    cartItems: cartState.cartItems,
    addItem,
    removeItem,
  };

  //   console.log(cartContext);

  return <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>;
}

export default CartContext;
