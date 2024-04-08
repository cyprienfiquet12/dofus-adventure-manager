import React, { useContext } from "react";
import {
  PresentationChartBarIcon,
  ListBulletIcon,
  TrophyIcon,
  WrenchScrewdriverIcon,
  SparklesIcon,
  AcademicCapIcon,
  HeartIcon,
} from "@heroicons/react/24/solid";
import Logo from "../assets/Logo.png";
import { useNavigate } from "react-router-dom";
import AuthContext from "../store/auth/AuthContextProvier";

export function Sidebar() {
  const [openAlert, setOpenAlert] = React.useState(true);
  const { authState } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleQuest = () => {
    navigate("/quest");
  };
  const handleDashboard = () => {
    navigate("/dashboard");
  };

  return (
    <div className="flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 fixed h-full w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
      <div className="mb-10 p-4"></div>
      <nav className="flex flex-col gap-1 min-w-[240px] p-2 font-sans text-base font-normal text-blue-gray-700">
        <div
          className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 focus:bg-blue-gray-50 focus:bg-opacity-80 active:bg-blue-gray-50 active:bg-opacity-80 hover:text-blue-gray-900 focus:text-blue-gray-900 active:text-blue-gray-900 outline-none"
          onClick={handleDashboard}
        >
          <div className="grid place-items-center mr-4">
            <PresentationChartBarIcon className="h-5 w-5" />
          </div>
          Tableau de bord
        </div>
        <div
          className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 focus:bg-blue-gray-50 focus:bg-opacity-80 active:bg-blue-gray-50 active:bg-opacity-80 hover:text-blue-gray-900 focus:text-blue-gray-900 active:text-blue-gray-900 outline-none"
          onClick={handleQuest}
        >
          <div className="grid place-items-center mr-4">
            <ListBulletIcon className="h-5 w-5" />
          </div>
          Quêtes
        </div>
        <div className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 focus:bg-blue-gray-50 focus:bg-opacity-80 active:bg-blue-gray-50 active:bg-opacity-80 hover:text-blue-gray-900 focus:text-blue-gray-900 active:text-blue-gray-900 outline-none">
          <div className="grid place-items-center mr-4">
            <TrophyIcon className="h-5 w-5" />
          </div>
          Succès
        </div>
        <div className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 focus:bg-blue-gray-50 focus:bg-opacity-80 active:bg-blue-gray-50 active:bg-opacity-80 hover:text-blue-gray-900 focus:text-blue-gray-900 active:text-blue-gray-900 outline-none">
          <div className="grid place-items-center mr-4">
            <WrenchScrewdriverIcon className="h-5 w-5" />
          </div>
          Métiers
        </div>
        <div className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 focus:bg-blue-gray-50 focus:bg-opacity-80 active:bg-blue-gray-50 active:bg-opacity-80 hover:text-blue-gray-900 focus:text-blue-gray-900 active:text-blue-gray-900 outline-none">
          <div className="grid place-items-center mr-4">
            <SparklesIcon className="h-5 w-5" />
          </div>
          Statistiques
        </div>
        <div className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 focus:bg-blue-gray-50 focus:bg-opacity-80 active:bg-blue-gray-50 active:bg-opacity-80 hover:text-blue-gray-900 focus:text-blue-gray-900 active:text-blue-gray-900 outline-none">
          <div className="grid place-items-center mr-4">
            <AcademicCapIcon className="h-5 w-5" />
          </div>
          Stuffs
        </div>
        <div className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 focus:bg-blue-gray-50 focus:bg-opacity-80 active:bg-blue-gray-50 active:bg-opacity-80 hover:text-blue-gray-900 focus:text-blue-gray-900 active:text-blue-gray-900 outline-none">
          <div className="grid place-items-center mr-4">
            <HeartIcon className="h-5 w-5" />
          </div>
          Elevages
        </div>
      </nav>
      {!authState.haveActiveSubscription ? (
        <div className="relative block w-full text-base font-regular px-4 py-4 rounded-lg bg-gray-900 text-white mt-auto mb-4">
          <img alt="logo" src={Logo} className="mb-4 h-14 w-18" />
          <h6 className="mb-1">Passez à la vitesse supérieur</h6>
          <p className="font-normal opacity-80">
            Passez à la version Tryhard et bénéficiez de fonctionnalités
            supplémentaires et des slots de personnage en plus !
          </p>
          <div className="mt-4 flex gap-3">
            <a
              href="#"
              className="font-medium opacity-80"
              onClick={() => setOpenAlert(false)}
            >
              Fermer
            </a>
            <a href="#" className="font-semibold">
              Je Tryhard
            </a>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
