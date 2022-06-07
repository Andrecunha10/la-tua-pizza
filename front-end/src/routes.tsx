import { Route, Routes as RDRoutes } from "react-router-dom";
import { LoadingUser } from "./components/loadinguser";
import { HomeView } from "./views/home";
import { LoginView } from "./views/login";
import { MenuView } from "./views/menu";
import { NotFoundView } from "./views/notfound";

export function Routes () {
  return (
    <RDRoutes>
      <Route 
        path='/' 
        element={
          <LoadingUser>
            <HomeView />
          </LoadingUser>
        }
      />
      <Route 
        path="/login" 
        element={
          <LoadingUser>
            <LoginView/>
          </LoadingUser>
        }
      />
      <Route 
        path="/cardapio" 
        element={
          <LoadingUser>
            <MenuView />
          </LoadingUser>
        }
      />
      <Route path="/*" 
        element={
          <LoadingUser>
            <NotFoundView />
          </LoadingUser>
        }
      />
    </RDRoutes>
  )
}