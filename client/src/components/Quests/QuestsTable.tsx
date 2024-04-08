import Kamas from "../../assets/kamas.png";
import Ruban from "../../assets/ruban.png";
import { TrashIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";
import { QuestsType } from "../../types/Quests.type";
export function QuestsTable({ quests }: { quests: QuestsType[] | undefined }) {
  const navigate = useNavigate();
  const handeRowClicked = (item: QuestsType) => {
    navigate(`/quest/${item.id}`);
  };
  return (
    <table className="grid rounded-t-lg table-fixed">
      <thead>
        <tr className="text-left bg-gradient-to-tr from-gray-900 to-gray-800 text-white shadow-md shadow-gray-900/10">
          <th className="w-20 p-2 sticky left-0 rounded-tl-xl">Titre</th>
          <th className="max-w-96 min-w-40 p-2 sticky left-[40px] w-fit">
            Type
          </th>
          {/* notice how we use left-[40px] because `w-10` equals 40px */}
          <th className="max-w-96 min-w-40 p-2 sticky left-[40px] w-fit">
            Lien
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
        {quests
          ? quests.map((item, index) => {
              return (
                <tr
                  key={index}
                  className="text-left even:bg-blue-gray-50/50 flex hover:bg-blue-gray-300"
                  onClick={() => handeRowClicked(item)}
                >
                  <td className="min-w-20 p-2 sticky left-0">{item.title}</td>
                  <td className="max-w-96 min-w-40 p-2 sticky left-[20px] flex w-fit items-center">
                    {item.type}
                  </td>
                  {/* notice how we use left-[40px] because `w-10` equals 40px */}
                  <td className="max-w-96 min-w-40 p-2 left-[60px] flex w-fit items-center">
                    {item.link}
                  </td>
                  <td className="max-w-96 min-w-20 p-2 left-[1000px] flex w-fit items-center"></td>
                  <td className="max-w-96 min-w-40 p-2 left-[120px] flex w-fit items-center gap-2"></td>
                  <td className="max-w-96 min-w-40 p-2 left-[160px] flex w-fit items-center">
                    Quest
                  </td>
                  <td className="max-w-96 min-w-40 p-2 left-[200px] flex w-fit items-center">
                    Success
                  </td>
                  <td className="max-w-96 min-w-40 p-2 left-[220px] flex w-fit items-center">
                    Mounts
                  </td>
                  <td className="max-w-96 min-w-20 p-2 left-[240px] flex w-fit items-center"></td>
                </tr>
              );
            })
          : ""}
      </tbody>
    </table>
  );
}
