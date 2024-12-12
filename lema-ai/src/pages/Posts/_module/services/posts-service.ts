import { getParams } from "@/_module/utils/get-param-util";
import { constructUrl } from "../../../../_module/utils/construct-url";
import { showToast } from "@/_module/utils/show-toast";
import { transformErrorResponse } from "@/_module/utils/transform-error-response";
import { axiosInstance } from "@/_module/services/axiosConfig";
import { posts } from "@/_module/services/endpoints";
import {
  TCreateNewPostPayload,
  TGetPostParams,
  TGetPostsResponse,
} from "../types/posts-types";

export const postsServices = {
  async getPosts(param: TGetPostParams): Promise<TGetPostsResponse> {
    let params;

    if (param) {
      params = getParams<TGetPostParams>(param);
    }
    const url = params
      ? constructUrl(`${posts.getPosts(param.id)}`, params)
      : posts.getPosts(param.id);

    try {
      const response = await axiosInstance.get<TGetPostsResponse>(url);
      return response.data;
    } catch (error) {
      showToast(transformErrorResponse(error)?.message, "error");
      throw transformErrorResponse(error);
    }
  },
  async deletePost(id: string): Promise<TGetPostsResponse> {
    try {
      const response = await axiosInstance.delete<TGetPostsResponse>(
        `${posts.deletePost(id)}`,
      );
      return response.data;
    } catch (error) {
      showToast(transformErrorResponse(error)?.message, "error");
      throw transformErrorResponse(error);
    }
  },
  async createPost(payload: TCreateNewPostPayload): Promise<TGetPostsResponse> {
    try {
      const response = await axiosInstance.post<TGetPostsResponse>(
        `${posts.addNewPost}`,
        payload,
      );
      return response.data;
    } catch (error) {
      showToast(transformErrorResponse(error)?.message, "error");
      throw transformErrorResponse(error);
    }
  },
};
