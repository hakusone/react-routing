import React from 'react';
import { Link } from 'react-router-dom';

function RouteLink({ route }) {
  return (
    <li key={route.key}>
      <Link to={route.path}>
        {route.key} ({route.path})
      </Link>
      {route.routes && <Navigation routes={route.routes} />}
    </li>
  );
}

function Navigation({ routes }) {
  return (
    <ul>
      {routes.map(route => {
        return <RouteLink route={route} />;
      })}
    </ul>
  );
}

export default Navigation;