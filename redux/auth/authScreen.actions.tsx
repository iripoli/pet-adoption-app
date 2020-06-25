import { TOOGLE_HIDDEN_PASS, SET_CURRENT_USER } from "../actionsTypes";

export function tooglePasswordVisibility() {
  return {
    type: TOOGLE_HIDDEN_PASS,
  };
}

export function setCurrentUser(user) {
  return {
    type: SET_CURRENT_USER,
    payload: user,
  };
}
