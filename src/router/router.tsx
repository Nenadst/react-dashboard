import { Route, Routes } from "react-router-dom";
import { routerPaths } from "./routerPaths";
import Test from "../domains/test/Test";
import Users from "../domains/users/Users";

const MainRouter = () => (
  <Routes>
    <Route path={routerPaths.ROOT} element={<Test />} />
    <Route path={routerPaths.USERS} element={<Users />} />
  </Routes>
);

export default MainRouter;
