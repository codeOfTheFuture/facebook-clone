import { FC } from "react";
import Header from "../components/header/Header";
import Main from "../components/Main";
import { useAuth } from "../context/AuthContext";

const Home: FC = () => {
  const { darkModeEnabled } = useAuth();

  return (
    <div
      className={`h-screen bg-gray-100 overflow-hidden ${
        darkModeEnabled && "dark"
      }`}>
      <Header />
      <Main />
    </div>
  );
};
export default Home;
