export const AUTHORIZATION_TYPES = {
  NONE: 'NONE',
  BASIC: 'BASIC',
  FULL: 'FULL',
};

const authProvider = {
  userOptions: {
    [AUTHORIZATION_TYPES.NONE]: {
      authorizationType: AUTHORIZATION_TYPES.NONE,
      name: 'John Doe (authorization=none)',
    },
    [AUTHORIZATION_TYPES.BASIC]: {
      authorizationType: AUTHORIZATION_TYPES.BASIC,
      name: 'Jane Doe (authorization=basic)',
    },
    [AUTHORIZATION_TYPES.FULL]: {
      authorizationType: AUTHORIZATION_TYPES.FULL,
      name: 'Joe Doe (authorization=full)',
    },
  },

  user: null,

  async signin(userOptionsKey) {
    await new Promise((resolve) => setTimeout(resolve, 500));
    this.user = this.userOptions[userOptionsKey];
  },

  async signout() {
    await new Promise((resolve) => setTimeout(resolve, 500));
    this.user = null;
  },
};

export default authProvider;
