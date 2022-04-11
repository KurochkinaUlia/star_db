import './random-planet.css';
import {Component} from "react";
import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner/spinner";

class RandomPlanet extends Component {

    swapiService = new SwapiService();

    state = {
        planet: {}
    };

    componentDidMount() {
        this.updatePlanet();
        setInterval(this.updatePlanet, 5000);
    }


    onPlanetLoaded = (planet) => {
        this.setState({planet});
    };

    updatePlanet = () => {
        const id = Math.floor(Math.random()*25) + 2;
        this.swapiService
            .getPlanet(id)
            .then(this.onPlanetLoaded);
    }

    render() {

        const { planet: {id, name, population, rotationPeriod, diameter}} = this.state
        return (

            <div className='wrap-randomPlanet'>
                {
                    this.state.planet.id ?
                        <>
                            <img className='img-randomPlanet'
                                 src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
                                 alt='planet'
                            />

                            <div className='info-planet'>
                                <div className='name-planet'> {name} </div>
                                <ul className='details-planet'>
                                    <li>Population {population} </li>
                                    <li>Rotation Period {rotationPeriod}</li>
                                    <li>Diameter {diameter}</li>
                                </ul>
                            </div>
                        </> : <Spinner />
                }



            </div>
        )
    }
}

export default RandomPlanet;