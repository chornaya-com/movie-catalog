import React from 'react';
import './App.css';
import {Footer} from "./components/footer/Footer";
import {Provider} from "react-redux";
import {store} from "./redux/store";
import {MovieCatalogConnected} from "./components/movieCatalog/MovieCatalog.connected";
import {HeaderConnected} from "./components/header/Header.connected";


function App() {
    return (
        <Provider store={store}>
                <div className="App">
                    <HeaderConnected/>
                    <MovieCatalogConnected/>
                    <Footer/>
                </div>
        </Provider>
    );
}

export default App;
