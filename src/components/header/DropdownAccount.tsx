import { FC } from "react";
import HeaderDropdownBtn from "./HeaderDropdownBtn";
import DropdownDisplay from "./DropdownDisplay";
import {
  AnnotationIcon,
  CogIcon,
  QuestionMarkCircleIcon,
  MoonIcon,
  LogoutIcon,
} from "@heroicons/react/solid";
import { ChevronRightIcon } from "@heroicons/react/outline";
import { useAuth } from "../../context/AuthContext";
import { useLocation, useNavigate } from "react-router-dom";

interface Props {
  dropdownOpen: boolean;
  displayOpen: () => void;
  displayOptionsOpen: boolean;
}

const DropdownAccount: FC<Props> = props => {
  const { dropdownOpen, displayOpen, displayOptionsOpen } = props;
  const { user, photoURL, logOut } = useAuth();

  const navigate = useNavigate();
  const location: any = useLocation();

  const from = location.state?.from.pathname || "/login";
  // Log out

  const handleLogOut = async (): Promise<void> => {
    try {
      await logOut();
      console.log("navigate to login");
    } catch (error) {
      console.log(error);
    }
    navigate(from, { replace: true });
  };

  return (
    <div
      className={`absolute transition-all ease-in-out duration-200 opacity-0 top-10 right-0 mt-2 p-2 border border-gray-200 bg-white rounded-lg overflow-x-hidden shadow-lg pointer-events-none dark:bg-gray-700 dark:border-gray-700 ${
        dropdownOpen && "opacity-100 pointer-events-auto"
      }`}>
      <div className="relative">
        {user?.displayName && (
          <HeaderDropdownBtn
            className="dropdownProfileBtn"
            img={photoURL}
            heading={user?.displayName}
            text="See your profile"
          />
        )}
        <hr />
        <HeaderDropdownBtn
          className="dropdownFeedbackBtn"
          Icon={AnnotationIcon}
          heading="Give feedback"
          text="Help us improve the new Facebook"
        />
        <hr />
        <HeaderDropdownBtn
          className="dropdownBtn"
          Icon={CogIcon}
          SecondaryIcon={ChevronRightIcon}
          heading="Settings & Privacy"
        />
        <HeaderDropdownBtn
          className="dropdownBtn"
          Icon={QuestionMarkCircleIcon}
          SecondaryIcon={ChevronRightIcon}
          heading="Help & Support"
        />
        <HeaderDropdownBtn
          className="dropdownBtn"
          Icon={MoonIcon}
          SecondaryIcon={ChevronRightIcon}
          heading="Display & Accessibility"
          clickHandler={displayOpen}
        />
        <HeaderDropdownBtn
          className="dropdownBtn"
          Icon={LogoutIcon}
          heading="Log Out"
          clickHandler={handleLogOut}
        />
      </div>
      <DropdownDisplay
        displayOptionsOpen={displayOptionsOpen}
        clickHandler={displayOpen}
      />
    </div>
  );
};

export default DropdownAccount;
