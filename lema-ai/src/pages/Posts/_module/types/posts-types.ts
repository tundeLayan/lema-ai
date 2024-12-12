import { addNewPostPayload } from '@/_module/components/dialogs/_module/types/add-new-post-modal-types';

export type TGetPostsResponse = {
    userId: string;
    data: Array<TPostData>;
    next_page: number;
};

export type TPostData = {
    title: string;
    content: string;
    id: string;
};

export type TGetPostParams = {
    page: number;
    limit: number;
    id: string;
    next_page: number;
};

export type TCreateNewPostPayload = addNewPostPayload;
