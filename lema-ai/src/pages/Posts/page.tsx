import { useParams } from 'react-router-dom';
// import { AnimatePresence } from 'framer-motion';

import BackButton from '@/_module/components/BackButton';
import { PostDetailCard } from '@/_module/components/cards';
import AddNewPostCard from '@/_module/components/cards/AddNewPostCard';
import AddNewPostModal from '@/_module/components/dialogs/AddNewPostModal';
import routes from '@/_module/constants/routes';
import useDisclosure from '@/_module/hooks/useDisclosure';
import { RenderIf } from '@/_module/components/RenderIf';
import CardSkeleton from './_module/components/CardSkeleton';
import useGetPosts from './_module/hooks/useGetPosts';
import useDeletePost from './_module/hooks/useDeletePost';
import { showToast } from '@/_module/utils/show-toast';

const Posts = () => {
    const params = useParams();
    const userId = params.userId as string;

    const { isOpen, onOpen, onClose } = useDisclosure({
        newPostModal: false,
    });

    const { mutate /*isPending: deleteIsPending */ } = useDeletePost();
    const { data, isPending } = useGetPosts({ userId: userId });

    const handleDelete = (id: string) => {
        mutate(
            { id, userId },
            {
                onSuccess: () => {
                    showToast('Post deleted successfully', 'success');
                },
            }
        );
    };

    return (
        <div className="py-6">
            <header className="space-y-4 mb-6">
                <BackButton to={routes.dashboard.users.path} />
                <h5 className="text-primary-200 text-4xl font-medium leading-[43.57px] tracking-[-0.02em]">
                    James Sunderland
                </h5>
                <p className="text-primary-100 text-sm font-normal leading-5">
                    james.sunderland@acme.corp •{' '}
                    <span className="font-medium">
                        {data?.length ?? 0} Posts
                    </span>{' '}
                </p>
            </header>
            <section className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[23px] gap-y-6">
                <AddNewPostCard onOpen={() => onOpen('newPostModal')} />
                <RenderIf condition={(data ?? []).length > 0}>
                    {(data ?? []).map((post) => {
                        return (
                            <PostDetailCard
                                onDelete={() => handleDelete(post.id)}
                                key={post.id}
                                title={post.title}
                                content={post.body}
                            />
                        );
                    })}
                </RenderIf>
                <RenderIf condition={isPending}>
                    {Array.from({ length: 5 }, () => null).map((_, idx) => (
                        <CardSkeleton key={idx} />
                    ))}
                </RenderIf>
            </section>
            {isOpen.newPostModal && (
                <AddNewPostModal
                    isOpen={isOpen.newPostModal}
                    onClose={() => onClose('newPostModal')}
                />
            )}
        </div>
    );
};

export default Posts;
