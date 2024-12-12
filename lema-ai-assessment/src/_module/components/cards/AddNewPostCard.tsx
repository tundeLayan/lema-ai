import React from "react";

import { PlusIcon } from "../icons";
import { TAddNewPostCardProps } from "./_module/types/post-card-types";

const AddNewPostCard = (props: TAddNewPostCardProps) => {
  const { onOpen } = props;
  return (
    <div
      role="button"
      onClick={onOpen}
      className="border border-dashed border-border-200 rounded-[8px] flex flex-col items-center justify-center cursor-pointer hover:opacity-85 gap-[10px] min-h-[293px]"
    >
      <PlusIcon />
      <p className="text-primary-300 text-sm font-semibold leading-5">
        New Post
      </p>
    </div>
  );
};

export default AddNewPostCard;
