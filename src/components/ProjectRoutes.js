import React from 'react';
import { ROUTE_CONSTANTS } from "../shared/constants";
import {
  Routes, Route,
} from 'react-router-dom';
import HomePage from './HomePage';
import Rentals from './Rentals';
import Paragliding from './Paragliding';
import ContactUs from './ContactUs';

const ProjectRoutes = () => {
  return (
    <Routes>
        <Route 
            exact
            path={ROUTE_CONSTANTS.HOME}
            element={<HomePage/> } 
        />
        <Route 
            exact
            path={ROUTE_CONSTANTS.RENTALS}
            element={<Rentals/> } 
        />
        <Route 
            exact
            path={ROUTE_CONSTANTS.PARAGLIDING}
            element={<Paragliding/> } 
        />
        <Route 
            exact
            path={ROUTE_CONSTANTS.CONTACTUS}
            element={<ContactUs/> } 
        />
    </Routes>
  )
}

export default ProjectRoutes