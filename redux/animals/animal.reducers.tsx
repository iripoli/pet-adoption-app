import {
  FETCHING_ANIMALS_PENDING,
  FETCHING_ANIMALS_SUCCESS,
  FETCHING_ANIMALS_FAILED,
} from "../actionsTypes";

const initialState = {
  pending: false,
  animals: {},
  error: {},
};

export function animalReducer(state = initialState, action) {
  switch (action.type) {
    case FETCHING_ANIMALS_PENDING:
      return {
        ...state,
        pending: true,
      };
    case FETCHING_ANIMALS_SUCCESS:
      return {
        ...state,
        pending: false,
        animals: action.payload,
      };
    case FETCHING_ANIMALS_FAILED:
      return {
        ...state,
        pending: false,
        error: action.payload,
      };

    default:
      state;
  }
}

// export const getAnimals = (state) => state.animals;
// export const getAnimalsPending = (state) => state.pending;
// export const getAnimalsError = (state) => state.error;
