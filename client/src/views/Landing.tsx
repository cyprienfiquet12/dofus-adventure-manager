import React, { useEffect } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import Quest from "../assets/Quest.png";
import Mounts from "../assets/monts.png";
import Stat from "../assets/Stat.png";
import Stuff from "../assets/Stuffs.png";
import Success from "../assets/Success.png";
import Work from "../assets/work.png";
import EGG1 from "../assets/EGG1.png";
import EGG2 from "../assets/EGG2.png";
import { PricingCard } from "../components/PricingCard";
import { CardDefault } from "../components/ui/landing/CardDefault";

const Landing = () => {
  const refreshToken = Cookies.get("isAuth");
  const navigate = useNavigate();
  useEffect(() => {
    if (refreshToken === "true") {
      navigate("/dashboard");
    }
  }, []);

  const HandleRegister = () => {
    navigate("/register");
  };

  const pricingElements = [
    {
      pricingName: "Gratuit",
      included: [
        "Jusqu'à 4 personnages",
        "Suivi des quêtes",
        "Suivi des succès",
        "Suivi des métiers",
      ],
      price: 0,
    },
    {
      pricingName: "Tryhardeur",
      included: [
        "Jusqu'à 20 personnages",
        "Suivi des quêtes",
        "Suivi des succès",
        "Suivi des métiers",
        "Suivi des statistiques",
        "Suivi des élevages",
        "Sauvegarde des stuffs",
      ],
      price: 20,
    },
  ];

  const cardElements = [
    {
      src: Quest,
      alt: "quest",
      title: "Traquer les quêtes",
      content:
        "Ayez un suivi complet des quêtes que vous avez déjà effectué et celles qui vous restes a faire sur chacun de vos personnages ! Vous y retrouverez aussi le succès associé et le niveau requis ainsi qu'un maximum d'information pour vous faciliter la complétion de chacunes !",
    },
    {
      src: Success,
      alt: "success",
      title: "Suivez vos succès",
      content:
        "Suivez l'avancé de vos points de succès de tous vos personnages afin de tenter de vous rapprocher du 100% ! Vous avez accès a chacun des succès du jeu ainsi qu'aux éléments qui leurs sont lié. Vous pouvez ainsi checké quand c'est complété !",
    },
    {
      src: Work,
      alt: "work",
      title: "Suivi des métiers",
      content:
        "Ayez accès aux niveau de vos métier de tous vos personnages et centralisez l'information pour plus d'éfficacité !",
    },
    {
      src: Stat,
      alt: "stat",
      title: "Vos Statistiques",
      content:
        "Tenez a jour les statistiques de vos personnages leurs allignement",
    },
    {
      src: Stuff,
      alt: "stuff",
      title: "Vos équipements",
      content: "Sauvegardez vos différents équipements, statistiques etc.",
    },
    {
      src: Mounts,
      alt: "mounts",
      title: "L'élevage",
      content:
        "Fini les tableurs excels ! Suivez votre élevage dirrectement ici !",
    },
  ];

  return (
    <div className="w-full h-full">
      <section className="mb-48 mt-48">
        <div className="mx-auto md:w-4/5  pt-12">
          <div className="text-center pt-4 md:mt-8 mx-auto w-[90%] md:w-4/5 ">
            <img
              className="w-2/12	-rotate-12 absolute left-2"
              src={EGG1}
              alt="illustration"
            />
            <h1
              className="font-bold leading-[50px] md:leading-[60px] lg:leading-[80px] inline
                        text-iso-gray-dark
                        tracking-[-1.4px] text-4xl md:text-6xl lg:text-7xl Inter"
            >
              Bienvenu sur votre compagnon{" "}
            </h1>
            <span
              className="text-gradient font-bold 
                        tracking-[-1.4px] text-4xl md:text-6xl lg:text-7xl Inter"
            >
              de progression
            </span>
            <p className="text-iso-gray w-4/5 text-lg md:text-xl pt-2 mt-4 font-normal text-center tracking-loose mx-auto Inter">
              Reportez quotidiennement votre progression (quêtes, métiers, stuff
              etc.) pour chacun de vos personnages et voyez ce que vous avez
              manqué ou ce qu'il vous reste a faire pour compléter DOFUS !!
            </p>
            <img
              className="w-2/12	rotate-12 absolute right-20"
              src={EGG2}
              alt="illustration"
            />
            <div className="flex flex-row mx-auto justify-center pt-7 mt-4 ">
              <button
                type="button"
                className="text-white bg-[#000C1A] hover:drop-shadow-lg focus:ring-4 
                        focus:ring-blue-300 font-normal rounded-full text-base md:text-lg px-8 md:px-10 py-3 md:py-5 mr-4 mb-2
                        focus:outline-none"
                onClick={HandleRegister}
              >
                Inscrivez vous maintenant !
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="flex justify-center mb-24">
        <div className="w-10/12">
          <div className="grid grid-cols-3 grid-rows-2 justify-items-center gap-y-4">
            {cardElements.map((cardElement) => (
              <CardDefault
                src={cardElement.src}
                alt={cardElement.alt}
                title={cardElement.title}
                content={cardElement.content}
              />
            ))}
          </div>
        </div>
      </section>
      <section className="justify-center">
        <div className="mb-8 text-center">
          <h2 className="text-4xl font-bold lg:text-5xl">
            Choisissez ce qui vous convient le mieux !
          </h2>
        </div>
        <div className="flex justify-center">
          <div className="w-6/12">
            <div className="grid grid-cols-2 grid-rows-1 justify-items-center gap-y-4">
              {pricingElements.map((pricingElement) => (
                <PricingCard
                  pricingName={pricingElement.pricingName}
                  price={pricingElement.price}
                  included={pricingElement.included}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
