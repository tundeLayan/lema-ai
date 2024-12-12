import { useState } from "react";

import { v4 as uuidv4 } from "uuid";
// import { AnimatePresence } from 'framer-motion';

import BackButton from "@/_module/components/BackButton";
import { PostDetailCard } from "@/_module/components/cards";
import AddNewPostCard from "@/_module/components/cards/AddNewPostCard";
import AddNewPostModal from "@/_module/components/dialogs/AddNewPostModal";
import routes from "@/_module/constants/routes";
import useDisclosure from "@/_module/hooks/useDisclosure";
import { RenderIf } from "@/_module/components/RenderIf";
import CardSkeleton from "./_module/components/CardSkeleton";

const Posts = () => {
  const { isOpen, onOpen, onClose } = useDisclosure({
    newPostModal: false,
  });
  const [posts, setPosts] = useState([1, 2, 3, 4, 5]);
  const isPending = false;

  const handleDelete = (/*id?: string*/) => {
    const newArr = posts.slice(0, -1);
    setPosts(newArr);
  };
  return (
    <div className="py-6">
      <header className="space-y-4 mb-6">
        <BackButton to={routes.dashboard.users.path} />
        <h5 className="text-primary-200 text-4xl font-medium leading-[43.57px] tracking-[-0.02em]">
          James Sunderland
        </h5>
        <p className="text-primary-100 text-sm font-normal leading-5">
          james.sunderland@acme.corp •{" "}
          <span className="font-medium">{posts.length} Posts</span>{" "}
        </p>
      </header>
      <section className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[23px] gap-y-6">
        <AddNewPostCard onOpen={() => onOpen("newPostModal")} />
        <RenderIf condition={posts.length > 0}>
          {/* <ul>
                      <AnimatePresence
                          initial={false}
                          mode="popLayout"
                      > */}
          {posts.map(() => {
            const id = uuidv4();
            return <PostDetailCard onDelete={() => handleDelete()} key={id} />;
          })}
          {/* </AnimatePresence>
                  </ul> */}
        </RenderIf>
        <RenderIf condition={posts.length === 0 && isPending}>
          {Array.from({ length: 5 }, () => null).map(() => (
            <CardSkeleton />
          ))}
        </RenderIf>
      </section>
      {isOpen.newPostModal && (
        <AddNewPostModal
          isOpen={isOpen.newPostModal}
          onClose={() => onClose("newPostModal")}
          onHandleSubmit={() => setPosts((prev) => [...prev, 1])}
        />
      )}
    </div>
  );
};

export default Posts;
