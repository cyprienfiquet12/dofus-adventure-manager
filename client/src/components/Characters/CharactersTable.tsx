import { ClasseDisplay } from "./ClasseDisplay";
import Kamas from "../../assets/kamas.png";
import Ruban from "../../assets/ruban.png";
import { CharactersType } from "../../types/Characters.type";
import { TrashIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";
export function CharactersTable({
  characters,
  handleDeleteCharacter,
}: {
  characters: CharactersType[] | undefined;
  handleDeleteCharacter: (characterId: number) => void;
}) {
  const navigate = useNavigate();
  const deleteConfirmation = (item: CharactersType) => {
    if (
      window.confirm(
        `Voulez vous vraiment supprimer ${item.name} ainsi que tous les éléments qui lui sont liés ?`
      )
    )
      handleDeleteCharacter(item.id ? item.id : 0);
  };
  const handeRowClicked = (item: CharactersType) => {
    navigate(`/character/${item.id}`);
  };
  return (
    <table className="grid rounded-t-lg table-fixed">
      <thead>
        <tr className="text-left bg-gradient-to-tr from-gray-900 to-gray-800 text-white shadow-md shadow-gray-900/10">
          <th className="w-20 p-2 sticky left-0 rounded-tl-xl">Classe</th>
          <th className="max-w-96 min-w-40 p-2 sticky left-[40px] w-fit">
            Nom
          </th>
          {/* notice how we use left-[40px] because `w-10` equals 40px */}
          <th className="max-w-96 min-w-40 p-2 sticky left-[40px] w-fit">
            Serveur
          </th>
          {/* notice how we use left-[40px] because `w-10` equals 40px */}
          <th className="max-w-96 min-w-20 p-2 sticky left-[100px] w-fit">
            Niveau
          </th>
          {/* notice how we use left-[40px] because `w-10` equals 40px */}
          <th className="max-w-96 min-w-40 p-2 sticky left-[120px] w-fit">
            Kamas
          </th>
          {/* notice how we use left-[40px] because `w-10` equals 40px */}
          <th className="max-w-96 min-w-40 p-2 sticky left-[160px] w-fit">
            Quêtes
          </th>
          {/* notice how we use left-[40px] because `w-10` equals 40px */}
          <th className="max-w-96 min-w-40 p-2 sticky left-[200px] w-fit">
            Succès
          </th>
          {/* notice how we use left-[40px] because `w-10` equals 40px */}
          <th className="max-w-96 min-w-40 p-2 sticky left-[220px] w-fit">
            Elevage
          </th>
          {/* notice how we use left-[40px] because `w-10` equals 40px */}
          <th className="max-w-96 min-w-20 p-2 sticky left-[260px] rounded-tr-xl w-fit">
            Actions
          </th>
        </tr>
      </thead>
      <tbody>
        {characters
          ? characters.map((item, index) => {
              return (
                <tr
                  key={index}
                  className="text-left even:bg-blue-gray-50/50 flex hover:bg-blue-gray-300"
                  onClick={() => handeRowClicked(item)}
                >
                  <td className="min-w-20 p-2 sticky left-0">
                    <ClasseDisplay classe={item.classe} />
                  </td>
                  <td className="max-w-96 min-w-40 p-2 sticky left-[20px] flex w-fit items-center">
                    {item.name}
                  </td>
                  {/* notice how we use left-[40px] because `w-10` equals 40px */}
                  <td className="max-w-96 min-w-40 p-2 left-[60px] flex w-fit items-center">
                    {item.server}
                  </td>
                  <td className="max-w-96 min-w-20 p-2 left-[1000px] flex w-fit items-center">
                    {item.level == 200 ? (
                      item.omega && item.omega > 0 ? (
                        <div className="flex justify-center ml-4">
                          <img
                            className="w-16 h-8 absolute z-0"
                            src={Ruban}
                            alt="ruban"
                          />
                          <span className="z-10">{item.omega}</span>
                        </div>
                      ) : (
                        item.level
                      )
                    ) : (
                      item.level
                    )}
                  </td>
                  <td className="max-w-96 min-w-40 p-2 left-[120px] flex w-fit items-center gap-2">
                    {Number(item.kamas).toLocaleString()}
                    <img className="h-4" src={Kamas} alt="kamas" />
                  </td>
                  <td className="max-w-96 min-w-40 p-2 left-[160px] flex w-fit items-center">
                    Quest
                  </td>
                  <td className="max-w-96 min-w-40 p-2 left-[200px] flex w-fit items-center">
                    Success
                  </td>
                  <td className="max-w-96 min-w-40 p-2 left-[220px] flex w-fit items-center">
                    Mounts
                  </td>
                  <td className="max-w-96 min-w-20 p-2 left-[240px] flex w-fit items-center">
                    <a
                      href="#"
                      className="font-medium opacity-80"
                      onClick={() => deleteConfirmation(item)}
                    >
                      <TrashIcon className="h-5 w-5" />
                    </a>
                  </td>
                </tr>
              );
            })
          : ""}
      </tbody>
    </table>
  );
}
