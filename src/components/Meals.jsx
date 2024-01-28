import { useEffect, useState } from "react";
import { fetchMeals } from "../utils/http";
import MealItem from "./MealItem";

export default function Meals() {
  const [fetchedMeals, setFetchedMeals] = useState([]);

  useEffect(() => {
    async function getMeals() {
      try {
        const meals = await fetchMeals();
        setFetchedMeals(meals);
      } catch (error) {}
    }

    getMeals();
  }, []);

  return (
    <ul id="meals">
      {fetchedMeals.map((meal) => (
        <MealItem key={meal.id} meal={meal} />
      ))}
    </ul>
  );
}
