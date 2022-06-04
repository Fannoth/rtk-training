const redux = require("redux");

const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const bindActionCreators = redux.bindActionCreators;

const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_RESTOCKED = "CAKE_RESTOCKED";
const ICE_CREAM_ORDERED = "ICE_CREAM_ORDERED";
const ICE_CREAM_RESTOCKED = "ICE_CREAM_RESTOCKED";

const orderCake = (qty = 1) => {
  return {
    type: CAKE_ORDERED,
    quantity: qty,
  };
};
const restockCake = (qty = 1) => {
  return {
    type: CAKE_RESTOCKED,
    quantity: qty,
  };
};
const orderIceCream = (qty = 1) => {
  return {
    type: ICE_CREAM_ORDERED,
    quantity: qty,
  };
};
const restockIceCream = (qty = 1) => {
  return {
    type: ICE_CREAM_RESTOCKED,
    quantity: qty,
  };
};

// const initialState = {
//   numOfCakes: 10,
//   numOfIceCreams: 10,
// };

const initialCakeState = {
  numOfCakes: 10,
};
const initialIceCreamState = {
  numOfIceCreams: 20,
};

const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        ...state,
        numOfCakes: state.numOfCakes - action.quantity,
      };
    case CAKE_RESTOCKED:
      return {
        ...state,
        numOfCakes: state.numOfCakes + action.quantity,
      };

    default:
      return state;
  }
};
const iceCreamReducer = (state = initialIceCreamState, action) => {
  switch (action.type) {
    case ICE_CREAM_ORDERED:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams - action.quantity,
      };
    case ICE_CREAM_RESTOCKED:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams + action.quantity,
      };
    case CAKE_ORDERED:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams - 1,
      };

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  cakes: cakeReducer,
  ice_Creams: iceCreamReducer,
});

const store = createStore(rootReducer);
console.log("initial state", store.getState());

const unsubscribe = store.subscribe(() =>
  console.log("updated state", store.getState())
);

const actions = bindActionCreators(
  { orderCake, restockCake, orderIceCream, restockIceCream },
  store.dispatch
);

actions.orderCake(1);

unsubscribe();
