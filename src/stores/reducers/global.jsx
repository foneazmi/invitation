import { MESSAGE, CONFIRMATION, GALLERIES, THEME } from "../types";

const INITIAL_STATE = {
  message: [],
  confirmation: [],
  theme: "cupcake",
  galleries: [],
};

export const global = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MESSAGE:
      return { ...state, message: action.payload };
    case CONFIRMATION:
      return { ...state, confirmation: action.payload };
    case GALLERIES:
      return { ...state, galleries: action.payload };
    case THEME:
      return { ...state, theme: action.payload };
    default:
      return state;
  }
};
