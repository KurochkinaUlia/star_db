import React, {Component} from "react";
import './App.css';
import Header from "../header/header";
import RandomPlanet from "../random-planet/random-planet";
import ItemList from "../item-list/item-list";
import PersonDetails from "../person-details/person-details";
import SwapiService from "../../services/swapi-service";

class App extends Component {

    swapiService = new SwapiService();

    state = {
        selectedPerson: null

    };


    onItemSelected = (id) => {
        this.setState({
            selectedPerson: id
        });
    };


    render() {
console.log ('App-state', this.state)
        return (
            <div className='wrap-app'>

                <Header/>
                <RandomPlanet/>
                <div className='wrap'>
                    <div className='wrap-item'>
                        <ItemList onItemSelected={this.onItemSelected}/>
                    </div>
                    <div className='wrap-item'>
                        <PersonDetails personId = {this.state.selectedPerson}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;
