interface Cocktail {
    cocktail: any
}

const CocktailCard = ({ cocktail }: Cocktail) => {
    return (
        <div className="cocktail-card">
            <div>
                <img width={128} height={128} src={cocktail.strDrinkThumb} />
            </div>
            <div>
                <h3>{cocktail.strDrink}</h3>
            </div>
        </div>
    )
}

export default CocktailCard