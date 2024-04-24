export const CategorizeIngredients = (ingredientsItems) => {
    return ingredientsItems.reduce((acc, ingredients) => {
        const {category} = ingredients
        if(!acc[category.name]) {
            acc[category.name] = []
        }
        acc[category.name].push(ingredients)

        return acc
    }, {})
}