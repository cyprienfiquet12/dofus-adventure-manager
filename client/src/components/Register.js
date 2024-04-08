import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { signupFields } from "../utils/constants/formFields";
import { RegisterCard } from "./RegisterCard";
import { Alert } from "@material-tailwind/react";
const fields = signupFields;
let fieldsState = {};

fields.forEach((field) => (fieldsState[field.id] = ""));

export default function Signup() {
  const [signupState, setSignupState] = useState(fieldsState);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) =>
    setSignupState({ ...signupState, [e.target.id]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(signupState);
    Register();
  };
  const handleUsernameChange = (e) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleConfPasswordChange = (e) => {
    setConfPassword(e.target.value);
  };

  const Register = async (e) => {
    try {
      await axios.post("http://localhost:4000/users", {
        name: name,
        email: email,
        password: password,
        confPassword: confPassword,
      });
      navigate("/");
    } catch (error) {
      let message;
      console.log(error);
      if (error instanceof Error) message = error.response.data.msg;
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
        <RegisterCard
          handleSubmit={handleSubmit}
          username={name}
          setUsername={handleUsernameChange}
          email={email}
          setEmail={handleEmailChange}
          password={password}
          setPassword={handlePasswordChange}
          confPassword={confPassword}
          setConfPassword={handleConfPasswordChange}
        />
      </div>
    </div>
  );
}
