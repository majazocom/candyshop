import '../App.css';

const CandyInfo = (props) => {
    const candyData = props.location.state.data;
    return (
        <section className="candyinfo-container">
            <img width="400" height="400" src={"../svg/" + candyData.id + ".svg"} alt={candyData.title} />
            <aside>
                <h1>{candyData.title}</h1>
                <h3>{candyData.desc}</h3>
            </aside>
        </section>
    );
}

export default CandyInfo;