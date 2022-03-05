import Main from "./components/Main";
import { Switch,Link,Route } from "react-router-dom";

import NewSession from "./components/NewSession";
import Chooser from "./components/Chooser"
import Cheecker from "./components/Cheecker";
import ExistingSession from "./components/ExistingSession";
function App() {
  return (
    <div className="bg-red-400 h-screen">
      <header className="App-header">
        <h3 className="text-center">App</h3>
        <ul className="flex m-16 justify-center">
          <li className="font-serif text-blue-300 underline m-4"><Link to = "/">App</Link></li>
          <li className="font-serif text-blue-300 underline m-4"><Link to = "/newSession">New Session</Link></li>
          <li className="font-serif text-blue-300 underline m-4"><Link to = "/existingSession">Existing Session</Link></li>
        </ul>
        <Switch>
          <Route exact path = "/">
            <Main />
          </Route>
          <Route exact path = "/existingSession">
            <ExistingSession />
          </Route>
          <Route path = "/newSession">
            <NewSession />
          </Route>
          <Route path="/chooser">
            <Chooser />
          </Route>
          <Route path="/cheecker">
            <Cheecker />
          </Route>
        </Switch>
      </header>
    </div>
  );
}

export default App;
