import axios from "axios"

interface IngredientOptions {
    value: string,
    label: string
}

export const getIngredientList = () => {
    return axios.get("https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list").then(response => {
        return response.data.drinks
    }).catch(err => console.log(err))
}

export const getCocktails = (ingredients: Array<IngredientOptions>) => {
    let queryString = ""
    for (const ingredient of ingredients) {
        queryString += `i=${ingredient.value}`
    }

    return axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?${queryString}`).then(response => {
        return response.data.drinks ? response.data.drinks : []
    }).catch(err => console.log(err))
}