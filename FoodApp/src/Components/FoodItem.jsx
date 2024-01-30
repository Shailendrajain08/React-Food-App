import Styles from "./foodItem.module.css";

export default function FoodItem({ food, setFoodId  }) {
  return (
    <div className={Styles.itemContainer}>
      <img className={Styles.itemImg} src={food.image} alt="" />
      <div className={Styles.itemContent}>
        <p className={Styles.itemName}>{food.title}</p>
      </div>
      <div className={Styles.buttonContainer}>
      <button onClick={() => {setFoodId(food.id)}} className={Styles.itemButton}>View Recipe</button>
      </div>
    </div>
  );
}
