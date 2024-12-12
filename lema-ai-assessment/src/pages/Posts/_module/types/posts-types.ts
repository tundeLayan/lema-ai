import { addNewPostPayload } from '@/_module/components/dialogs/_module/types/add-new-post-modal-types';

export type TGetPostsResponse = {
    id: string;
};

export type TGetPostParams = {
    page: number;
    limit: number;
    id: string;
};

export type TCreateNewPostPayload = addNewPostPayload;
