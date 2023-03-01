import { FC } from "react";
import Stories from "./Stories";
import InputBox from "./InputBox";
import Posts from "./Posts";

const Feed: FC = () => {
  return (
    <div className="flex-grow h-screen pb-44 pt-6 overflow-y-auto scrollbar-hide">
      <div className="flex flex-col items-center mx-auto max-w-md md:max-w-lg lg:max-w-2xl">
        <Stories />
        <InputBox />
        <Posts />
      </div>
    </div>
  );
};

export default Feed;
