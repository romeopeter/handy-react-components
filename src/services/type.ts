export type AuthContextValueShape = {
  auth: {
    isChecking?: boolean;
    user: Record<string, any> | null;
    token: null | string;
    isAuthenticated?: boolean;
  };
  setAuth: React.Dispatch<
    React.SetStateAction<{
      isChecking: boolean;
      isAuthenticated: boolean;
      user: null;
    }>
  >;
  removeToken: () => void;
  setToken: (value: any | ((val: any) => void)) => void;
};
