import { ADD_TO_CART, REMOVE_FROM_CART } from '../actions/cart';
import { ADD_ORDER } from '../actions/orders';
import CartItem from '../../models/cart-item';
import { DELETE_SERVICE } from '../actions/serviceinformationaction';

const initialState = {
  items: {},
  totalAmount: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const addedService = action.service;
      const servicePrice = addedService.servicecharge;
      const serviceTitle = addedService.logistics;

      let updatedOrNewCartItem;

      if (state.items[addedService.id]) {
        // already have the item in the cart
        updatedOrNewCartItem = new CartItem(
          state.items[addedService.id].quantity + 1,
          servicePrice,
          serviceTitle,
          state.items[addedService.id].sum + servicePrice
        );
      } else {
        updatedOrNewCartItem = new CartItem(1, servicePrice, serviceTitle, servicePrice);
      }
      return {
        ...state,
        items: { ...state.items, [addedService.id]: updatedOrNewCartItem },
        totalAmount: state.totalAmount + servicePrice
      };
    case REMOVE_FROM_CART:
      const selectedCartItem = state.items[action.pid];
      const currentQty = selectedCartItem.quantity;
      let updatedCartItems;
      if (currentQty > 1) {
        // need to reduce it, not erase it
        const updatedCartItem = new CartItem(
          selectedCartItem.servicePrice,
          selectedCartItem.serviceTitle,
          selectedCartItem.sum - selectedCartItem.servicePrice
        );
        updatedCartItems = { ...state.items, [action.pid]: updatedCartItem };
      } else {
        updatedCartItems = { ...state.items };
        delete updatedCartItems[action.pid];
      }
      return {
        ...state,
        items: updatedCartItems,
        totalAmount: state.totalAmount - selectedCartItem.servicePrice
      };
    case ADD_ORDER:
      return initialState;
    case DELETE_SERVICE:
      if (!state.items[action.pid]) {
        return state;
      }
      const updatedItems = { ...state.items };
      const itemTotal = state.items[action.pid].sum;
      delete updatedItems[action.pid];
      return {
        ...state,
        items: updatedItems,
        totalAmount: state.totalAmount - itemTotal
      };
  }

  return state;
};
