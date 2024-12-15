import { addNewPostPayload } from '@/_module/components/dialogs/_module/types/add-new-post-modal-types';

export type TGetPostsResponse = {
    id: string;
    user_id: string;
    title: string;
    body: string;
    created_at: string;

    // pending when pagination is added
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
