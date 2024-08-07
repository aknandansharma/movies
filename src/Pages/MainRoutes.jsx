import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import LogIn from './LogIn';
import MovieDetail from './MovieDetail';

const MainRoutes = () => {
    return (
        <Routes>
            <Route exact path="/" component={HomePage} />
            <Route path="/login" component={LogIn} />
            <Route path="/movie/:id" component={MovieDetail} />
        </Routes>
    );
};

export default MainRoutes;
