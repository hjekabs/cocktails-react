import React, { useState, useEffect, FormEvent } from "react"
import { getIngredientList, getCocktails } from "../services/cocktailIngredients"
import CocktailCard from "../components/CocktailCard"

import Select from 'react-select'

interface IngredientOptions {
    value: string,
    label: string
}

const CocktailIngredient = () => {
    const [ingredients, setIngredients] = useState([])
    const [loaded, setLoaded] = useState(false)
    const [selectedIngredients, setSelectedIngredients] = useState([])
    const [cocktails, setCocktails] = useState([])

    const customStyles = {
        control: (styles: any) => ({
            ...styles,
            backgroundColor: "#0F3460",
            borderColor: "#1A1A2E",
        }),
        menu: (provided: any) => ({
            ...provided,
            backgroundColor: "#0F3460"
        }),
        option: (styles: any) => ({
            ...styles,
            ':hover': {
                cursor: 'pointer',
                color: '#1A1A2E'
            }
        }),
        multiValue: (styles: any) => ({
            ...styles,
            backgroundColor: '#1A1A2E',
            color: 'white',
            borderRadius: '5px'
        }),
        multiValueLabel: (styles: any) => ({
            ...styles,
            color: 'white'
        }),
    }


    const handleIngredientChange = async (ingredients: any) => {
        setSelectedIngredients(ingredients)
    }

    useEffect(() => {
        (async () => {
            const ingredients = await getIngredientList()
            let ingredientOptions: any = []
            for (const cocktail of ingredients) {
                let obj: IngredientOptions = {
                    value: cocktail.strIngredient1,
                    label: cocktail.strIngredient1
                }
                ingredientOptions.push(obj)
            }
            setIngredients(ingredientOptions)
            setLoaded(true)
        })()
    }, [])


    useEffect(() => {
        if (selectedIngredients.length) {
            (async () => {
                const cocktails = await getCocktails(selectedIngredients)
                setCocktails(cocktails)
            })()
        }
    }, [selectedIngredients])

    if (loaded) {
        return (
            <div>
                <label className="my">Search by ingredient:</label>
                <Select styles={customStyles} isMulti options={ingredients} onChange={handleIngredientChange} />
                {
                    cocktails.length
                        ?
                        <div className="cocktail-grid">
                            {
                                cocktails.map(cocktail => {
                                    return (
                                        <CocktailCard cocktail={cocktail} />
                                    )
                                })
                            }
                        </div>
                        : ""
                }
            </div>

        )
    } else {
        return (
            <div>Loading....</div>
        )
    }
}

export default CocktailIngredient;