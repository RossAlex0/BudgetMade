export interface UserLog {
  id: number;
  name: string;
  email: string;
  password: string;
  salary: string | number | null;
  theme: string;
}

export interface UserContextInterface {
  userLog: UserLog | null;
  setUserLog: (userLog: UserLog | null) => void;
  setUserId: (state: number) => void;
}
