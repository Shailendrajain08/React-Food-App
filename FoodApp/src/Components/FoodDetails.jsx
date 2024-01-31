import { useEffect, useState } from "react";
import Styles from "./foodDetails.module.css";
import ItemList from "./ItemList";

export default function FoodDetails({ foodId }) {
  const [foodDetails, setFoodDetails] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = "05938819ed994224a90b5c8c63caa446";

  useEffect(() => {
    async function fetchFood() {
      await fetch(`${URL}?apiKey=${API_KEY}`)
        .then((res) => res.json())
        .then((resp) => {
          setFoodDetails(resp);
          setIsLoading(false);
          console.log(resp);
        })
        .catch((err) => console.log(err));
    }
    fetchFood();
  }, [foodId]);

  return (
    <div>
      <div className={Styles.recipeCard}>
        <h1 className={Styles.recipeName}>{foodDetails.title}</h1>
        <img className={Styles.recipeImage} src={foodDetails.image} alt="" />
        <div className={Styles.recipeDetails}>
          <span>
            <strong>⏱️{foodDetails.readyInMinutes} Minutes</strong>
          </span>
          <span>
            <strong>
              {foodDetails.vegetarian ? "🥕 Vegitarian" : "🍖 Non-Vegitarian"}
            </strong>
          </span>
          <span>
            👨‍👩‍👧‍👦<strong>Serves: {foodDetails.servings} Peoples</strong>
          </span>
          <span>
            <strong> {foodDetails.vegan ? "🐮 Vegan " : ""}</strong>
          </span>
        </div>
        <div>
          <span>
            <strong>
              &#x20B9; {Math.ceil((foodDetails.pricePerServing / 100) * 83.11)}{" "}
              Per Serving
            </strong>
          </span>
        </div>

        <h2>Ingredients</h2>
        <ItemList food={foodDetails} isLoading={isLoading}/>
        <h2>Instructions</h2>
        <div className={Styles.recipeInstructions}>
          <ol>
            {isLoading ? (
              <p>Loading...</p>
            ) : (
              foodDetails.analyzedInstructions[0].steps.map((step) => (
                <li key={step.step}>{step.step}</li>
              ))
            )}
          </ol>
        </div>
      </div>
    </div>
  );
}
