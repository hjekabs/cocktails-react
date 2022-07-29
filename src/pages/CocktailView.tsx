import { useParams } from "react-router-dom";
import { useState, useEffect } from "react"
import { getCocktailDetails } from "../services/cocktails"
import CocktailDetails from "../components/CocktailDetails"
import "./CocktailView.scss"


interface Details {
    strDrinkThumb: string,
    strDrink: string,
    strInstructions: string,
    strAlcoholic: string,
    strCategory: string,
}

const CocktailView = () => {

    const { id } = useParams()
    const [details, setDetails] = useState({} as Details)

    useEffect(() => {
        (async () => {
            const details = await getCocktailDetails(id)
            console.log(details)
            setDetails(details)
        })()
    }, [id])

    return (
        <div className="cocktail-view">
            <CocktailDetails details={details} />
        </div>
    )
}

export default CocktailView