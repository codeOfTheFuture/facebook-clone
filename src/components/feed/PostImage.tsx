import { FC } from "react";

interface Props {
  postImage: string;
}

const PostImage: FC<Props> = ({ postImage }) => {
  return (
    <div className="flex bg-white dark:bg-gray-700">
      <img
        className="object-cover mb-4 object-center"
        width={"100%"}
        src={postImage}
        alt="post"
      />
    </div>
  );
};

export default PostImage;
