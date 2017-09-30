import React from 'react';
import {NavLink} from 'reactstrap';

const NotFoundPage = () => {
  return (
    <div>
      <h4>
        404 Page Not Found
      </h4>
      <NavLink href="/"> Go back to homepage </NavLink>
    </div>
  );
};

export default NotFoundPage;
