export type RecipeItem = {
    key: number,
    title: string,
    imageUrl: string,
    prepTime: string,
    cookTime: string,
    servings: number,
    ingredients: string[],
    cookingSteps: string[];
}