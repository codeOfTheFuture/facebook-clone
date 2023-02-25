import { FC } from "react";
import { SearchIcon } from "@heroicons/react/solid";

const HeaderLeft: FC = () => {
  return (
    <div className="flex items-center">
      <img
        src="https://links.papareact.com/5me"
        alt="Facebook header logo"
        width={40}
        height={40}
      />

      <div
        className="flex ml-2 items-center rounded-full bg-gray-100 p-2 dark:bg-gray-600"
        data-test="component-header-search">
        <SearchIcon className="h-6 text-gray-600 dark:text-gray-200" />

        <input
          className="hidden md:inline-flex ml-2 items-center bg-transparent outline-none placeholder-gray-500 flex-shrink dark:placeholder-gray-200"
          type="text"
          placeholder="Search Facebook"
          data-test="component-header-input"
        />
      </div>
    </div>
  );
};

export default HeaderLeft;
