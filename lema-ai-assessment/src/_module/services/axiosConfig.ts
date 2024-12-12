import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
    timeout: 1000 * 60 * 2,
    timeoutErrorMessage: 'Request timed out',
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
    },
});

axiosInstance.interceptors.request.use(
    async (config) => {
        return config;
    },
    (err) => {
        throw new Error(err);
    }
);
axiosInstance.interceptors.response.use(
    function (response) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        return response;
    },
    function (error) {
        // Unauthorized
        if (error.response.status === 401) {
            // logout().then(() => {
            //   setTimeout(() => {
            //     const smartRedirectPath = window.location.pathname || '';
            //     window.location.href = `/login?redirect=${smartRedirectPath}`;
            //   }, 500);
            // });
        }
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        return Promise.reject(error);
    }
);
