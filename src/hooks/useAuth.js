import { useMemo } from "react";
import { useSelector } from "react-redux";
import { selectIsAuthenticated } from "../store/selectors";

export const useAuth = () => {
  const user = useSelector(selectIsAuthenticated);

  return useMemo(() => user, [user]);
};