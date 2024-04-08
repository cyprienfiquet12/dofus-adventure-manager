import { CharactersTable } from "../components/Characters/CharactersTable";
import { useContext, useEffect, useState } from "react";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import axios, { AxiosError } from "axios";
import { Alert } from "@material-tailwind/react";
import AuthContext from "../store/auth/AuthContextProvier";
import { Sidebar } from "../components/SideBar";
import { AddCharactersPopover } from "../components/Characters/AddCharacterPopover";
import { CharactersType } from "../types/Characters.type";
import { useNavigate, useParams } from "react-router-dom";

export default function CharacterView() {
  const [characterData, setCharacterData] = useState<CharactersType>();
  const [character, setCharacter] = useState<CharactersType | undefined>();
  const [msg, setMsg] = useState("");
  const [msgSuccess, setMsgSuccess] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const { authState } = useContext(AuthContext);
  const [alert, setAlert] = useState(true);
  const { characterId } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    // when the component is mounted, the alert is displayed for 3 seconds
    setTimeout(() => {
      setAlert(false);
    }, 3000);
  }, [alert]);
  useEffect(() => {
    getCharacter();
    setCharacterData(undefined);
  }, []);
  const getCharacter = async () => {
    try {
      await axios
        .post(
          `http://localhost:4000/character/${authState.userId}`,
          {
            id: characterId,
          },
          {
            headers: {
              Authorization: `Bearer ${authState.authToken}`,
            },
          }
        )
        .then((response) => {
          setCharacter(response.data);
        });
    } catch (error) {
      let message;
      if (error instanceof Error) message = error.message;
      if (error instanceof AxiosError) message = error.response?.data.msg;
      else message = String(error);
      setMsg(message);
    }
  };

  return (
    <>
      <div className="float-left fixed z-10 top-0 block">
        <Sidebar />
      </div>
      <div className="pt-32 grid justify-center ml-[20rem] overflow-visible">
        <div className="absolute ml-8">
          <button
            onClick={() => {
              navigate("/characters");
            }}
          >
            <ChevronLeftIcon className="h-8 w-8" />
          </button>
        </div>
        <div className="block  justify-self-center">
          <h1 className="text-3xl font-bold	">{character?.name}</h1>
        </div>
        {msgSuccess && alert ? (
          <Alert
            className="justify-self-center mb-6 mt-6 flex justify-center max-w-3xl "
            color="green"
          >
            {msgSuccess}
          </Alert>
        ) : (
          ""
        )}
        <div className="block mt-6 justify-self-center max-w-7xl place-items-center rounded-t-lg"></div>
      </div>
    </>
  );
}
