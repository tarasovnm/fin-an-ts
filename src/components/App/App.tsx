import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Home from '../Home/Home';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
