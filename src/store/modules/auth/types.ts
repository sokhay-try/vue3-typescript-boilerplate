export interface IAuth {
  username: string;
  password: string;
}

export interface AuthState {
  auth?: IAuth;
  isAuthenticated: boolean;
}
