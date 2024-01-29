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

export async function updateOrders(items, customerData) {
  const response = await fetch("http://localhost:3000/orders", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      order: {
        items,
        customer: customerData,
      },
    }),
  });

  const resData = await response.json();

  if (!response.ok) {
    throw new Error("Failed to update orders");
  }

  return resData;
}

export async function postOrders(items, customerData) {
  const response = await fetch("http://localhost:3000/orders", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      order: {
        items,
        customer: customerData,
      },
    }),
  });

  const resData = await response.json();

  if (!response.ok) {
    throw new Error("Failed to post orders");
  }

  return resData;
}
