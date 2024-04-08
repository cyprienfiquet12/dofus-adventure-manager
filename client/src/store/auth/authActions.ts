export enum AuthActionEnum {
    LOG_IN = 'LOG_IN',
    LOG_OUT = 'LOG_OUT',
  };
  
  export type AuthAction = {
    type: AuthActionEnum.LOG_IN,
    payload: {
      authToken: string;
      userId: number;
      email: string;
      name: string;
      haveActiveSubscription: boolean;
    }
  } | {
    type: AuthActionEnum.LOG_OUT,
    payload: null,
  }
  