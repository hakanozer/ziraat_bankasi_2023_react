import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

function App() {

  const location = useLocation()
  console.log(location.state)

  return (
    <>   
    <div>App</div>
    <NavLink to={'/detail/1'}>Prod-1</NavLink>
    <NavLink to={'/detail/2'}>Prod-2</NavLink>
    <NavLink to={'/detail/3'}>Prod-3</NavLink>
    <NavLink to={'/detail/4'}>Prod-4</NavLink>
    </>
  );
}

export default App;
