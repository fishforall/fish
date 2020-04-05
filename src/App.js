import React from 'react';
import './App.css';
// import FaceBookLogin from "./facebookLogin"
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Main from "./routes/main"
import AddFish from "./routes/addfish"
import PersonalUnit from "./routes/personeunit"
import ProtectedRoute from "./routes/protectedroute"
import Login from "./routes/login"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/login" exact component={Login} />
          <ProtectedRoute path="/addfish" exact component={AddFish}></ProtectedRoute>
          <Route path="/psersonalunit" exact component={PersonalUnit} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
