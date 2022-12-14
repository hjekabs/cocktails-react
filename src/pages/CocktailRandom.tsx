import { getRandomCocktailDetails } from "../services/cocktails"
import CocktailDetails from "../components/CocktailDetails"
import { useState, useEffect } from "react"
import "./CocktailView.scss"


interface Details {
    strDrinkThumb: string,
    strDrink: string,
    strInstructions: string,
    strAlcoholic: string,
    strCategory: string,
}

const CocktailRandom = () => {

    const [details, setDetails] = useState({} as Details)

    useEffect(() => {
        (async () => {
            const details = await getRandomCocktailDetails()
            console.log(details)
            setDetails(details)
        })()
    }, [])


    return (
        <div className="cocktail-view">
            <CocktailDetails details={details} />
        </div>
    )
}

export default CocktailRandom;