import {
  useState,
  useEffect,
  Dispatch,
  SetStateAction,
  useContext,
} from "react";
import axios from "axios";
import AuthContext from "../../store/auth/AuthContextProvier";
import { Sidebar } from "../SideBar";

interface MyToken {
  name: string;
  exp: number;
  // whatever else is in the JWT.
}

interface Users {
  id: string;
  name: string;
  email: string;
  password: string;
}

const Dashboard = ({
  user,
  setUser,
}: {
  user: any;
  setUser: Dispatch<SetStateAction<undefined>>;
}) => {
  const [users, setUsers] = useState<Users[] | null>();
  const { authState } = useContext(AuthContext);

  const getUsers = async () => {
    try {
      const response = await axios.get("http://localhost:4000/users", {
        headers: {
          Authorization: `Bearer ${authState.authToken}`,
        },
      });
      setUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <Sidebar />
      <div className="container mt-5">
        <h1>Welcome Back: {authState.name} </h1>
        <table className="table is-striped is-fullwidth">
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {users &&
              users.map((user, index) => (
                <tr key={user.id}>
                  <td> {index + 1} </td>
                  <td> {user.name}</td>
                  <td> {user.email}</td>
                </tr>
              ))}
          </tbody>
        </table>
        {authState.haveActiveSubscription ? (
          <div className="flex justify-center align-middle">
            {" "}
            <h1 className="text-xxl">T ABONNE BG</h1>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default Dashboard;
