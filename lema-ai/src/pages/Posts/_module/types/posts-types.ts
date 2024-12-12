import { addNewPostPayload } from '@/_module/components/dialogs/_module/types/add-new-post-modal-types';

export type TGetPostsResponse = {
    id: string;
    next_page: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data: Array<any>;
};

export type TGetPostParams = {
    page: number;
    limit: number;
    id: string;
    next_page: string;
};

export type TCreateNewPostPayload = addNewPostPayload;
