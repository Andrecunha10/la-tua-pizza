import { Route, Routes as RDRoutes } from "react-router-dom";
import { LoadingUser } from "./components/loadinguser";
import { FinalizeOrderView } from "./views/finalizeorder";
import { HomeView } from "./views/home";
import { LoginView } from "./views/login";
import { MenuView } from "./views/menu";
import { NotFoundView } from "./views/notfound";
import { OrderSuccessView } from "./views/ordersuccess";
import { CartView } from "./views/pagecart";

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
      <Route 
        path="/carrinho" 
        element={
          <LoadingUser>
            <CartView />
          </LoadingUser>
        }
      />
      <Route 
        path="/finalizar-pedido" 
        element={
          <LoadingUser>
            <FinalizeOrderView />
          </LoadingUser>
        }
      />
      <Route 
        path="/pedido-sucesso" 
        element={
          <LoadingUser>
            <OrderSuccessView />
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