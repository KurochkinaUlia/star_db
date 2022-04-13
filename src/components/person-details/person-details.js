import './person-details.css';
import {Component} from "react";
import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner/spinner";


class PersonDetails extends Component {

    swapiService = new SwapiService();

    state = {
        person: {},
        isLoading: undefined
    };

    componentDidMount() {
        this.updatePerson();
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.personId !== this.props.personId) {
            this.setState({
                isLoading: true
            })
            this.updatePerson();
        }

    }

    onPersonDetails = (person) => {
        this.setState({
            person,
            isLoading: false
        });
    };

    updatePerson = () => {
        const id = this.props.personId;
        if (id) {
            this.swapiService
                .getPerson(id)
                .then(this.onPersonDetails);
        }
    }

    render() {
        const {person: {id, name, gender, birthYear, eyeColor }} = this.state
        if (!id && !this.state.isLoading) {
            return (
                <div className='wrap-personDetails'>
                    <div className='spinner'>

                        <div>Выбери персонажа</div>

                    </div>
                </div>

            )
        }
        if (this.state.isLoading  ) {
            return (
                <div className='wrap-personDetails'>
                    <div className='spinner'>

                        <div><Spinner/></div>

                    </div>
                </div>

            )
        }
        return (
            <div className='wrap-personDetails'>

                <img className='img-personDetails'
                     alt='img'
                     src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}/>

                <div className='info-personDetails'>
                    <div className='name-personDetails'> {name} </div>
                    <ul className='details-personDetails'>
                        <li>Gender: {gender} </li>
                        <li>Birth year: {birthYear} </li>
                        <li>Eye color: {eyeColor} </li>
                    </ul>
                </div>

            </div>
        )
    }


}
export default PersonDetails;