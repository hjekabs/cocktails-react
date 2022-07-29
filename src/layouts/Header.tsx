import { Link, useLocation } from "react-router-dom";
import "./Header.scss"

const Header = () => {

    const path = useLocation();
    return (
        <div className="app-filter-header">
            <Link to="/cocktail-random">
                <div className={(path.pathname === '/cocktail-random') ? 'app-filter-tab active-filter-tab ' : 'app-filter-tab'}>Suggest random cocktail</div>
            </Link>
        </div>
    )
}

export default Header