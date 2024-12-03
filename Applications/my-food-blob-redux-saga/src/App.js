import React from 'react';
import Routing from './Components/Routing';
import Loading from './containers/Loading';

function App() {
  return (
    <div>
      <Loading></Loading>
      <Routing></Routing>
    </div>
  );
}

export default App;
