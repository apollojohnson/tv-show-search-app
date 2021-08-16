import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import components
import Navbar from "./components/Navbar";

// import pages
import HomePage from "./pages/Homepage";
import SinglePage from "./pages/Singlepage";

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/singleshow/:id" component={SinglePage} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
