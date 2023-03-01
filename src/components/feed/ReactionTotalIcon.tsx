import { FC } from "react";
import { DocumentData } from "firebase/firestore";

interface Props {
  reaction: DocumentData[];
  src: string;
}

const ReactionTotalIcon: FC<Props> = ({ reaction, src }) => {
  return (
    <div className="rounded-full">
      {reaction.length > 0 && (
        <img
          src={`/images/reactions/${src}`}
          alt="Like count"
          className="rounded-full m-0 p-0 border-none cursor-pointer"
          width={20}
          height={20}
        />
      )}
    </div>
  );
};

export default ReactionTotalIcon;
