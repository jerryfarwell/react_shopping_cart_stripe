import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';

// Define the initial state of the store
const initialState = {
  user: null,
  token: null,
  error: null,
};

// Define the actions that can be dispatched to the store
export const actions = {
  SET_USER: 'SET_USER',
  SET_TOKEN: 'SET_TOKEN',
  SET_ERROR: 'SET_ERROR',
};

// Define the reducer function that will update the store based on dispatched actions
export function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.SET_USER:
      return { ...state, user: action.payload };
    case actions.SET_TOKEN:
      return { ...state, token: action.payload };
    case actions.SET_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
}

// Define thunks, which are async actions that can dispatch multiple actions
export function login(email, password) {
  return async (dispatch) => {
    try {
      const response = await axios.post('http://localhost:3000/login', {
        email,
        password,
      });
      const { user, token } = response.data;
      dispatch({ type: actions.SET_USER, payload: user });
      dispatch({ type: actions.SET_TOKEN, payload: token });
      dispatch({ type: actions.SET_ERROR, payload: null });
      return true;
    } catch (error) {
      dispatch({ type: actions.SET_ERROR, payload: error.message });
      return false;
    }
  };
}

export function logout() {
  return async (dispatch, getState) => {
    const { token } = getState();
    try {
      await axios.post(
        'http://localhost:3000/logout',
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    } catch (error) {
      console.error(error);
    }
    dispatch({ type: actions.SET_USER, payload: null });
    dispatch({ type: actions.SET_TOKEN, payload: null });
    dispatch({ type: actions.SET_ERROR, payload: null });
  };
}

// Create the store
export default createStore(reducer, applyMiddleware(thunk));
