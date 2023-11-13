import { Navigate, Route, Routes } from "react-router-dom";
import routes from "./routesList";
import { Notfound } from "../pages";
import { useMemo } from "react";
import { useAuth } from "../hooks";
import { Notification } from "../components";
// import { Notification } from "../components";

export const Router = () => {
  const user = useAuth().user
  const matchRoutes = useMemo(() => {
    console.log("routes recreate")
    if(user?.key && user?.secret) {
      return routes.priviteLinks
    } else {
      return routes.publicLinks
    }
  }, [user])

  console.log("user revalidate")


  return (
    <>
    <Routes>
      {(user ? routes.priviteLinks:routes.publicLinks).map((item) =>
        
          <Route
            path={item.path}
            key={item.path}
            element={
                <item.component />
            }
          />
      )}
      <Route
        path="/"
        element={<Navigate to={matchRoutes[0].path ? matchRoutes[0].path : "/"} />}
      />
      <Route path="*" element={<Notfound />} />
    </Routes>
      <Notification />
    </>
  );
};