import { FC } from "react";
import Reaction from "./Reaction";

import Like from "../../assets/reactions/like.gif";
import Heart from "../../assets/reactions/heart.gif";
import Haha from "../../assets/reactions/haha.gif";
import Wow from "../../assets/reactions/wow.gif";
import Sad from "../../assets/reactions/sad.gif";
import Angry from "../../assets/reactions/angry.gif";

interface Props {
  likeButtonHover: boolean;
  addReaction: () => Promise<void>;
  likeButtonEnter: () => void;
  likeButtonLeave: () => void;
}

const Reactions: FC<Props> = ({
  likeButtonHover,
  addReaction,
  likeButtonEnter,
  likeButtonLeave,
}) => {
  return (
    <div
      className={`flex items-center absolute transform translate-y-0 opacity-0 bottom-0 left-0 bg-white dark:bg-gray-600 rounded-2xl border transition-transform ease-out delay-300 duration-500 ${
        likeButtonHover && "transform -translate-y-10 opacity-100"
      }`}
      onMouseEnter={() => likeButtonEnter()}
      onMouseLeave={() => likeButtonLeave()}>
      <Reaction reaction={Like} reactionType="like" addReaction={addReaction} />
      <Reaction
        reaction={Heart}
        reactionType="heart"
        addReaction={addReaction}
      />
      <Reaction reaction={Haha} reactionType="haha" addReaction={addReaction} />
      <Reaction reaction={Wow} reactionType="wow" addReaction={addReaction} />
      <Reaction reaction={Sad} reactionType="sad" addReaction={addReaction} />
      <Reaction
        reaction={Angry}
        reactionType="angry"
        addReaction={addReaction}
      />
    </div>
  );
};

export default Reactions;
