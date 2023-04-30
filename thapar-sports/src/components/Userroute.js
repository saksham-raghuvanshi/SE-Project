// UserRoutes.js

import React from 'react';
import { Route } from 'react-router-dom';
import Dashboard from './dashboard';

function Userroute() {
    return (
      <>
        {/* render Dashboard component */}
        <Route path="/" element={<Dashboard/>} />
      </>
    );
  }
  
  export default Userroute;