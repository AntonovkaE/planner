import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {privateRoutes, publicRoutes, RouteNames} from "../router";

const AppRouter = () => {
    const auth = true;
    return (
        auth
            ?
            <Routes>
                {privateRoutes.map(route =>
                    <Route key={route.path} path={route.path} element={route.component}/>)
                }
                <Route path='*' element={
                    <Navigate to={RouteNames.LOGIN}/>}/>
            </Routes>
            :
            <Routes>
                {publicRoutes.map(route =>
                    <Route key={route.path} path={route.path} element={route.component}/>)}
                <Route path='*' element={
                    <Navigate to={RouteNames.EVENT}/>
                }/>
            </Routes>

    );
};

export default AppRouter;
