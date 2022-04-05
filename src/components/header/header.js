import './header.css';

const Header = () => {
    return (
        <div className='wrap-header'>
            <h1>Star DB</h1>
            <div className='menu-header'>
                <div className='menu-text'>People</div>
                <div className='menu-text'>Planets</div>
                <div className='menu-text'>Starships</div>
            </div>

        </div>
    )


};

export default Header;