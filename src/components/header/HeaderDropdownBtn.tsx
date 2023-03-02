import { FC } from "react";

interface HeaderDropdownButtonProps {
  className: string;
  img?: string;
  Icon?: any;
  SecondaryIcon?: any;
  heading: string;
  text?: string;
  clickHandler?: () => void;
}

const HeaderDropdownBtn: FC<HeaderDropdownButtonProps> = ({
  className,
  img,
  Icon,
  SecondaryIcon,
  heading,
  text,
  clickHandler,
}) => {
  return (
    <div className={className} onClick={clickHandler}>
      <div className="flex items-center">
        <div className="ml-2">
          {img && <img src={img} alt="" className="rounded-full" width={50} />}
          {Icon && (
            <Icon className="h-10 w-10 p-2 rounded-full bg-gray-100 dark:bg-gray-500" />
          )}
        </div>
        <div className="ml-4">
          <p className="font-bold text-sm">{heading}</p>
          <p className="text-sm">{text}</p>
        </div>
      </div>

      {SecondaryIcon && (
        <div className="mr-2">
          <SecondaryIcon width="20px" height="20px" />
        </div>
      )}
    </div>
  );
};

export default HeaderDropdownBtn;
