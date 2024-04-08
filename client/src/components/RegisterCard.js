import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Checkbox,
  Button,
} from "@material-tailwind/react";
import Input from "./ui/input/Input";
import { useNavigate } from "react-router-dom";
export function RegisterCard({
  setUsername,
  username,
  setEmail,
  email,
  setPassword,
  password,
  setConfPassword,
  confPassword,
  handleSubmit,
}) {
  const navigate = useNavigate();
  const handleLogin = () => navigate("/login");
  return (
    <Card className="w-96">
      <CardHeader
        variant="gradient"
        color="gray"
        className="mb-4 grid h-28 place-items-center"
      >
        <Typography variant="h3" color="white">
          Créer votre compte
        </Typography>
      </CardHeader>
      <CardBody className="flex flex-col">
        <Input
          key="username"
          handleChange={(e) => setUsername(e)}
          value={username}
          labelText="Username"
          labelFor="username"
          id="username"
          name="username"
          type="text"
          isRequired
          placeholder="Nom d'utilisateur"
        />
        <Input
          key="email"
          handleChange={(e) => setEmail(e)}
          value={email}
          labelText="Email address"
          labelFor="email"
          id="email"
          name="email"
          type="email"
          isRequired
          placeholder="Adresse email"
        />
        <Input
          key="password"
          handleChange={(e) => setPassword(e)}
          value={password}
          labelText="Password"
          labelFor="password"
          id="password"
          name="password"
          type="password"
          isRequired
          placeholder="Mot de passe"
        />
        <Input
          key="confirm-password"
          handleChange={(e) => setConfPassword(e)}
          value={confPassword}
          labelText="Confirm Password"
          labelFor="confirm-password"
          id="confirm-password"
          name="confirm-password"
          type="password"
          isRequired
          placeholder="Confirmation du mot de passe"
        />
      </CardBody>
      <CardFooter className="pt-0">
        <Button variant="gradient" fullWidth onClick={handleSubmit}>
          Connexion
        </Button>
        <Typography variant="small" className="mt-6 flex justify-center">
          Vous avez déjà un compte ?
          <Typography
            as="a"
            href="#signup"
            variant="small"
            color="blue-gray"
            className="ml-1 font-bold"
            onClick={handleLogin}
          >
            Connectez vous !
          </Typography>
        </Typography>
      </CardFooter>
    </Card>
  );
}
