import {
  fetchingAnimalsPending,
  fetchingAnimalsSuccess,
  fetchingAnimalsFailed,
} from "./animals.actions";
import APIKit from "../../services/http-common";

function fetchAnimals() {
  return (dispatch) => {
    dispatch(fetchingAnimalsPending());
    APIKit.get("/mascot/list")
      .then((res) => console.log(res))
      .then((res) => {
        if (res.error) {
          throw res.error;
        }
        console.log(res);
        dispatch(fetchingAnimalsSuccess(res));
        return res;
      })
      .catch((error) => {
        dispatch(fetchingAnimalsFailed(error));
      });
  };
}

export default fetchAnimals;
