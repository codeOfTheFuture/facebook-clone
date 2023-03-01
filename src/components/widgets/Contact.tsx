import { FC } from "react";

interface Props {
  src: string;
  name: string;
}

const Contact: FC<Props> = ({ src, name }) => {
  return (
    <div className="relative flex items-center space-x-4 mb-4 p-2 rounded-xl cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-600 dark:text-gray-200">
      <div className="rounded-full w-14 h-14">
        <img
          className="rounded-full object-cover w-full h-full"
          src={src}
          alt={`Contact-${name}`}
        />
      </div>
      <p>{name}</p>
      <div className="absolute bottom-2 left-7 bg-green-400 h-3 w-3 rounded-full" />
    </div>
  );
};

export default Contact;
