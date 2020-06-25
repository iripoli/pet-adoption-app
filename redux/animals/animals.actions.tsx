import {
  FETCHING_ANIMALS_PENDING,
  FETCHING_ANIMALS_SUCCESS,
  FETCHING_ANIMALS_FAILED,
} from "../actionsTypes";
import APIKit from "../../services/http-common";

export const requestAnimals = () => (dispatch) => {
  dispatch({ type: FETCHING_ANIMALS_PENDING });

  APIKit.get("/mascot/list")
    .then((response) => response)
    .then((data) =>
      dispatch({
        type: FETCHING_ANIMALS_SUCCESS,
        payload: data.data,
      }).then((data) => console.log(data.data))
    )
    .catch((err) => dispatch({ type: FETCHING_ANIMALS_FAILED, payload: err }));
};
