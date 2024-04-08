import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { CharactersType } from "../../types/Characters.type";
import Select, { SingleValue } from "react-select";

type OptionType = {
  value: string;
  label: string;
};

const options: OptionType[] = [
  { value: "", label: "Aucun" },
  { value: "Bontarien", label: "Bontarien" },
  { value: "Brâkmarien", label: "Brâkmarien" },
];
export function SelectAlignement({
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
        placeholder="Alignement"
      />
    </div>
  );
}
