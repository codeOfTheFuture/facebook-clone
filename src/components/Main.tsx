import { FC } from "react";
import Sidebar from "./sidebar/Sidebar";
import Feed from "./feed/Feed";
// import Widgets from "./Widgets";

const Main: FC = () => {
  return (
    <main
      className="flex justify-between dark:bg-gray-800"
      data-test="component-main">
      <Sidebar />
      <Feed />
      {/* <Widgets /> */}
    </main>
  );
};

export default Main;
