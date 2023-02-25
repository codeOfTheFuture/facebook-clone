import { ComponentType, FC, SVGProps, useState } from "react";
import DropdownAccount from "./DropdownAccount";
import HeaderIcon from "./HeaderIcon";

interface Props {
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
  handleClick: () => void;
  dropDownRef: any;
  dropdownOpen: boolean;
}

const Dropdown: FC<Props> = props => {
  const { Icon, handleClick, dropDownRef, dropdownOpen } = props;
  const [displayOptionsOpen, setDisplayOptionsOpen] = useState(false);

  const displayOpen = (): void => {
    setDisplayOptionsOpen(prevState => !prevState);
  };

  return (
    <div className="relative" ref={dropDownRef}>
      <HeaderIcon
        Icon={Icon}
        iconClassName={"headerIconRight"}
        toolTipName={"Account"}
        handleClick={handleClick}
        dropdownOpen={dropdownOpen}
      />
      <DropdownAccount
        dropdownOpen={dropdownOpen}
        displayOpen={displayOpen}
        displayOptionsOpen={displayOptionsOpen}
      />
    </div>
  );
};

export default Dropdown;
