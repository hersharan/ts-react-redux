import {
    USER_LOGIN,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAILURE,
    USER_LOGOUT,
    USER_LOGOUT_SUCCESS,
    USER_LOGOUT_FAILURE,
  } from '../actionTypes';
  
  export default function userLogin(state = {
    authenticatingUserCredentails: false,
    authenticatedUserCredentails: false,
    fetchingLogoutInfo: false,
    fetchedLogoutInfo: false,
    userLoginCredentails: null,
    userLogout: [],
    error: null,
    userLoginError: null,
  }, action) {
    switch (action.type) {
      case USER_LOGIN: {
        return {
          ...state,
          authenticatingUserCredentails: true,
          authenticatedUserCredentails: false,
          userLoginCredentails: null,
          userLoginError: null,
        };
      }
      case USER_LOGIN_SUCCESS: {
        return {
          ...state,
          authenticatingUserCredentails: false,
          authenticatedUserCredentails: true,
          userLoginCredentails: action.payload,
        };
      }
      case USER_LOGIN_FAILURE: {
        return {
          ...state,
          authenticatingUserCredentails: false,
          authenticatedUserCredentails: true,
          userLoginError: action.payload.data
        };
      }
      case USER_LOGOUT: {
        return {
          ...state,
          fetchingLogoutInfo: true,
          fetchedLogoutInfo: false,
          userLogout: [],
          userLogoutError: null,
        };
      }
      case USER_LOGOUT_SUCCESS: {
        return {
          ...state,
          fetchingLogoutInfo: false,
          fetchedLogoutInfo: true,
          userLogout: action.payload
        };
      }
      case USER_LOGOUT_FAILURE: {
        return {
          ...state,
          fetchingLogoutInfo: false,
          fetchedLogoutInfo: true,
          userLogoutError: action.payload
        };
      }
      default:
        return state;
    }
  }