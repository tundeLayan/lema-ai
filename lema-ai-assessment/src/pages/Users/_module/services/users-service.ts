import { getParams } from '@/_module/utils/get-param-util';
import { constructUrl } from '../../../../_module/utils/construct-url';
import { showToast } from '@/_module/utils/show-toast';
import { transformErrorResponse } from '@/_module/utils/transform-error-response';
import { axiosInstance } from '@/_module/services/axiosConfig';
import { users } from '@/_module/services/endpoints';
import { TGetUsersParams, TGetUsersResponse } from '../types/users-types';

export const userService = {
    async getUsers(param: TGetUsersParams): Promise<TGetUsersResponse> {
        let params;

        if (param) {
            params = getParams<TGetUsersParams>(param);
        }
        const url = params
            ? constructUrl(`${users.getUsers}`, params)
            : users.getUsers;

        try {
            const response = await axiosInstance.get<TGetUsersResponse>(url);
            return response.data;
        } catch (error) {
            showToast(transformErrorResponse(error)?.message, 'error');
            throw transformErrorResponse(error);
        }
    },
};
