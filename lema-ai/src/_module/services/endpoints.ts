export const users = {
    getUsers: `/users`,
    getUsersCount: `/users/count`,
};

export const posts = {
    getPosts: `/posts`,
    deletePost: (id: string) => `/posts/${id}`,
    addNewPost: `/posts`,
};
