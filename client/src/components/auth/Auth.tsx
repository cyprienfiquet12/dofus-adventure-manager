// Global imports
import { useEffect, useState, useContext, FormEventHandler } from "react";

// Project dependencies
import useApi from "../../hooks/api/useApi";
import {
  validatePasswordLength,
  validateEmailFormat,
  validatePasswordMatch,
} from "./validations";
import { AuthData } from "../../hooks/api/apiData";
import { useLocation } from "react-router-dom";
import LoginForm from "./LogInForm";
import RegisterForm from "./RegisterForm";
import Header from "../ui/global/Header";
import authCtx from "../../store/auth/AuthContextProvier";

const Auth = () => {
  const [authData, setAuthData] = useState<AuthData>();
  const { request, setError } = useApi();
  const { globalLogInDispatch } = useContext(authCtx);
  const location = useLocation();
  const currentPathArray = location.pathname.split("/");
  const isLogin = currentPathArray[currentPathArray.length - 1] === "login";
  const [msg, setMsg] = useState<string>();

  // Upon successful response from the api for login user, dispatch global auth LOG_IN event
  useEffect(() => {
    if (authData && authData.success) {
      globalLogInDispatch({
        authToken: authData.user.auth_token,
        userId: authData.user.id,
        name: authData.user.name,
        email: authData.user.email,
        haveActiveSubscription: authData.user.haveActiveSubscription,
      });
    }
  }, [authData, globalLogInDispatch]);

  const authHandler: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // Validations first!
    const userEmail = data.get("email");
    const userPassword = data.get("password");
    try {
      if (!validateEmailFormat(userEmail?.toString() || "")) {
        throw new Error("Incorrect credential format!");
      }
      const params = {
        email: userEmail,
        password: userPassword,
      };
      const endpoint = `/${isLogin ? "login" : "register"}`;
      await request(endpoint, params, setAuthData, setMsg);
    } catch (error: any) {
      setError(error.message || error);
    }
  };

  const registerHandler: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // Validations first!
    const userEmail = data.get("email");
    const userPassword = data.get("password");
    const userPasswordConfirmation = data.get("confirm-password");
    const userName = data.get("name");
    try {
      if (
        !validateEmailFormat(userEmail?.toString() || "") ||
        !validatePasswordLength(userPassword?.toString() || "") ||
        !validatePasswordMatch(
          userPassword?.toString() || "",
          userPasswordConfirmation?.toString() || ""
        )
      ) {
        throw new Error("Incorrect credential format!");
      }
      const params = {
        email: userEmail,
        password: userPassword,
        confPassword: userPasswordConfirmation,
        name: userName,
      };

      const endpoint = `/${isLogin ? "login" : "register"}`;
      await request(endpoint, params, setAuthData, setMsg);
    } catch (error: any) {
      setError(error.message || error);
    }
  };
  return (
    <div className="mt-32">
      <Header />
      {msg ? (
        <div className="flex">
          <div className="relative block w-full text-base font-regular px-4 py-4 rounded-lg bg-red-500 text-white justify-self-center max-w-max mb-8 ">
            {msg}
          </div>
        </div>
      ) : (
        ""
      )}
      {isLogin ? (
        <LoginForm onSubmit={authHandler} />
      ) : (
        <RegisterForm onSubmit={registerHandler} />
      )}
    </div>
  );
};

export default Auth;
