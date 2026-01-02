export const authService = {
  login: async ({ email, password }) => {
    await new Promise((res) => setTimeout(res, 500));

    const rawName = email.split("@")[0];
    const nameFromEmail = rawName.charAt(0).toUpperCase() + rawName.slice(1);

    return {
      user: {
        id: email,
        email,
        name: nameFromEmail,
      },
      token: "fake-token",
    };
  },
  logout: async () => {
    return true;
  },
};
