import './item-list.css';
import {Component} from "react";
import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner/spinner";

class ItemList extends Component {

    swapiService = new SwapiService();

    state = {
        peopleList: null,
        itemId: null
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

    onClickItem = (id) => {
        this.props.onItemSelected(id)
        this.setState({
                itemId: id
            }
        )
    }

    nameList = (arr) => {

        return arr.map(({id, name}) => {
            return (
                <li key={id}
                    onClick={() => this.onClickItem(id)}
                    className={`${this.state.itemId === id ? 'listActive' : ''}`}>
                    {name}
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

