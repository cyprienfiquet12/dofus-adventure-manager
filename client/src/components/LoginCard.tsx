import { Typography, Input } from "@material-tailwind/react";
import Button from "./ui/button/Button";
import Card from "./ui/card/Card";
import CardBody from "./ui/card/CardBody";
import CardHeader from "./ui/card/CardHeader";
import CardFooter from "./ui/card/CardFooter";
import { useNavigate } from "react-router-dom";
import { Dispatch, SetStateAction } from "react";
export function LoginCard({
  setEmail,
  email,
  setPassword,
  password,
  handleSubmit,
}: {
  setEmail: (e: React.ChangeEvent<HTMLInputElement>) => void;
  email: string;
  setPassword: (e: React.ChangeEvent<HTMLInputElement>) => void;
  password: string;
  handleSubmit: () => void;
}) {
  const navigate = useNavigate();
  const handleRegister = () => navigate("/register");

  return (
    <Card className="w-96">
      <CardHeader className="mb-4 grid h-28 place-items-center">
        <h3 color="white">Connectez vous</h3>
      </CardHeader>
      <CardBody className="flex flex-col">
        <Input
          key="email"
          onChange={(e) => setEmail(e)}
          value={email}
          label="Email address"
          id="email"
          name="email"
          type="email"
          placeholder="Adresse email"
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
          crossOrigin={undefined}
        />
        <Input
          key="password"
          onChange={(e) => setPassword(e)}
          value={password}
          label="Password"
          id="password"
          name="password"
          type="password"
          placeholder="Mot de passe"
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
          crossOrigin={undefined}
        />
      </CardBody>
      <CardFooter>
        <button
          className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gradient-to-tr from-gray-900 to-gray-800 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] w-full flex items-center gap-2"
          onClick={handleSubmit}
        >
          Connexion
        </button>
        <p className="mt-6 flex justify-center">
          Pas encore de compte ?
          <a
            href="#signup"
            color="blue-gray"
            className="ml-1 font-bold"
            onClick={handleRegister}
          >
            Crééer en un !
          </a>
        </p>
      </CardFooter>
    </Card>
  );
}
