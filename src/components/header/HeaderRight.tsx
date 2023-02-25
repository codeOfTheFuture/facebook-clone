import { FC, useRef, useState } from "react";
import Dropdown from "./Dropdown";
import HeaderIcon from "./HeaderIcon";
import {
  BellIcon,
  ChatIcon,
  ChevronDownIcon,
  MenuIcon,
  ViewGridIcon,
} from "@heroicons/react/solid";
import useClickOutside from "../../hooks/useClickOutside";
import HeaderProfileBtn from "./HeaderProfileBtn";

const HeaderRight: FC = () => {
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);

  const dropDownRef = useRef<HTMLDivElement>(null);

  const handleClick = (): void => {
    setDropdownOpen(prevState => !prevState);
  };

  useClickOutside(dropDownRef, (): void => {
    setDropdownOpen(false);
  });

  return (
    <div
      className="flex items-center sm:space-x-2 justify-end"
      data-test="component-header-right">
      <HeaderIcon
        Icon={MenuIcon}
        iconClassName={"menuIcon"}
        iconContainerClassName={"menuIconContainer"}
        tooltipClassName={"toolTipCenter"}
        toolTipName={"Home"}
      />

      <HeaderProfileBtn />

      <HeaderIcon
        Icon={ViewGridIcon}
        iconClassName={"headerIconRight"}
        toolTipName={"Menu"}
      />
      <HeaderIcon
        Icon={ChatIcon}
        iconClassName={"headerIconRight"}
        toolTipName={"Messenger"}
      />
      <HeaderIcon
        Icon={BellIcon}
        iconClassName={"headerIconRight"}
        toolTipName={"Notifications"}
      />

      <Dropdown
        Icon={ChevronDownIcon}
        handleClick={handleClick}
        dropDownRef={dropDownRef}
        dropdownOpen={dropdownOpen}
      />
    </div>
  );
};

export default HeaderRight;
