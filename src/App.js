import React from 'react';
import './App.css';
import {MovieCatalog} from "./components/movieCatalog/MovieCatalog";
import {Header} from "./components/header/Header";
import {Footer} from "./components/footer/Footer";
import {MovieContext} from "./state/MovieContext";
import {initialState} from "./state/state";

function App() {
    return (
        <MovieContext.Provider value={initialState}>
            <div className="App">
                <Header/>
                <MovieCatalog/>
                <Footer/>
            </div>
        </MovieContext.Provider>
    );
}

export default App;
