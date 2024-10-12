import React, { createContext, useState, useMemo, useEffect } from "react";
import { UserContextInterface, UserLog } from "../type/contextType/userType";
import { getUserById } from "../request/get";

const UserContext = createContext<UserContextInterface | null>(null);

function UserProvider({ children }: { children: React.ReactNode }) {
  const [userLog, setUserLog] = useState<UserLog | null>(null);
  const [userId, setUserId] = useState<number | undefined>();

  const props = useMemo(() => ({ userLog, setUserLog, setUserId }), [userLog]);
  useEffect(() => {
    if (userId) {
      getUserById(userId, setUserLog);
    }
  }, [userId]);

  return <UserContext.Provider value={props}>{children}</UserContext.Provider>;
}

export { UserProvider, UserContext };
