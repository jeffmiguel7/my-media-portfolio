import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PhotosPage from "./pages/PhotosPage/PhotosPage";
import VideosPage from "./pages/VideosPage/VideosPage";

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={PhotosPage} />
          <Route path="/videos" component={VideosPage} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
