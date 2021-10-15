import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import AppRoutes from "./routes"
import Datatable from "./components/Datatable";
import { ServersProvider } from "./context/ServersContext";
import { useReducer } from "react";
const App = () => {

  return (
    <ServersProvider>
      <Router>
        <Switch>

          {AppRoutes.map((route, key) => {
          const { component, path } = route;
          const Component = component;

          return (
            <Route
              exact={true}
              path={path}
              key={key}
              render={Component}
            />
          )
        })}
        </Switch>
      </Router>
      
    </ServersProvider>

  )
}

export default App;
