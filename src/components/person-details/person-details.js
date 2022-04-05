import './person-details.css';

const PersonDetails = () => {
    return (
        <div className='wrap-personDetails'>

            <img className='img-personDetails'
                 alt='img'
                 src='https://www.icover.ru/upload/iblock/471/471763a546da008d3117d3e4e1e62fd3.jpg'/>

            <div className='info-personDetails'>
                <div className='name-personDetails'> R2-D2 </div>
                <ul className='details-personDetails'>
                    <li>Gender: n/a</li>
                    <li>Birth year: 33BBY</li>
                    <li>Eye color: red</li>
                </ul>
            </div>

        </div>
    )
}
export default PersonDetails;