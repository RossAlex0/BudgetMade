export interface UserLog {
  id: string;
  name: string;
  email: string;
  password?: string;
  salary: string | number | null;
  theme: string;
  token: string;
}

export interface UserContextInterface {
  userLog: UserLog | null;
  setUserLog: (userLog: UserLog | null) => void;
  reload: boolean;
  setReload: (reaload: boolean) => void;
  isLoading: boolean;
}
