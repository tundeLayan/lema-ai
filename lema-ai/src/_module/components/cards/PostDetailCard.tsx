import { useParams } from 'react-router-dom';

import { TPostCardProps } from './_module/types/post-card-types';
import useDeletePost from '@/pages/Posts/_module/hooks/useDeletePost';
import { TrashIcon } from '../icons/trashIcon';
import Spinner from '../Loader/spinner';
import { showToast } from '@/_module/utils/show-toast';
import classNames from 'classnames';

// TODO: Remove partial
const PostDetailCard = (props: TPostCardProps) => {
    const params = useParams();
    const userId = params.userId as string;
    const { mutate, isPending: deleteIsPending } = useDeletePost();
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
    const {
        title = 'I Got a Letter',
        content = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dol...`,
    } = props;
    return (
        <div className="shadow-custom-primary border border-border-200 rounded-[8px] p-6 relative text-primary-100 min-h-[293px]">
            <h5 className="text-lg font-medium leading-5 mb-4">{title}</h5>
            <p className="text-sm font-normal leading-5">{content}</p>
            <span
                className={classNames(
                    'absolute top-[10px] right-[10px] cursor-pointer rounded-[4px]  p-[6px]',
                    {
                        'hover:bg-red-10': !deleteIsPending,
                    }
                )}
            >
                {deleteIsPending ? (
                    <div className="">
                        <Spinner />
                    </div>
                ) : (
                    <TrashIcon
                        className=""
                        onClick={() => handleDelete?.(props.id!)}
                    />
                )}
            </span>
        </div>
    );
};

export default PostDetailCard;
