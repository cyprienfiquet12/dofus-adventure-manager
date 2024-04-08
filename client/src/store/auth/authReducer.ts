import { Reducer } from "react";
import { AuthAction } from "./authActions";

export interface AuthState {
  isLoggedIn: boolean;
  authToken?: string;
  userId?: number;
  name?: string;
  email?: string;
  haveActiveSubscription?: boolean
};

export const defaultAuthState: AuthState = {
  isLoggedIn: false,
};

const authReducer: Reducer<AuthState, AuthAction> = (state, action) => {
  // user successfully authenticated
  if (action.type === "LOG_IN") {
    localStorage.setItem("user", JSON.stringify(action.payload));
    return {
      ...state,
      isLoggedIn: true,
      authToken: action.payload.authToken,
      userId: action.payload.userId,
      name: action.payload.name,
      email: action.payload.email,
      haveActiveSubscription: action.payload.haveActiveSubscription,
    };
  }

  // log out user
  if (action.type === "LOG_OUT") {
    localStorage.removeItem("user");
    return defaultAuthState;
  }

  return defaultAuthState;
};

export default authReducer;