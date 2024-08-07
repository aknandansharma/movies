import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { store } from "./Redux/store";
import HomePage from "./Pages/HomePage";
import LogIn from "./Pages/LogIn";
import MovieDetail from "./Pages/MovieDetail";

function App() {
    return (
        <Provider store={store}>
            <Router>
                <Routes>
                    <Route path='/'  exact element={<HomePage/>} />
                    <Route path='/login'  exact element={<LogIn/>} />
                    <Route path='/movie/:id'  exact element={<MovieDetail/>} />
                </Routes>
            </Router>
        </Provider>
    );
}

export default App;
