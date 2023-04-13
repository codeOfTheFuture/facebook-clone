import Header from "../components/header/Header";
import Main from "../components/Main";
import { useAuth } from "../context/AuthContext";

const Home = () => {
  const { user, darkModeEnabled } = useAuth();

  console.log("User in homepage", user);

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
