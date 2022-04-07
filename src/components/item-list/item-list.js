import './item-list.css';
import {Component} from "react";
import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner/spinner";

class ItemList extends Component {

    swapiService = new SwapiService();

    state = {
        peopleList: null,

    };

    componentDidMount() {
        this.swapiService
            .getAllPeople()
            .then((peopleList) => {
                this.setState({
                    peopleList,
                });
            });
    }

    nameList = (arr) => {
        return arr.map((n) => {
            return (
                <li key={n.id}>
                    <a>
                        {n.name}
                    </a>
                </li>
            );
        });
    }

    render() {

        const {peopleList} = this.state;
        if (!peopleList) {
            return <Spinner/>;
        }

        const items = this.nameList(peopleList);

        return (
            <div className='wrap-itemList'>
                <ul className='ul-wrap'>
                    {items}
                </ul>

            </div>
        )
    }
}

export default ItemList;

