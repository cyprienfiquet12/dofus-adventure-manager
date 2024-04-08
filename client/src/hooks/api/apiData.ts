export type AuthData = {
    success: boolean,
    user: {
      id: number,
      email: string,
      name: string,
      haveActiveSubscription: boolean,
      auth_token: string,
    },
  };