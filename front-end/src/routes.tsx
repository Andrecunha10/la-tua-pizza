import { Route, Routes as RDRoutes } from "react-router-dom";
import { HomeView } from "./views/home";
import { LoginView } from "./views/login";
import { NotFoundView } from "./views/notfound";

export function Routes () {
  return (
    <RDRoutes>
      <Route path='/' element={<HomeView />} />
      <Route path="/login" element={<LoginView/>} />
      <Route path="/*" element={<NotFoundView />} />
    </RDRoutes>
  )
}