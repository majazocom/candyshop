import { Link } from "react-router-dom"

const Navigation = () => {
    return ( 
        <section>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/candyshop">Shop</Link>
                </li>
            </ul>
        </section>
     );
}
 
export default Navigation;