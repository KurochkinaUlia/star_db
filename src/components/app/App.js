import React from "react";
import './App.css';
import Header from "../header/header";
import RandomPlanet from "../random-planet/random-planet";
import ItemList from "../item-list/item-list";
import PersonDetails from "../person-details/person-details";
import Spinner from "../spinner/spinner";

const App = () => {

    return (
        <div className='wrap-app'>

            <Header/>
            <RandomPlanet/>
            <div className='wrap'>
                <div className='wrap-item'>
                    <ItemList/>
                </div>
                <div className='wrap-item'>
                    <PersonDetails/>
                </div>
            </div>
        </div>
    )
}

export default App;
