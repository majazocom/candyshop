import { Link } from "react-router-dom";

const CandyCard = (props) => {
    const data = props.candy;
    const id = props.candy.id;
    return (
        <section>
            <Link to={{
                pathname: 'candyinfo/:' + id,
                state: {data}
            }}>
                <img width="200" height="200" src={"./svg/" + id + ".svg"} alt={data.title} />
                <h3>{data.title}</h3>
            </Link>
        </section>
    );
}

export default CandyCard;