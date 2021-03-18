const CandyCard = (props) => {

    return ( 
        <section>
            <img width="200" height="200" src={"./svg/" + props.candy.id + ".svg"} alt={props.candy.title} />
            <h3>{props.candy.title}</h3>
        </section>
     );
}
 
export default CandyCard;