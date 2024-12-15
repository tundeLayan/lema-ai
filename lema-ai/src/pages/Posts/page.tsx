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
import useGetUserById from '../Users/_module/hooks/useGetUserById';
import { Skeleton } from '@/_module/components/ui/skeleton';
import classNames from 'classnames';

const Posts = () => {
    const params = useParams();
    const userId = params.userId as string;

    const { isOpen, onOpen, onClose } = useDisclosure({
        newPostModal: false,
    });

    const { data, isPending } = useGetPosts({ userId: userId });
    const { data: userData, isPending: userDataIsPending } =
        useGetUserById(userId);

    return (
        <div className="py-6">
            <header className="space-y-4 mb-6">
                <BackButton to={routes.dashboard.users.path} />
                <h5 className="text-primary-200 text-4xl font-medium leading-[43.57px] tracking-[-0.02em]">
                    {userDataIsPending ? (
                        <Skeleton className="h-[44px] w-8/12 md:w-4/12 rounded-sm" />
                    ) : (
                        userData?.name
                    )}
                </h5>
                <p
                    className={classNames(
                        'text-primary-100 text-sm font-normal leading-5',
                        {
                            'flex items-center gap-2': userDataIsPending,
                        }
                    )}
                >
                    {userDataIsPending ? (
                        <Skeleton className="h-[20px] w-8/12 md:w-3/12 rounded-sm mb-2 inline-block" />
                    ) : (
                        <>{userData?.email} • </>
                    )}
                    <span className="font-medium">
                        {data?.length ?? 0} Posts
                    </span>{' '}
                </p>
            </header>
            <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-[23px] gap-y-6">
                <AddNewPostCard onOpen={() => onOpen('newPostModal')} />
                <RenderIf condition={(data ?? []).length > 0}>
                    {(data ?? []).map((post) => {
                        return (
                            <PostDetailCard
                                key={post.id}
                                title={post.title}
                                content={post.body}
                                id={post.id}
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
