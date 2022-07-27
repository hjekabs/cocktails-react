import React, { useState, useEffect } from "react"
import axios from "axios"

interface Cocktail {
    strIngredient1: string
}

const CocktailName = () => {
    const [cocktails, setCocktails] = useState([])
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        axios.get("https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list").then(response => {
            setCocktails(response.data.drinks)
            setLoaded(true)
        }).catch(err => console.log(err))
    }, [])

    if (loaded) {
        return (
            <div>
                <ul>
                    {
                        cocktails?.map((cocktail: Cocktail) => (
                            <li key={cocktail.strIngredient1}>{cocktail.strIngredient1}</li>
                        ))
                    }
                </ul>

            </div>

        )
    } else {
        return (
            <div>Loading....</div>
        )
    }
}

export default CocktailName;