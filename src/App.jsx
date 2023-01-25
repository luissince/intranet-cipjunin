import {
  Routes as Switch,
  Route,
  Navigate
} from "react-router-dom";

import { useSelector } from 'react-redux';
import Load from './views/load/Load';
import Login from './views/login/Login';
import NotFound from './views/pages/NotFound';
import Welcome from './views/welcome/Welcome';
import Dashboard from './views/dashboard/Dashboard';
import Inicio from './views/inicio/Inicio';
import Menu from "./components/layout/menu";
import Header from "./components/layout/header";

function App() {

  const state = useSelector((state) => state.authentication);

  return (
    <>
      {
        state.loading ?
          <Load />
          :
          !state.authentication ? (
            <Switch>
              <Route path="*" element={<NotFound />} />
              <Route path="/" exact element={<Login />} />
            </Switch>
          ) :
            (
              <div className='app'>

                <Menu />

                <main>
                  <Header />

                  <div className="container-fluid mt-3">
                    <div className="bg-white p-3 border border-light-purple rounded position-relative">
                      <Switch>

                        <Route
                          path={"/"}
                          exact={true}
                          element={<Navigate to={"/inicio"} />}
                        />

                        <Route
                          path="/inicio/*"
                          element={<Inicio />}
                        />

                        <Route
                          path="/welcome"
                          element={<Welcome />}
                        />

                        <Route
                          path="/dashboard"
                          element={<Dashboard />}
                        />

                        <Route
                          path='*'
                          element={<NotFound />}
                        />
                      </Switch>
                    </div>
                  </div>
                </main>
              </div>
            )
      }
    </>
  )
}

export default App
