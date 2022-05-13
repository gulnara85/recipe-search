
function myRecipesComponent ({label, image, calories, ingredients, cuisineType, link}) {
    
    return (
        <div >
            <div className="container heading">
            <h2>{label}</h2>
            </div>

            <div className="container">
            <h4 className="type"> {cuisineType} cuisine </h4>
            </div>

            <div className="container par">
            <p className="calories"> {calories.toFixed() } calories </p>
            </div> 

            <div className="container">
            <img className="picture" alt="pic" width="300px" src={image} />
            </div>        

            <ul className="list">
                {ingredients.map (ingredient => (
                    <li > {ingredient} </li>
                ) )}
            </ul>

            <div className="container">
            <a href={link} target="_blank" className="instructions">Full Recipe</a>
            </div>

        </div>
    )
}
export default myRecipesComponent;