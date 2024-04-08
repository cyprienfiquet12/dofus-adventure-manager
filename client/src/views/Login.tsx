import { Dispatch, SetStateAction, useContext } from "react";
import Header from "../components/ui/global/Header";
import Login from "../components/Login";

const LoginPage = () => {
  return (
    <div className="mt-32">
      <Header />
      <Login />
    </div>
  );
};

export default LoginPage;
