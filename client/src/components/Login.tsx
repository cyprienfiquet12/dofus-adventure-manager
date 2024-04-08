import { useState } from "react";
import axios, { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import { LoginCard } from "./LoginCard";
import { Alert } from "@material-tailwind/react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = () => {
    Auth();
  };

  const Auth = async () => {
    try {
      await axios
        .post("http://localhost:4000/login", {
          email: email,
          password: password,
        })
        .then(function (user) {
          const userData = user.data.userToReturn;
          const userToSet = {
            id: userData.id,
            name: userData.name,
            email: userData.email,
            haveActiveSubscription: user.data.haveActiveSubscription,
          };
        });
      navigate("/dashboard");
    } catch (error) {
      let message;
      if (error instanceof AxiosError) message = error.response?.data.msg;
      else message = String(error);
      setMsg(message);
    }
  };

  return (
    <div className="grid">
      {msg ? (
        <Alert className="justify-self-center max-w-max mb-8" color="red">
          {msg}
        </Alert>
      ) : (
        ""
      )}
      <div className="flex justify-center">
        <LoginCard
          handleSubmit={handleSubmit}
          email={email}
          setEmail={handleEmailChange}
          password={password}
          setPassword={handlePasswordChange}
        />
      </div>
    </div>
  );
}
