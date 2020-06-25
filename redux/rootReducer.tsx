import { combineReducers } from "redux";
import authScreenReducer from "./auth/authScreen.reducers";
import { animalReducer } from "./animals/animal.reducers";

const rootReducer = (state = {}, action) => {
  console.log("Test if rootReducer is ever called");

  return {
    authScreen: authScreenReducer(state.authScreen, action),
    animalReducer: animalReducer(state.animalReducer, action),
  };
};

// const rootReducer = combineReducers({
//   authScreen: authScreenReducer,
//   animals: requestAnimals,
// });

export default rootReducer;
