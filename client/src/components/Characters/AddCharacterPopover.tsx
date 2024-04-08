import { Input, Alert } from "@material-tailwind/react";
import Popover from "../ui/popover/Popover";
import { PlusIcon } from "@heroicons/react/24/solid";
import { SelectServer } from "./SelectServer";
import { SelectClasse } from "./SelectClasse";
import { SelectAlignement } from "./SelectAlignement";
import { Dispatch, SetStateAction } from "react";
import { CharactersType } from "../../types/Characters.type";

export function AddCharactersPopover({
  isOpen,
  setIsOpen,
  handleAddCharacter,
  characterData,
  setCharacterData,
  msg,
}: {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  handleAddCharacter: (characterData: CharactersType | undefined) => void;
  characterData: CharactersType | undefined;
  setCharacterData: Dispatch<SetStateAction<CharactersType | undefined>>;
  msg: string;
}) {
  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCharacterData({ ...characterData, name: e.target.value });
  };
  const handleChangeLevel = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCharacterData({ ...characterData, level: Number(e.target.value) });
  };
  const handleChangeOmega = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCharacterData({ ...characterData, omega: Number(e.target.value) });
  };
  const handleChangeKamas = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCharacterData({ ...characterData, kamas: Number(e.target.value) });
  };

  return (
    <Popover
      content={
        <>
          <div className="block gap-4">
            <h6 color="blue-gray" className="mb-6">
              Nouveau personnage
            </h6>
            {msg ? (
              <Alert className="justify-self-center max-w-max mb-8" color="red">
                {msg}
              </Alert>
            ) : (
              ""
            )}
            <div>
              <div className="flex gap-2 mb-4">
                <Input
                  variant="outlined"
                  label="Nom"
                  placeholder="Nom"
                  onChange={(e) => handleChangeName(e)}
                  value={characterData ? characterData.name : ""}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                  crossOrigin={undefined}
                />
              </div>
            </div>
            <div>
              <div className="flex gap-2 mb-4">
                <Input
                  variant="outlined"
                  min="0"
                  label="Niveau"
                  type="number"
                  placeholder="Niveau"
                  onChange={(e) => handleChangeLevel(e)}
                  value={characterData ? characterData.level : undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                  crossOrigin={undefined}
                />
              </div>
            </div>
            <div>
              <div className="flex gap-2 mb-4">
                <Input
                  variant="outlined"
                  min="0"
                  label="Oméga"
                  type="number"
                  placeholder="Niveau Oméga"
                  onChange={(e) => handleChangeOmega(e)}
                  value={characterData ? characterData.omega : undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                  crossOrigin={undefined}
                />
              </div>
            </div>
            <div>
              <div className="flex gap-2 mb-4">
                <Input
                  variant="outlined"
                  min="0"
                  label="Kamas"
                  type="number"
                  placeholder="Kamas"
                  onChange={(e) => handleChangeKamas(e)}
                  value={characterData ? characterData.kamas : undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                  crossOrigin={undefined}
                />
              </div>
            </div>
            <div>
              <div className="flex gap-2  mb-4">
                <SelectAlignement
                  characterData={characterData}
                  setCharacterData={setCharacterData}
                />
              </div>
            </div>
            <div>
              <div className="flex gap-2 mb-4">
                <SelectServer
                  characterData={characterData}
                  setCharacterData={setCharacterData}
                />
              </div>
            </div>
            <div>
              <div className="flex gap-2 mb-4">
                <SelectClasse
                  characterData={characterData}
                  setCharacterData={setCharacterData}
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <button
              className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gradient-to-tr from-gray-900 to-gray-800 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] flex items-center gap-2"
              onClick={() => handleAddCharacter(characterData)}
            >
              Ajouter le personnage
            </button>
          </div>
        </>
      }
      isOpen={isOpen}
      setIsOpen={setIsOpen}
    >
      <button className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gradient-to-tr from-gray-900 to-gray-800 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] w-full flex items-center gap-2">
        <PlusIcon className="w-6" />
        Ajouter un personnage
      </button>
    </Popover>
  );
}
