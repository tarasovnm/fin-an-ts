import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Analysis from '../Analysis/Analysis';
import Docs from '../Docs/Docs';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Home from '../Home/Home';

const App: React.FC = () => {
  return (
    <div className="App d-flex flex-column min-vh-100">
      <BrowserRouter>
        <Header />
        <div className="content wrapper flex-grow-1">
          <Switch>
            <Route component={Home} path="/" exact />
            <Route component={Analysis} path="/analysis" />
            <Route component={Docs} path="/docs" />
          </Switch>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
