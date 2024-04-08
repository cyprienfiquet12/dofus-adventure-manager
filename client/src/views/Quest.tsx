import { useContext, useEffect, useState } from "react";
import AuthContext from "../store/auth/AuthContextProvier";
import { Sidebar } from "../components/SideBar";
import { QuestsTable } from "../components/Quests/QuestsTable";
import { QuestsType } from "../types/Quests.type";
import axios, { AxiosError } from "axios";
export default function Quest() {
  const [quests, setQuests] = useState<QuestsType[] | undefined>();
  const { authState } = useContext(AuthContext);
  const [msg, setMsg] = useState("");

  useEffect(() => {
    getQuests();
  }, []);

  const getQuests = async () => {
    try {
      await axios
        .get(`http://localhost:4000/quests`, {
          headers: {
            Authorization: `Bearer ${authState.authToken}`,
          },
        })
        .then((response) => {
          setQuests(response.data);
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
    <div className="grid">
      <Sidebar />
      <div className="pt-32 grid justify-center ml-[20rem] overflow-visible">
        <div className="block  justify-self-center">
          <h1 className="text-3xl font-bold	">Les quêtes</h1>
        </div>
        <div className="block mt-6 justify-self-center"></div>
        <div className="block mt-6 justify-self-center max-w-7xl place-items-center rounded-t-lg">
          <QuestsTable quests={quests} />
        </div>
      </div>
    </div>
  );
}
