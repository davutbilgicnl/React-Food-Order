import { useEffect, useState } from "react";
import { fetchMeals } from "../utils/http";

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
        <li key={meal.id}>{meal.name}</li>
      ))}
    </ul>
  );
}
