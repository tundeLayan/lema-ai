import { getParams } from '@/_module/utils/get-param-util';
import { constructUrl } from '../../../../_module/utils/construct-url';
import { showToast } from '@/_module/utils/show-toast';
import { transformErrorResponse } from '@/_module/utils/transform-error-response';
import { axiosInstance } from '@/_module/services/axiosConfig';
import { users } from '@/_module/services/endpoints';
import {
    TGetUsersParams,
    TGetUsersResponse,
    TUsersData,
} from '../types/users-types';

export const userService = {
    async getUsers(param: TGetUsersParams): Promise<TUsersData> {
        let params;

        if (param) {
            params = getParams<TGetUsersParams>(param);
        }
        const url = params
            ? constructUrl(`${users.getUsers}`, params)
            : users.getUsers;

        try {
            const response = await axiosInstance.get<TUsersData>(url);
            return response.data;
        } catch (error) {
            showToast(transformErrorResponse(error)?.message, 'error');
            throw transformErrorResponse(error);
        }
    },
    async getUserCount(): Promise<{ count: number }> {
        const url = users.getUsersCount;
        try {
            const response = await axiosInstance.get<{ count: number }>(url);
            return response.data;
        } catch (error) {
            showToast(transformErrorResponse(error)?.message, 'error');
            throw transformErrorResponse(error);
        }
    },
    async getUserById(userId: string): Promise<TGetUsersResponse> {
        const url = users.getUserById(userId);
        try {
            const response = await axiosInstance.get<TGetUsersResponse>(url);
            return response.data;
        } catch (error) {
            showToast(transformErrorResponse(error)?.message, 'error');
            throw transformErrorResponse(error);
        }
    },
};
