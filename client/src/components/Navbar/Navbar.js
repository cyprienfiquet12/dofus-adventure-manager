import React, { useContext } from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import Logo from "../../assets/Logo.png";
import Cookies from "js-cookie";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import authCtx from "../../store/auth/AuthContextProvier";

const StickyNavbar = (props) => {
  const [openNav, setOpenNav] = React.useState(false);
  const { authState, globalLogOutDispatch } = useContext(authCtx);
  console.log(authState);

  const refreshToken = Cookies.get("refreshToken");
  const isAuth = Cookies.get("isAuth");
  const navigate = useNavigate();
  const Logout = async () => {
    try {
      await axios.delete("http://localhost:4000/logout");
      globalLogOutDispatch();
    } catch (error) {
      console.log(error);
    }
  };

  const HandleLogin = () => {
    navigate("/login");
  };

  const HandleRegister = () => {
    navigate("/register");
  };
  const HandleCharacters = () => {
    navigate("/characters");
  };

  const HandleHome = () => {
    if (authState.isLoggedIn) {
      navigate("/dashboard");
    } else {
      navigate("/");
    }
  };
  const navItems = authState.isLoggedIn
    ? [
        {
          href: "",
          title: "Mes personnages",
          onClick: HandleCharacters,
        },
        {
          href: "",
          title: "Mon compte",
          onClick: () => {},
        },
      ]
    : [
        {
          href: "",
          title: "Accueil",
          onClick: HandleHome,
        },
      ];

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {navItems.map((navItem) => (
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-normal"
        >
          <a
            href={navItem.href}
            className="flex items-center"
            onClick={navItem.onClick}
          >
            {navItem.title}
          </a>
        </Typography>
      ))}
    </ul>
  );

  return (
    <div className="h-full">
      <Navbar className="fixed block top-0 z-50 h-max max-w-full rounded-none px-4 pt-2 pb-2 lg:px-8 lg:pb-4 lg:pt-4">
        <div className="flex items-center justify-between text-blue-gray-900">
          <div className="flex items-center">
            <img alt="" className="h-14" src={Logo} />
            <Typography
              as="a"
              href="#"
              className="mr-4 cursor-pointer py-1.5 font-medium"
              onClick={HandleHome}
            >
              Dofus Adventure Manager
            </Typography>
          </div>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            <div className="flex items-center gap-x-1">
              {authState.isLoggedIn ? (
                <Button
                  variant="text"
                  size="sm"
                  className="hidden lg:inline-block"
                  onClick={Logout}
                >
                  <span>Déconnexion</span>
                </Button>
              ) : (
                <>
                  <Button
                    variant="text"
                    size="sm"
                    className="hidden lg:inline-block"
                    onClick={HandleLogin}
                  >
                    <span>Se connecter</span>
                  </Button>
                  <Button
                    variant="gradient"
                    size="sm"
                    className="hidden lg:inline-block"
                    onClick={HandleRegister}
                  >
                    <span>S'inscrire</span>
                  </Button>
                </>
              )}
            </div>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <Collapse open={openNav}>
          {navList}
          <div className="flex items-center gap-x-1">
            {authState.isLoggedIn ? (
              <Button
                variant="text"
                size="sm"
                className="hidden lg:inline-block"
                onClick={Logout}
              >
                <span>Déconnexion</span>
              </Button>
            ) : (
              <>
                <Button
                  fullWidth
                  variant="text"
                  size="sm"
                  className=""
                  onClick={HandleLogin}
                >
                  <span>Se connecter</span>
                </Button>
                <Button
                  fullWidth
                  variant="gradient"
                  size="sm"
                  className=""
                  onClick={HandleRegister}
                >
                  <span>S'inscrire</span>
                </Button>
              </>
            )}
          </div>
        </Collapse>
      </Navbar>
      {props.children}
    </div>
  );
};
export default StickyNavbar;
