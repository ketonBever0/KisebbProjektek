export type Cocktail = {
    idDrink: string;
    strDrink: string;
    strCategory: string;
    strAlcoholic: string;
    strGlass: string;
    strInstructions: string;
    strDrinkThumb: string;
    strIngredient1: string;
    strIngredient2: string;
    strIngredient3: string;
    strIngredient4: string;
    strIngredient5: string;
    strIngredient6: string;
    strIngredient7: string;
    strIngredient8: string;
    strIngredient9: string;
    strIngredient10: string;
    strIngredient11: string;
    strIngredient12: string;
    strIngredient13: string;
    strIngredient14: string;
    strIngredient15: string;

}

export type FilteredList = {
    strDrink: string;
    strDrinkThumb: string;
    idDrink: string;
}

export type FilterType = {
    categories: Array<Object>,
    glasses: Array<Object>,
    ingredients: Array<Object>,
    alcoholic: Array<Object>
}

export type SelectedFilterType = {
    category: string,
    glass: string,
    ingredient: string,
    alcoholic: string
}