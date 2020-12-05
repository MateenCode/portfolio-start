//React router
import { Route, Switch } from "react-router-dom";
// Components imports
import Layout from "./components/Common/Layout";
import Home from "./components/Home";

// CSS imports
import "./css/App.css";

const App = () => {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </Layout>
    </div>
  );
};

export default App;
