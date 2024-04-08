// Global dependencies
import { useState, useCallback, useContext } from "react";

// Project dependencies
import AuthContext from "../../store/auth/AuthContextProvier";
import axios, { AxiosError } from "axios";

const BASE_URL = "http://localhost:4000";

const useApi = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { authState, globalLogOutDispatch } = useContext(AuthContext);

  const request = useCallback(
    async (
      endpoint: string,
      params: { [key: string]: any },
      handleSuccessResponse: (data: any) => void,
      handleErrorResponse?: (error: string) => void
    ) => {
      setLoading(true);
      setError(null);

      try {
        // NOTE: If user is logged in, insert the auth token into request headers for authorization
        if (authState.isLoggedIn) {
          params.headers["x-access-token"] = authState.authToken;
        }
        const response: any = await axios.post(BASE_URL + endpoint, { ...params });
        if (!response) {
          const data = await response;
          console.log(response)
          handleErrorResponse && handleErrorResponse(response.message || response.error || response.data.msg ); // Assume always json response
          throw new AxiosError(data);
        }
        const data = await response; // Assume always json response
        let dataToReturn = {
            success: true,
            user: {
                id: data.data.userToReturn.id,
                email: data.data.userToReturn.email,
                name: data.data.userToReturn.name,
                haveActiveSubscription: data.data.haveActiveSubscription,
                auth_token: data.data.refreshToken,
            },
        }
        // If response is okay and no errors, then successful request
        handleSuccessResponse && (await handleSuccessResponse(dataToReturn));
      } catch (error: any) {
        // NOTE: If it's unauthorized error, then we will auto log user out
        if (error && error.message && error.message === "Unauthorized") {
          globalLogOutDispatch();
        }
        // Handle error if specified
        if (handleErrorResponse) {
          if(error instanceof AxiosError){
            handleErrorResponse(error.response?.data.msg);
          }else{
          handleErrorResponse(error.message || error.error || error);
          }
        } else {
          setError(error.message || error.error || error);
        }
      }
      setLoading(false);
    },

    [authState.isLoggedIn, authState.authToken, globalLogOutDispatch]
  );

  return {
    loading: loading,
    error: error,
    request: request,
    setError: setError,
  };
};

export default useApi;