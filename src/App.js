import React from 'react';
import './App.css';
import {MovieCatalog} from "./components/movieCatalog/MovieCatalog";
import {Header} from "./components/header/Header";
import {Footer} from "./components/footer/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <MovieCatalog/>
            <Footer/>
        </div>
    );
}

export default App;
