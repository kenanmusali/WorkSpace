import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const HomeWeb = () => {
  const navigate = useNavigate();

  React.useEffect(() => {
    const lastVisitedRoute = localStorage.getItem("lastVisitedRoute");

    // If there's a stored route and it's not the home page, navigate to it
    if (lastVisitedRoute && lastVisitedRoute !== "/") {
      navigate(lastVisitedRoute);
    }
  }, [navigate]);

  return (
    <div>
      HomeWeb
      <NavLink to="/notes">Click me</NavLink>
    </div>
  );
};

export default HomeWeb;
