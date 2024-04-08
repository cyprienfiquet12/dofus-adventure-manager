import Card from "../ui/card/Card";
import CardBody from "../ui/card/CardBody";
import CardHeader from "../ui/card/CardHeader";
import Button from "../ui/button/Button";
import { FormEventHandler } from "react";
import { Link } from "react-router-dom";

type Props = {
  onSubmit: FormEventHandler<HTMLFormElement>;
};

const RegisterForm = (props: Props) => {
  const { onSubmit } = props;
  return (
    <div className="grid">
      <div className="flex justify-center">
        <Card className="">
          <CardHeader className="">
            <h3 className="block antialiased tracking-normal font-sans text-3xl font-semibold leading-snug text-white">
              Inscris toi
            </h3>
          </CardHeader>
          <CardBody className="">
            <form onSubmit={onSubmit} className="flex flex-col">
              <div className="my-5">
                <label htmlFor="name" className="sr-only">
                  Pseudo
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Pseudo"
                  className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 disabled:cursor-not-allowed transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 placeholder:opacity-100 focus:placeholder:opacity-100 text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
                />
              </div>
              <div className="my-5">
                <label htmlFor="email" className="sr-only">
                  Adresse email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="Adresse email"
                  className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 disabled:cursor-not-allowed transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 placeholder:opacity-100 focus:placeholder:opacity-100 text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
                />
              </div>
              <div className="my-5">
                <label htmlFor="password" className="sr-only">
                  Mot de passe
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  placeholder="Mot de passe"
                  className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 disabled:cursor-not-allowed transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 placeholder:opacity-100 focus:placeholder:opacity-100 text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
                />
              </div>
              <div className="my-5">
                <label htmlFor="confirm-password" className="sr-only">
                  Confirmation du mot de passe
                </label>
                <input
                  id="confirm-password"
                  name="confirm-password"
                  type="password"
                  required
                  placeholder="Confirmation du mot de passe"
                  className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 disabled:cursor-not-allowed transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 placeholder:opacity-100 focus:placeholder:opacity-100 text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
                />
              </div>
              <Button>Connexion</Button>
              <p className="antialiased font-sans text-sm font-light leading-normal text-inherit mt-6 flex justify-center">
                Déjà un compte ?{" "}
                <Link
                  className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 ml-1 font-bold"
                  to={"/login"}
                >
                  Connecte toi !
                </Link>
              </p>
            </form>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default RegisterForm;
