import React, { createContext, useState, useMemo, useEffect } from "react";
import { UserContextInterface, UserLog } from "../type/contextType/userType";
import { getUserById } from "../request/get";
import { getDataStorage } from "../request/storage";

const UserContext = createContext<UserContextInterface | null>(null);

function UserProvider({ children }: { children: React.ReactNode }) {
  const [userLog, setUserLog] = useState<UserLog | null>(null);

  const [isLoading, setIsLoading] = useState(true);

  const [reload, setReload] = useState(false);

  const props = useMemo(
    () => ({ userLog, setUserLog, reload, setReload, isLoading }),
    [userLog, isLoading]
  );

  useEffect(() => {
    const getUserData = async () => {
      const response = await getDataStorage();
      if (response) {
        await getUserById(parseInt(response.id), setUserLog);
      }
      setIsLoading(false);
    };
    getUserData();
  }, [reload]);

  return <UserContext.Provider value={props}>{children}</UserContext.Provider>;
}

export { UserProvider, UserContext };
