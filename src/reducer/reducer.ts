import { Context } from "../context/AuthContext";

export const ACTIONS = {
  SETUSER: "SETUSER",
  SETLOADING: "SETLOADING",
  SETPHOTOURL: "SETPHOTOURL",
};

export interface Action {
  type: string;
  payload: any;
}

export const reducer = (state: Context, action: Action): Context => {
  switch (action.type) {
    case ACTIONS.SETUSER:
      return {
        ...state,
        user: action.payload,
      };
    case ACTIONS.SETLOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case ACTIONS.SETPHOTOURL:
      return {
        ...state,
        photoURL: action.payload,
      };
    default:
      return state;
  }
};
