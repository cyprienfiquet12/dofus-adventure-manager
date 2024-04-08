import { CharactersTable } from "../components/Characters/CharactersTable";
import { useContext, useEffect, useState } from "react";

import axios, { AxiosError } from "axios";
import { Alert } from "@material-tailwind/react";
import AuthContext from "../store/auth/AuthContextProvier";
import { Sidebar } from "../components/SideBar";
import { AddCharactersPopover } from "../components/Characters/AddCharacterPopover";
import { CharactersType } from "../types/Characters.type";

export default function Characters() {
  const [characterData, setCharacterData] = useState<CharactersType>();
  const [characters, setCharacters] = useState<CharactersType[] | undefined>();

  const [msg, setMsg] = useState("");
  const [msgSuccess, setMsgSuccess] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const { authState } = useContext(AuthContext);

  const [alert, setAlert] = useState(true);

  useEffect(() => {
    // when the component is mounted, the alert is displayed for 3 seconds
    setTimeout(() => {
      setAlert(false);
    }, 3000);
  }, [alert]);

  useEffect(() => {
    getCharacters();
    setCharacterData(undefined);
  }, []);
  const getCharacters = async () => {
    try {
      await axios
        .get(`http://localhost:4000/characters/${authState.userId}`, {
          headers: {
            Authorization: `Bearer ${authState.authToken}`,
          },
        })
        .then((response) => {
          setCharacters(response.data);
        });
    } catch (error) {
      let message;
      if (error instanceof Error) message = error.message;
      if (error instanceof AxiosError) message = error.response?.data.msg;
      else message = String(error);
      setMsg(message);
    }
  };
  const handleAddCharacter = async (
    characterData: CharactersType | undefined
  ) => {
    try {
      characterData
        ? await axios
            .post(
              `http://localhost:4000/characters/${authState.userId}`,
              {
                name: characterData.name,
                level: characterData.level,
                omega: characterData.omega,
                kamas: characterData.kamas,
                server: characterData.server,
                classe: characterData.classe,
                alignement: characterData.alignement,
              },
              {
                headers: {
                  Authorization: `Bearer ${authState.authToken}`,
                },
              }
            )
            .then((response) => {
              setMsgSuccess(response.data.msg);
              setMsg("");
              setCharacterData(undefined);
              setIsOpen(false);
              setAlert(true);
              getCharacters();
            })
        : setMsg("Les champs doivent être remplis");
    } catch (error) {
      let message;
      console.log(error);
      if (error instanceof Error) message = error.message;
      if (error instanceof AxiosError) message = error.response?.data.msg;
      else message = String(error);
      setMsg(message);
    }
  };

  const handleDeleteCharacter = async (characterId: number) => {
    try {
      await axios
        .delete(`http://localhost:4000/characters/${authState.userId}`, {
          headers: {
            Authorization: `Bearer ${authState.authToken}`,
          },
          data: {
            id: characterId,
          },
        })
        .then((response) => {
          setMsgSuccess(response.data.msg);
          setMsg("");
          setAlert(true);
          getCharacters();
        });
    } catch (error) {
      let message;
      console.log(error);
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
        <div className="block  justify-self-center">
          <h1 className="text-3xl font-bold	">Mes personnages</h1>
        </div>
        <div className="block mt-6 justify-self-center">
          <AddCharactersPopover
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            handleAddCharacter={handleAddCharacter}
            characterData={characterData}
            setCharacterData={setCharacterData}
            msg={msg}
          />
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
        <div className="block mt-6 justify-self-center max-w-7xl place-items-center rounded-t-lg">
          <CharactersTable
            characters={characters}
            handleDeleteCharacter={handleDeleteCharacter}
          />
        </div>
      </div>
    </>
  );
}
