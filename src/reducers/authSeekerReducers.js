import { TYPES } from "../actions";
import { updateObject } from '../utils'

const initialState = {
  userData: {},
  isLoader: false,
  isLogin: false,
};

const UserAuth = (state = initialState, { type, payload }) => {
  console.log('get user data ----', type);
  console.log('get user data ----', payload);
  switch (type) {
    case TYPES.USER_LOGIN:
      return updateObject(state, { userData: payload, isLogin: true } )
    case TYPES.UPDATE_LOADER:
      return (state, { isLoader: payload } )
    default:
      return { ...state };
  }
};

export { UserAuth };
