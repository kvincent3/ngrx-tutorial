import {BasketState} from '../state/basket.state';
import {BasketAction, BasketActionTypes} from '../action/basket.action';

const initialBasketState: BasketState = {
  items: []
};

export function basketActionReducer(state: BasketState = initialBasketState, action: BasketAction): BasketState {
  switch (action.type) {
    case BasketActionTypes.ADD:
      state.items.push(action.payload);
      return {
        items: state.items
      };
    case BasketActionTypes.REMOVE:
      const index: number = state.items.indexOf(action.payload);
      if (index !== -1) {
        state.items.splice(index, 1);
      }
      return {
        items: state.items
    };
  }
}
