import { Option } from "@material-tailwind/react";
import { Dispatch, SetStateAction, useState, useEffect } from "react";
import Select, { SingleValue } from "react-select";
import { CharactersType } from "../../types/Characters.type";

type OptionType = {
  value: string;
  label: string;
};

const options: OptionType[] = [
  { value: "Ecaflip", label: "Ecaflip" },
  { value: "Eniripsa", label: "Eniripsa" },
  { value: "Iop", label: "Iop" },
  { value: "Crâ", label: "Crâ" },
  { value: "Féca", label: "Féca" },
  { value: "Sacrieur", label: "Sacrieur" },
  { value: "Sadida", label: "Sadida" },
  { value: "Osamodas", label: "Osamodas" },
  { value: "Enutrof", label: "Enutrof" },
  { value: "Sram", label: "Sram" },
  { value: "Xélor", label: "Xélor" },
  { value: "Pandawa", label: "Pandawa" },
  { value: "Roublard", label: "Roublard" },
  { value: "Zobal", label: "Zobal" },
  { value: "Steamer", label: "Steamer" },
  { value: "Eliotrop", label: "Eliotrop" },
  { value: "Huppermage", label: "Huppermage" },
  { value: "Ouginak", label: "Ouginak" },
  { value: "Forgelance", label: "Forgelance" },
];
export function SelectClasse({
  characterData,
  setCharacterData,
}: {
  characterData: CharactersType | undefined;
  setCharacterData: Dispatch<SetStateAction<CharactersType | undefined>>;
}) {
  const [selectedOption, setSelectedOption] = useState<OptionType>(options[0]);

  const handleChange = (option: SingleValue<OptionType>) => {
    if (option) {
      setCharacterData({ ...characterData, alignement: option.value });
      setSelectedOption(option);
    }
  };
  return (
    <div className="w-96">
      <Select
        value={selectedOption}
        onChange={(option) => handleChange(option)}
        options={options}
        placeholder="Classe"
      />
    </div>
  );
}
