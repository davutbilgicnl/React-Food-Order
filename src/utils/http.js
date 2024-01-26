export async function fetchMeals() {
  const response = await fetch("http://localhost:3000/meals", { method: "GET" });
  const meals = await response.json();

  if (!response.ok) {
    throw new Error("Failed to fetch meals");
  }

  return meals;
}

export async function fetchOrders() {
  const response = await fetch("http://localhost:3000/orders", { method: "GET" });
  const orders = await response.json();

  if (!response.ok) {
    throw new Error("Failed to fetch orders");
  }

  return orders;
}

export async function updateOrders(orders) {
  const response = await fetch("http://localhost:3000/orders", {
    method: "PUT",
    body: JSON.stringify({ orders }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const resData = await response.json();

  if (!response.ok) {
    throw new Error("Failed to update orders");
  }

  return resData;
}
