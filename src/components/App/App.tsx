import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Home from '../Home/Home';

const App: React.FC = () => {
  return (
    <div className="App d-flex flex-column min-vh-100">
      <Header />
      <div className="content wrapper flex-grow-1">
        <Home />
      </div>
      <Footer />
    </div>
  );
}

export default App;
