import { Link, useLocation } from "react-router-dom";
import "./Header.scss"

const Header = () => {

    const path = useLocation();
    return (
        <div className="app-filter-header">
            <Link to="/cocktail-name">
                <div className={(path.pathname === '/cocktail-name') ? 'app-filter-tab active-filter-tab ' : 'app-filter-tab'}>Search by cocktail name</div>
            </Link>
            <Link to="/cocktail-ingredient">
                <div className={(path.pathname === '/cocktail-ingredient') ? 'app-filter-tab active-filter-tab ' : 'app-filter-tab'}>Search by ingredient</div>
            </Link>
            <Link to="/cocktail-random">
                <div className={(path.pathname === '/cocktail-random') ? 'app-filter-tab active-filter-tab ' : 'app-filter-tab'}>Suggest random cocktail</div>
            </Link>
        </div>
    )
}

export default Header