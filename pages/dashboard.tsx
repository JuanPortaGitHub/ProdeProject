import type { NextPage } from "next";
import { useAuth } from "../context/AuthContext";
import { getCurrentUser } from "../firebase/users";

const Dashboard: NextPage = () => {
  const { user, logout } = useAuth();

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Bienvenido: {user.displayName} - {user.email}
        </p>
      </header>
      <button onClick={logout}>LogOut</button>
      <button onClick={getCurrentUser}>UserData</button>
      <p>This is a protected Route</p>
    </div>
  );
};

export default Dashboard;
