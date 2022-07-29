import React, { useState, useEffect } from "react"
import axios from "axios"
import Select from 'react-select'

interface Cocktail {
    strIngredient1: string
}

interface IngredientOptions {
    value: string,
    label: string
}

const CocktailIngredient = () => {
    const [cocktails, setCocktails] = useState([])
    const [loaded, setLoaded] = useState(false)
    const [selectedIngredients, setSelectedIngredients] = useState([])

    const customStyles = {
        menu: () => ({
            backgroundColor: "#0F3460"
        })
    }


    const handleIngredientChange = (ingredients: any) => {
        setSelectedIngredients(ingredients)
    }

    const searchCocktails = () => {

    }

    useEffect(() => {
        axios.get("https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list").then(response => {
            let ingredientOptions: any = []
            for (const cocktail of response.data.drinks) {
                let obj: IngredientOptions = {
                    value: cocktail.strIngredient1,
                    label: cocktail.strIngredient1
                }
                ingredientOptions.push(obj)
            }
            setCocktails(ingredientOptions)
            setLoaded(true)
        }).catch(err => console.log(err))
    }, [])

    if (loaded) {
        return (
            <div>
                <form>
                    <label>Search by ingredient:</label>
                    <Select styles={customStyles} isMulti options={cocktails} onChange={handleIngredientChange} />
                    <button onClick={searchCocktails}>Search Cocktails</button>
                </form>
            </div>

        )
    } else {
        return (
            <div>Loading....</div>
        )
    }
}

export default CocktailIngredient;