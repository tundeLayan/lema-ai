export const users = {
  getUsers: ``,
  getUsersCount: ``,
};

export const posts = {
  getPosts: (userId: string) => `//${userId}`,
  deletePost: (userId: string) => `//${userId}`,
  addNewPost: (userId: string) => `//${userId}`,
};
