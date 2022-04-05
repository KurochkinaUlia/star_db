import './random-planet.css';

const RandomPlanet = () => {
    return (
        <div className='wrap-randomPlanet'>

            <img className='img-randomPlanet'
                 src='https://pm1.narvii.com/7385/ce3308d9945af447637bb3a4fd362a45fa9d4865r1-2048-1365v2_uhq.jpg'
                 alt='planet'
            />

            <div className='info-planet'>
                <div className='name-planet'> Hoth </div>
                <ul className='details-planet'>
                    <li>Population unknown</li>
                    <li>Rotation Period 23</li>
                    <li>Diameter 7200</li>
                </ul>
            </div>

        </div>
    )
}
export default RandomPlanet;