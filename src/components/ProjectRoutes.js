import React from 'react';
import { ROUTE_CONSTANTS } from "../shared/constants";
import {
  Routes, Route,
} from 'react-router-dom';
import HomePage from './HomePage';


const ProjectRoutes = () => {
  return (
    <Routes>
        <Route 
            exact
            path={ROUTE_CONSTANTS.HOME}
            element={<HomePage/> } 
        />
    </Routes>
  )
}

export default ProjectRoutes