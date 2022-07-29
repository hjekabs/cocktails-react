import { useNavigate } from "react-router-dom";

interface DetailsParams {
    strDrinkThumb: string,
    strDrink: string,
    strInstructions: string,
    strAlcoholic: string,
    strCategory: string,
}

interface Details {
    details: DetailsParams
}

const CocktailDetails = ({ details }: Details) => {

    const navigate = useNavigate()

    return (

        <div className="cocktail-view">
            <div className="text-left my go-back" onClick={() => navigate(-1)}>
                Go Back
            </div>

            <div className="cocktail-details-card">
                <div className="cocktail-card-body">
                    <div>
                        <img width={256} height={256} src={details.strDrinkThumb} alt="" />
                    </div>
                    <div>
                        <h3>{details.strDrink}</h3>
                    </div>
                    <div>
                        {details.strInstructions}
                    </div>
                </div>
            </div>
        </div>

    )
}

export default CocktailDetails