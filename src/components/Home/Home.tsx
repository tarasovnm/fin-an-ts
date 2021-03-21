import React from 'react';
import { useHistory } from 'react-router-dom';

const Home: React.FC = () => {
  const history = useHistory();

  return (
    <div className="home-page container pt-4">
      <h1>Главная страница с описанием приложения</h1>
      <p className="lead fs-1 fw-bold lh-lg">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut sint omnis consectetur nemo molestias, eligendi cupiditate vel at velit amet cumque incidunt ipsa blanditiis placeat recusandae repellat eius maiores quae.</p>
      <button className="btn btn-primary" onClick={() => history.push('/analysis')}>Ввести данные организации</button>
    </div>
  );
}

export default Home;