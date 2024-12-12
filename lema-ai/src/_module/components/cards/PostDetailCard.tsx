// import { motion } from 'framer-motion';

import { TPostCardProps } from './_module/types/post-card-types';
import { TrashIcon } from '../icons/trashIcon';

// TODO: Remove partial
const PostDetailCard = (props: Partial<TPostCardProps>) => {
    const {
        title = 'I Got a Letter',
        content = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dol...`,
        onDelete,
        id,
    } = props;
    return (
        <div className="shadow-custom-primary border border-border-200 rounded-[8px] p-6 relative text-primary-100 min-h-[293px]">
            <h5 className="text-lg font-medium leading-5 mb-4">{title}</h5>
            <p className="text-sm font-normal leading-5">{content}</p>
            <span className="absolute top-[10px] right-[10px] cursor-pointer rounded-[4px] hover:bg-red-10 p-[6px]">
                <TrashIcon
                    className=""
                    onClick={() => onDelete?.(id!)}
                />
            </span>
        </div>
    );
};

export default PostDetailCard;
