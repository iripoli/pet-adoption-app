import { tooglePasswordVisibility } from "./authScreen.actions";
import { TOOGLE_HIDDEN_PASS } from "../actionsTypes";

const initialState = {
  hiddenPass: true,
};

function authScreenReducer(state = initialState, action) {
  switch (action.type) {
    case TOOGLE_HIDDEN_PASS:
      return {
        ...state,
        hiddenPass: !state.hiddenPass,
      };
    default:
      return state;
  }
}

export default authScreenReducer;
