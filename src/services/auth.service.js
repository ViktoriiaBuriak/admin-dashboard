export const authService = {
  login: async ({ email, password }) => {
    await new Promise((res) => setTimeout(res, 500));

    return {
      user: {
        id: 1,
        email,
        name: "Demo User",
      },
      token: "fake-token",
    };
  },
  logout: async () => {
    return true;
  },
};
