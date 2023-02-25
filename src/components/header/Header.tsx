import { FC } from "react";
import HeaderCenter from "./HeaderCenter";
import HeaderLeft from "./HeaderLeft";
import HeaderRight from "./HeaderRight";

const Header: FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5 shadow-md dark:bg-gray-700">
      <HeaderLeft />
      <HeaderCenter />
      <HeaderRight />
    </header>
  );
};

export default Header;
