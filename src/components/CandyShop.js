import candies from '../assets/candy.json';
import CandyCard from './CandyCard';

const CandyShop = () => {
    console.log(candies);
    return (
        <section>
            <h1>Gerts Godisbutik</h1>
            <h3>Webbens bästa godiskiosk</h3>
            {
                candies.map((candy, index) => <CandyCard key={index} candy={candy} />)
            }
        </section>
    );
}

export default CandyShop;