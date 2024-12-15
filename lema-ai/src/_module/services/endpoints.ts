export const users = {
    getUsers: `/users`,
    getUsersCount: `/users/count`,
    getUserById: (userId: string) => `/users/${userId}`,
};

export const posts = {
    getPosts: `/posts`,
    deletePost: (id: string) => `/posts/${id}`,
    addNewPost: `/posts`,
};
