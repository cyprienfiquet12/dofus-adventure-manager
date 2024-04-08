import { Option } from "@material-tailwind/react";
import { Dispatch, SetStateAction, useState, useEffect } from "react";
import Select, { SingleValue } from "react-select";
import { CharactersType } from "../../types/Characters.type";

type OptionType = {
  value: string;
  label: string;
};

const options: OptionType[] = [
  { value: "Imagiro", label: "Imagiro" },
  { value: "Orukam", label: "Orukam" },
  { value: "Hell Mina", label: "Hell Mina" },
  { value: "Draconiros", label: "Draconiros" },
  { value: "Ombre", label: "Ombre" },
  { value: "Tylezia", label: "Tylezia" },
  { value: "Tal Kasha", label: "Tal Kasha" },
  { value: "Lernaya", label: "Lernaya" },
  { value: "Gusnoh", label: "Gusnoh" },
  { value: "Zerpan", label: "Zerpan" },
];
export function SelectServer({
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
