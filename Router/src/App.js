import { Route, Switch, Redirect } from "react-router-dom";

import ClassroomA from "./pages/ClassroomA";
import ClassroomB from "./pages/ClassroomB";
import ClassroomC from "./pages/ClassroomC";
import Welcome from "./pages/Welcome";
import School from "./pages/School";
import Layout from "./layout/Layout";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Welcome />
        </Route>
        <Route path="/classroom" exact>
          <Redirect to="/classroomA" />
        </Route>
        <Route path="/classroomA">
          <ClassroomA />
        </Route>
        <Route path="/classroomB">
          <ClassroomB />
        </Route>
        <Route path="/classroomC">
          <ClassroomC />
        </Route>
        <Route path="/school/:schoolId">
          <School />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
