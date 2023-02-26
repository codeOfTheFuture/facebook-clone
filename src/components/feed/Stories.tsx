import { FC } from "react";
import StoryCard from "./StoryCard";
import CreateStory from "./CreateStory";
import stories from "../../data/storiesData";
import { useAuth } from "../../context/AuthContext";

const Stories: FC = () => {
  const { photoURL } = useAuth();

  return (
    <div className="flex justify-center space-x-2 sm:space-x-1 w-auto mx-auto">
      <CreateStory src={photoURL} />
      {stories.map(story => (
        <StoryCard
          key={story.id}
          name={story.name}
          src={story.src}
          profile={story.profile}
        />
      ))}
    </div>
  );
};

export default Stories;
