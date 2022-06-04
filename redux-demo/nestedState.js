const redux = require("redux");
const produce = require("immer").produce;
const reduxLogger = require("redux-logger");
const applyMiddleware = redux.applyMiddleware;

const createStore = redux.createStore;
const logger = reduxLogger.createLogger();

const initialState = {
  name: "Vishwas",
  address: {
    street: "123 Main St",
    city: "Boston",
    state: "MA",
  },
};

const STREET_UPDATED = "STREET_UPDATED";
const updateStreet = (street) => {
  return {
    type: STREET_UPDATED,
    payload: street,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case STREET_UPDATED:
      return produce(state, (draft) => {
        draft.address.street = action.payload;
      });

    default:
      return state;
  }
};

const store = createStore(reducer, applyMiddleware(logger));
const unsubscribe = store.subscribe(() => {});
store.dispatch(updateStreet("321312"));

unsubscribe();
