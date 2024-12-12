const routes = {
  home: {
    path: "/",
  },

  dashboard: {
    path: "/dashboard",
    users: {
      path: `/dashboard/users`,
    },
    posts: {
      path: `/dashboard/users/:userId/posts`,
      routablePath: (userId: string) => `/dashboard/users/${userId}/posts`,
    },
  },
};

export default routes;
