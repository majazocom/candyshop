import candies from '../assets/candy.json';
import CandyCard from './CandyCard';
import '../App.css';

const CandyShop = () => {
    
    const animalFriendly = candies.filter(candy => candy.vegan === true);

    return (
        <section className="candyshop-container">
            <h1>Gerts Godisbutik</h1>
            <img src="./svg/008-candy-machine.svg" alt="candy machine" width="400" height="400" />
            <h3>Webbens bästa godiskiosk</h3>
            <section className="candies-container">
                {
                    candies.map((candy, index) => <CandyCard key={index} candy={candy} />)
                }
            </section>

            <h3>Veganskt godis</h3>
                {
                    animalFriendly.map((a, index) => <CandyCard key={index} candy={a} />)
                }
        </section>
    );
}

export default CandyShop;