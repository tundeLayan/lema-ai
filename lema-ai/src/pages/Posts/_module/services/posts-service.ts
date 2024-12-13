import { getParams } from '@/_module/utils/get-param-util';
import { constructUrl } from '../../../../_module/utils/construct-url';
import { showToast } from '@/_module/utils/show-toast';
import { transformErrorResponse } from '@/_module/utils/transform-error-response';
import { axiosInstance } from '@/_module/services/axiosConfig';
import { posts } from '@/_module/services/endpoints';
import { TCreateNewPostPayload, TGetPostsResponse } from '../types/posts-types';

export const postsServices = {
    async getPosts(param: { userId: string }): Promise<TGetPostsResponse> {
        let params;

        if (param) {
            params = getParams<{ userId: string }>(param);
        }

        const url = params
            ? constructUrl(`${posts.getPosts}`, params)
            : posts.getPosts;

        try {
            const response = await axiosInstance.get<TGetPostsResponse>(url);
            return response.data;
        } catch (error) {
            showToast(transformErrorResponse(error)?.message, 'error');
            throw transformErrorResponse(error);
        }
    },
    async deletePost(params: {
        id: string;
        userId: string;
    }): Promise<TGetPostsResponse> {
        try {
            const response = await axiosInstance.delete<TGetPostsResponse>(
                `${posts.deletePost(params.id)}?userId=${params.userId}`
            );
            return response.data;
        } catch (error) {
            showToast(transformErrorResponse(error)?.message, 'error');
            throw transformErrorResponse(error);
        }
    },
    async createPost(
        payload: TCreateNewPostPayload & { userId: string }
    ): Promise<TGetPostsResponse> {
        try {
            const data = {
                title: payload.title,
                body: payload.body,
            };
            const response = await axiosInstance.post<TGetPostsResponse>(
                `${posts.addNewPost}?userId=${payload.userId}`,
                data
            );
            return response.data;
        } catch (error) {
            showToast(transformErrorResponse(error)?.message, 'error');
            throw transformErrorResponse(error);
        }
    },
};
